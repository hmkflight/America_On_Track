import { chromium } from "@playwright/test";
const b = await chromium.launch({ headless: true });
const p = await b.newPage();
const base = process.env.QA_BASE || "http://127.0.0.1:3017";
for (const width of [1440, 1024, 390]) {
  await p.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
  await p.goto(base, { waitUntil: "networkidle" });
  await p.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images]
        .filter(
          (i) =>
            i.getClientRects().length &&
            getComputedStyle(i).visibility === "visible",
        )
        .map((i) => i.decode().catch(() => {})),
    );
  });
  await p.screenshot({ path: `qa/rebuild/hero-review-${width}.png` });
  if (
    await p
      .getByRole("button", { name: "Open the space", exact: false })
      .count()
  ) {
    await p
      .getByRole("button", { name: "Open the space", exact: false })
      .click();
    await p.waitForTimeout(1000);
    await p.screenshot({ path: `qa/rebuild/hero-open-${width}.png` });
  }
  await p.mouse.move(width * 0.7, 500);
  await p.screenshot({ path: `qa/rebuild/hero-depth-${width}.png` });
}
await b.close();
