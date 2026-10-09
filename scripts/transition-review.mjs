import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
const b = await chromium.launch();
const result = [];
for (const width of [1440, 1024, 390]) {
  const c = await b.newContext({
    viewport: { width, height: width === 390 ? 844 : 1000 },
  });
  const p = await c.newPage();
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  await p.goto("http://127.0.0.1:3026", { waitUntil: "networkidle" });
  await p
    .getByRole("button", { name: "Brighter Futures", exact: true })
    .click();
  await p.waitForTimeout(1100);
  await p.locator(".focus-link").click();
  await p.waitForTimeout(150);
  const animations = await p.evaluate(() =>
    document
      .getAnimations()
      .map((a) => ({
        playState: a.playState,
        pseudo: a.effect?.pseudoElement,
      })),
  );
  await p.screenshot({ path: `qa/reconstruction/transition-${width}.png` });
  await p.waitForTimeout(850);
  await p.screenshot({ path: `qa/reconstruction/detail-settled-${width}.png` });
  result.push({
    width,
    url: p.url(),
    animations,
    errors,
    heading: await p.locator("h1").innerText(),
  });
  await c.close();
}
const c = await b.newContext({
  reducedMotion: "reduce",
  viewport: { width: 390, height: 844 },
});
const p = await c.newPage();
await p.goto("http://127.0.0.1:3026");
await p.getByRole("button", { name: "Brighter Futures", exact: true }).click();
await p.locator(".focus-link").click();
await p.waitForTimeout(150);
result.push({
  reducedMotion: true,
  url: p.url(),
  animations: await p.evaluate(() =>
    document
      .getAnimations()
      .map((a) => ({ duration: a.effect?.getTiming().duration })),
  ),
});
await b.close();
await fs.writeFile(
  "qa/reconstruction/transitions.json",
  JSON.stringify(result, null, 2),
);
console.log(JSON.stringify(result, null, 2));
