import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
const b = await chromium.launch();
const results = [];
const c = await b.newContext({
  viewport: { width: 390, height: 568 },
  hasTouch: true,
  isMobile: true,
});
const p = await c.newPage();
await p.goto("http://127.0.0.1:3026");
await p.getByRole("button", { name: "Nutrition", exact: true }).tap();
await p.waitForTimeout(1100);
results.push({
  test: "Touch selection",
  pass: (await p.locator(".focus-note h2").innerText()) === "Nutrition",
});
await p.locator(".focus-link").tap();
await p.waitForTimeout(900);
results.push({
  test: "Touch program navigation",
  pass: p.url().endsWith("/programs/nutrition"),
});
await c.close();
const c2 = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const p2 = await c2.newPage();
await p2.addInitScript(() => {
  Object.defineProperty(document, "startViewTransition", {
    value: undefined,
    configurable: true,
  });
});
await p2.route("**/_next/image*", (route) => route.abort());
await p2.goto("http://127.0.0.1:3026");
const button = p2.getByRole("button", {
  name: "Emerging Leaders",
  exact: true,
});
await button.focus();
await p2.keyboard.press("Enter");
results.push({
  test: "Keyboard selection with images unavailable",
  pass: (await p2.locator(".focus-note h2").innerText()) === "Emerging Leaders",
});
results.push({
  test: "Visible keyboard focus",
  pass: await button.evaluate(
    (e) => getComputedStyle(e).outlineStyle === "solid",
  ),
});
await p2.locator(".focus-link").click();
await p2.waitForTimeout(800);
results.push({
  test: "Navigation without View Transitions or images",
  pass:
    p2.url().endsWith("/programs/emerging-leaders") &&
    (await p2
      .getByRole("link", { name: "Teen interest form", exact: false })
      .isVisible()),
});
await p2.screenshot({
  path: "qa/reconstruction/images-unavailable.png",
  fullPage: true,
});
await b.close();
await fs.writeFile(
  "qa/reconstruction/resilience.json",
  JSON.stringify(results, null, 2),
);
console.log(results);
if (results.some((r) => !r.pass)) process.exitCode = 1;
