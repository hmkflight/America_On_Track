import { chromium } from "@playwright/test";
const b = await chromium.launch({ headless: true });
for (const w of [1440, 1024, 390]) {
  const p = await b.newPage({
    viewport: { width: w, height: w === 390 ? 844 : 1000 },
  });
  await p.goto("http://127.0.0.1:3026/", { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({
    path: `qa/reconstruction/home-${w}.png`,
    fullPage: true,
  });
  await p
    .getByRole("button", { name: "Brighter Futures", exact: true })
    .click();
  await p.waitForTimeout(1200);
  await p.screenshot({
    path: `qa/reconstruction/focus-${w}.png`,
    fullPage: true,
  });
  if (w !== 1024) {
    for (const route of [
      "/programs/emerging-leaders",
      "/about/leadership",
      "/about/history",
      "/impact",
      "/events/golf",
    ]) {
      await p.goto("http://127.0.0.1:3026" + route, {
        waitUntil: "networkidle",
      });
      await p.screenshot({
        path: `qa/reconstruction/${route.replaceAll("/", "-")}-${w}.png`,
        fullPage: true,
      });
    }
  }
  await p.close();
}
await b.close();
