import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
const browser = await chromium.launch({ headless: true });
const report = [];
const context = await browser.newContext();
const page = await context.newPage();
for (const width of [1440, 1024, 390]) {
  await page.setViewportSize({ width, height: width === 390 ? 600 : 900 });
  await page.goto("http://127.0.0.1:3017", { waitUntil: "networkidle" });
  await page
    .getByRole("button", { name: "Open the space", exact: false })
    .click();
  await page.waitForTimeout(1250);
  const a = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  report.push({
    width,
    state: "open aperture",
    overflow: await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    violations: a.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  const menu = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  report.push({
    width,
    state: "modal navigation",
    violations: menu.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  });
  for (let i = 0; i < 22; i++) {
    await page.keyboard.press("Tab");
    if (
      !(await page.evaluate(() =>
        document.querySelector("dialog")?.contains(document.activeElement),
      ))
    )
      throw Error("Focus escaped dialog");
  }
  await page.keyboard.press("Escape");
  await page.goto("http://127.0.0.1:3017/programs");
  for (const [name, count] of [
    ["Families", 3],
    ["Young people", 4],
    ["Schools", 5],
    ["Community", 2],
    ["Everyone", 6],
  ]) {
    await page.getByRole("button", { name, exact: true }).click();
    if ((await page.locator(".program-room").count()) !== count)
      throw Error("Filter failed: " + name);
  }
  for (const label of [
    "Lead",
    "Belong",
    "Move",
    "Nourish",
    "Choose",
    "Protect",
  ]) {
    const button = page.getByRole("button", {
      name: new RegExp("^" + label + " —"),
    });
    if ((await button.getAttribute("aria-expanded")) !== "true")
      await button.click();
    await page.locator(".expanded .room-description a").waitFor();
    await page.waitForTimeout(850);
    if(await page.locator(".expanded .room-description").evaluate(e=>e.scrollWidth>e.clientWidth+1))throw Error("Program content clipped");
  }
  console.log("Interactive states passed",width);
  report.push({
    width,
    state: "all audience filters and six programs",
    passed: true,
  });
}
for (const width of [1440, 390]) {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width, height: 900 },
  });
  const p = await context.newPage();
  await p.goto("http://127.0.0.1:3017/programs");
  const height=await p.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0;y<height;y+=700){await p.evaluate(y=>scrollTo({top:y,behavior:"instant"}),y);await p.waitForTimeout(60);}
  await p.evaluate(()=>scrollTo({top:0,behavior:"instant"}));
  await p.waitForLoadState("networkidle");
    if(await p.locator(".room-description").evaluateAll(elements=>elements.some(e=>e.scrollWidth>e.clientWidth+1)))throw Error("No-JS content clipped");
    await p.screenshot({ path: `qa/rebuild/no-js-${width}.png`, fullPage: true });
  report.push({
    width,
    state: "no JS",
    links: await p.locator(".room-description a:visible").count(),
    overflow: await p.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
  });
  await context.close();
}
await fs.writeFile(
  "qa/rebuild/edge-review.json",
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report, null, 2));
await browser.close();
