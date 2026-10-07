import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
const b = await chromium.launch({ headless: true });
const results = [];
for (const width of [1440, 390]) {
  const context = await b.newContext({ viewport: { width, height: 900 } });
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.aotLcp = 0;
    window.aotCls = 0;
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) window.aotLcp = e.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const e of list.getEntries())
        if (!e.hadRecentInput) window.aotCls += e.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto("http://127.0.0.1:3017", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  results.push(
    await page.evaluate(() => ({
      width: innerWidth,
      lcpMs: window.aotLcp,
      cls: window.aotCls,
      navigationMs: performance.getEntriesByType("navigation")[0].duration,
      transferredBytes: performance
        .getEntriesByType("resource")
        .reduce((a, r) => a + r.transferSize, 0),
      scriptBytes: performance
        .getEntriesByType("resource")
        .filter((r) => r.initiatorType === "script")
        .reduce((a, r) => a + r.transferSize, 0),
      requests: performance.getEntriesByType("resource").length,
    })),
  );
  await context.close();
}
await fs.writeFile(
  "qa/rebuild/performance.json",
  JSON.stringify(
    {
      note: "Local production Chromium, unthrottled, fresh contexts. Not a Lighthouse score or field measurement.",
      results,
    },
    null,
    2,
  ),
);
console.log(results);
await b.close();
