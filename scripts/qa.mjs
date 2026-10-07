import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
const base = process.env.QA_BASE || "http://127.0.0.1:3017";
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
await fs.mkdir("qa/rebuild", { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const report = {
  time: new Date().toISOString(),
  base,
  routes: [],
  errors: [],
  interactions: [],
  externalLinks: [],
};
page.on("pageerror", (e) => report.errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") report.errors.push(m.text());
});
const external = new Set(),
  internal = new Set();
async function images() {
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (let y = 0; y < document.documentElement.scrollHeight; y += 750) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 45));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
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
}
for (const width of [1440, 1024, 390]) {
  await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    await images();
    const data = await page.evaluate(() => ({
      h1: document.querySelectorAll("h1").length,
      overflow: document.documentElement.scrollWidth > innerWidth,
      brokenImages: [...document.images]
        .filter(
          (i) =>
            i.getClientRects().length &&
            getComputedStyle(i).visibility === "visible" &&
            (!i.complete || i.naturalWidth === 0),
        )
        .map((i) => i.src),
      links: [...document.querySelectorAll("a")].map((a) =>
        a.getAttribute("href"),
      ),
    }));
    const axe = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    for (const link of data.links) {
      if (link?.startsWith("http")) external.add(link);
      if (link?.startsWith("/")) internal.add(link);
    }
    report.routes.push({
      width,
      route,
      status: response.status(),
      ...data,
      links: undefined,
      violations: axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    if (
      [
        "/",
        "/programs",
        "/programs/brighter-futures",
        "/about/leadership",
        "/about/history",
        "/impact",
        "/events/golf",
        "/donate",
        "/contact",
      ].includes(route)
    )
      await page.screenshot({
        path: `qa/rebuild/${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}-${width}.png`,
        fullPage: true,
      });
    console.log(
      width,
      route,
      response.status(),
      data.overflow ? "OVERFLOW" : "ok",
      axe.violations.length + " a11y findings",
    );
  }
}
await fs.writeFile("qa/rebuild/scan.json", JSON.stringify(report, null, 2));
await page.goto(base);
await page
  .getByRole("button", { name: "Open the space", exact: false })
  .click();
if (
  (await page
    .getByRole("button", { name: "Bring it together", exact: false })
    .getAttribute("aria-expanded")) !== "true"
)
  throw Error("Aperture failed");
await page.locator(".space-left a").waitFor();
report.interactions.push(
  "Dimensional aperture opens to reveal photographic learning and leadership spaces",
);
await page.getByRole("button", { name: "Menu", exact: true }).click();
await page.getByRole("navigation", { name: "Expanded navigation" }).waitFor();
await page.keyboard.press("Escape");
if (
  (await page
    .getByRole("button", { name: "Menu", exact: true })
    .getAttribute("aria-expanded")) !== "false"
)
  throw Error("Escape failed");
if (
  !(await page
    .getByRole("button", { name: "Menu", exact: true })
    .evaluate((e) => e === document.activeElement))
)
  throw Error("Focus return failed");
report.interactions.push(
  "Native modal menu opens, Escape closes, trigger focus restored",
);
await page.getByRole("button", { name: "Menu", exact: true }).click();
await page
  .getByRole("navigation", { name: "Expanded navigation" })
  .getByRole("link", { name: "Programs", exact: false })
  .click();
await page.waitForURL("**/programs");
await page.getByRole("button", { name: "Families", exact: true }).click();
if ((await page.locator(".program-room").count()) !== 3)
  throw Error("Family filter failed");
await page.getByRole("button", { name: "Nourish", exact: false }).click();
await page
  .getByRole("link", { name: "Nutrition", exact: false })
  .first()
  .waitFor();
report.interactions.push("Program filter and expanding rooms work on mobile");
await page.goto(base + "/programs/brighter-futures");
await page.getByText("Five connected components", { exact: true }).click();
if (!(await page.locator("details[open]").count()))
  throw Error("Disclosure failed");
report.interactions.push("Program detail disclosure opens");
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto(base);
await page
  .getByRole("button", { name: "Open the space", exact: false })
  .click();
await page
  .getByRole("button", { name: "Bring it together", exact: false })
  .waitFor();
const motion = await page
  .locator(".portal")
  .evaluate((el) => ({
    animation: getComputedStyle(el).animationName,
    transition: getComputedStyle(el).transitionDuration,
  }));
if (motion.transition !== "0s")
  throw Error("Reduced motion transition remains");
report.interactions.push(
  "Reduced motion disables transitions while retaining scene changes and links",
);
await page.setViewportSize({ width: 390, height: 600 });
await page.getByRole("button", { name: "Menu", exact: true }).click();
await page
  .getByRole("navigation", { name: "Expanded navigation" })
  .getByRole("link", { name: "Donate", exact: false })
  .scrollIntoViewIfNeeded();
await page.screenshot({ path: "qa/rebuild/short-mobile-menu.png" });
await page.keyboard.press("Escape");
report.interactions.push("390 × 600 menu scrolls to the final link");
const nojs = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const np = await nojs.newPage();
await np.goto(base);
if (!(await np.getByRole("heading", { level: 1 }).count()))
  throw Error("No-JS hero missing");
await np.goto(base + "/programs");
if ((await np.locator(".room-description a:visible").count()) !== 6)
  throw Error("No-JS program links missing");
report.interactions.push(
  "No-JS home and all six program detail links available",
);
await nojs.close();
for (const link of internal) {
  const res = await context.request.get(base + link.split("#")[0]);
  if (res.status() !== 200)
    report.errors.push(`Internal ${link}: ${res.status()}`);
}
await page.emulateMedia({ reducedMotion: "no-preference" });
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(base);
await page.keyboard.press("Tab");
await page.screenshot({ path: "qa/rebuild/keyboard-focus.png" });
for (const width of [1440, 1024, 390]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(base);
  await images();
  await page.locator(".program-gallery").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Nourish", exact: false }).click();
  await page.waitForTimeout(850);
  await page
    .locator(".program-gallery")
    .screenshot({ path: `qa/rebuild/program-motion-${width}.png` });
}
report.externalLinks = [...external];
await fs.writeFile("qa/rebuild/report.json", JSON.stringify(report, null, 2));
await browser.close();
const failures = report.routes.filter(
  (r) =>
    r.status !== 200 ||
    r.h1 !== 1 ||
    r.overflow ||
    r.brokenImages.length ||
    r.violations.length,
);
console.log(
  JSON.stringify(
    {
      checks: report.routes.length,
      failures: failures.length,
      errors: report.errors,
      interactions: report.interactions,
    },
    null,
    2,
  ),
);
if (failures.length || report.errors.length) process.exitCode = 1;
