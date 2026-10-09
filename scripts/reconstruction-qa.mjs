import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
const base = process.env.QA_BASE || "http://127.0.0.1:3026";
const routes = [
  "/",
  "/programs",
  "/programs/emerging-leaders",
  "/programs/brighter-futures",
  "/programs/fitness",
  "/programs/nutrition",
  "/programs/drug-use-prevention",
  "/programs/tobacco-free-communities",
  "/about",
  "/about/leadership",
  "/about/history",
  "/impact",
  "/get-involved",
  "/donate",
  "/events/golf",
  "/contact",
  "/resources",
  "/privacy",
];
const report = {
  time: new Date().toISOString(),
  base,
  routes: [],
  interactions: [],
  errors: [],
  externalLinks: [],
  internalLinks: [],
};
const external = new Set(),
  internal = new Set();
const b = await chromium.launch({ headless: true });
const context = await b.newContext();
const p = await context.newPage();
p.on("pageerror", (e) => report.errors.push(e.message));
p.on("console", (m) => {
  if (m.type() === "error") report.errors.push(m.text());
});
async function settled() {
  await p.evaluate(() => document.fonts.ready);
  const height = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 700) {
    await p.evaluate((y) => scrollTo({ top: y, behavior: "instant" }), y);
    await p.waitForTimeout(40);
  }
  await p.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await p.waitForTimeout(120);
}
for (const width of [1440, 1024, 390]) {
  await p.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
  for (const route of routes) {
    const r = await p.goto(base + route, { waitUntil: "networkidle" });
    await settled();
    const state = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      h1: document.querySelectorAll("h1").length,
      broken: [...document.images]
        .filter((i) => i.getClientRects().length && !i.naturalWidth)
        .map((i) => i.src),
      links: [...document.querySelectorAll("a[href]")].map((a) =>
        a.getAttribute("href"),
      ),
    }));
    for (const link of state.links) {
      if (link.startsWith("http")) external.add(link);
      else if (link.startsWith("/")) internal.add(link);
    }
    const axe = await new AxeBuilder({ page: p })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    report.routes.push({
      width,
      route,
      status: r.status(),
      overflow: state.overflow,
      h1: state.h1,
      broken: state.broken,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    console.log(
      width,
      route,
      axe.violations.length,
      state.overflow ? "OVERFLOW" : "",
    );
  }
}
async function record(name, pass, extra = {}) {
  report.interactions.push({ name, pass, ...extra });
  console.log(name, pass ? "PASS" : "FAIL");
}
await p.setViewportSize({ width: 1440, height: 1000 });
await p.goto(base, { waitUntil: "networkidle" });
for (const name of [
  "Emerging Leaders",
  "Brighter Futures",
  "Fitness & Active Play",
  "Nutrition",
  "Drug-Use Prevention",
  "Tobacco-Free Communities",
]) {
  await p.getByRole("button", { name, exact: true }).click();
  await p.waitForTimeout(1100);
  await record(
    "Program focus: " + name,
    (await p.locator(".focus-note h2").innerText()) === name,
  );
  const axe = await new AxeBuilder({ page: p })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  await record("Focused contrast: " + name, axe.violations.length === 0, {
    violations: axe.violations.map((v) => v.id),
  });
}
await p.getByRole("button", { name: "See the whole picture" }).click();
await record(
  "Reset to overview",
  (await p.locator(".focus-note").count()) === 0,
);
await p.getByRole("button", { name: "Open site index" }).click();
await record("Index opens", await p.locator("dialog").evaluate((d) => d.open));
await p.locator("dialog a").last().focus();
await p.keyboard.press("Tab");
await record(
  "Index keyboard trap",
  await p
    .getByRole("button", { name: "Close site index" })
    .evaluate((e) => e === document.activeElement),
);
await p.keyboard.press("Escape");
await record(
  "Escape closes and restores focus",
  await p
    .getByRole("button", { name: "Open site index" })
    .evaluate((e) => e === document.activeElement),
);
await p.goto(base + "/programs");
await p.locator("select").selectOption("families");
await record(
  "Audience filter",
  (await p.locator(".program-controls button").count()) === 3,
);
await p.locator("select").selectOption("community");
await record(
  "Community filter",
  (await p.locator(".program-controls button").count()) === 2,
);
await p.goto(base + "/resources");
await p.getByRole("searchbox").fill("mentor");
await record(
  "Resource search",
  (await p.locator(".resource-group a").count()) === 2,
);
await p.getByRole("searchbox").fill("zzzzz");
await record(
  "Search empty state",
  await p.getByText("No matches.", { exact: false }).isVisible(),
);
await p.goto(base + "/about/leadership");
await p.getByRole("button", { name: "Claire Braeburn", exact: false }).click();
await p.waitForTimeout(700);
await record(
  "Founder portrait selection",
  (await p.locator(".portrait-active img").getAttribute("alt")) ===
    "Claire Braeburn",
);
for (const title of ["Honorary Board of Directors", "Advisory Board"]) {
  await p.locator("summary").filter({ hasText: title }).click();
}
await record(
  "All board groups available",
  (await p.getByText("Alberto Gedissman", { exact: true }).isVisible()) &&
    (await p.getByText("David O. Carter", { exact: true }).isVisible()),
);
await p.goto(base + "/about/history");
for (const summary of await p.locator("summary").all()) {
  if (!(await summary.evaluate((e) => e.parentElement.open)))
    await summary.click();
}
await record(
  "History chapters",
  await p
    .getByText("Community health moves forward.", { exact: true })
    .isVisible(),
);
for (const [width, height] of [
  [390, 568],
  [320, 568],
]) {
  await p.setViewportSize({ width, height });
  await p.goto(base);
  await p
    .getByRole("button", { name: "Tobacco-Free Communities", exact: true })
    .click();
  await p.waitForTimeout(1100);
  await p.screenshot({
    path: `qa/reconstruction/short-${width}.png`,
    fullPage: true,
  });
  await record(
    `Short mobile ${width}`,
    await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
  );
  await p.getByRole("button", { name: "Open site index" }).click();
  await record(
    `Short mobile index ${width}`,
    await p.locator('dialog a[href="/contact"]').isVisible(),
  );
  await p.keyboard.press("Escape");
}
await context.close();
const reduced = await b.newContext({
  reducedMotion: "reduce",
  viewport: { width: 390, height: 844 },
});
const rp = await reduced.newPage();
await rp.goto(base);
await rp.getByRole("button", { name: "Nutrition", exact: true }).click();
await record(
  "Reduced motion selection",
  (await rp.locator(".focus-note h2").innerText()) === "Nutrition",
);
await record(
  "Reduced motion duration",
  await rp
    .locator(".photo-plane")
    .first()
    .evaluate((e) => parseFloat(getComputedStyle(e).transitionDuration) < 0.01),
);
await rp.screenshot({
  path: "qa/reconstruction/reduced-390.png",
  fullPage: true,
});
await reduced.close();
const nojs = await b.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const np = await nojs.newPage();
await np.goto(base);
await record(
  "No-JS program links",
  (await np.locator(".static-programs a").count()) === 6,
);
await np.locator(".static-programs a").first().click();
await record(
  "No-JS detail content",
  (await np.locator("h1").innerText()) === "Emerging Leaders",
);
await np.locator("summary").first().click();
await record(
  "No-JS disclosure",
  await np
    .locator("details")
    .first()
    .evaluate((e) => e.open),
);
await np.screenshot({
  path: "qa/reconstruction/no-js-390.png",
  fullPage: true,
});
await nojs.close();
for (const route of internal) {
  const r = await fetch(base + route);
  report.internalLinks.push({ route, status: r.status });
}
report.externalLinks = [...external].sort();
await b.close();
await fs.writeFile(
  "qa/reconstruction/report.json",
  JSON.stringify(report, null, 2),
);
const failed =
  report.routes.filter(
    (r) =>
      r.status !== 200 ||
      r.overflow ||
      r.h1 !== 1 ||
      r.broken.length ||
      r.violations.length,
  ).length +
  report.interactions.filter((i) => !i.pass).length +
  report.errors.length +
  report.internalLinks.filter((r) => r.status !== 200).length;
console.log("FAILURES", failed);
process.exitCode = failed ? 1 : 0;
