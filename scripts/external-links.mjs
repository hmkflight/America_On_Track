import { execFile } from "node:child_process";
import { promisify } from "node:util";
const exec = promisify(execFile);
import fs from "node:fs/promises";
const raw = JSON.parse(
  await fs.readFile("research/raw/pages-2026-10-07.json", "utf8"),
);
const sourceLinks = new Set(
  raw.flatMap((p) =>
    [...p.content.rendered.matchAll(/href=["']([^"']+)["']/g)].map((m) => m[1]),
  ),
);
const links = new Set();
for (const file of ["src/lib/content.ts", "src/app/resources/page.tsx"]) {
  const txt = await fs.readFile(file, "utf8");
  for (const match of txt.matchAll(/https:\/\/[^'"\s<>]+/g))
    links.add(match[0]);
}
for (const path of [
  "our-story",
  "board-of-directors",
  "terry-thompson",
  "claire-braeburn",
  "awards",
  "results",
  "volunteer",
  "donate",
  "contact-us",
  "golf-tournament",
  "privacy-policy",
  "sms-disclosure",
  "emerging-leaders-for-civic-engagement-program",
  "brighter-futures-for-children-of-prisoners",
  "fitness",
  "nutrition",
  "drug-use-prevention-education",
  "tobacco-policies-protect-our-communities",
])
  links.add(`https://americaontrack.org/${path}/`);
const urls = [...links];
const result = [];
for (let i = 0; i < urls.length; i += 5) {
  await Promise.all(
    urls.slice(i, i + 5).map(async (url) => {
      try {
        const { stdout } = await exec("curl", [
          "-L",
          "--fail",
          "--silent",
          "--show-error",
          "--max-time",
          "25",
          "-o",
          "/dev/null",
          "-w",
          "%{http_code}",
          url,
        ]);
        const status = Number(stdout);
        result.push({
          url,
          status,
          formLinkedFromFreshSource: url.includes("wufoo")
            ? sourceLinks.has(url) ||
              sourceLinks.has(url.replace(/\/$/, "")) ||
              sourceLinks.has(url + "/")
            : undefined,
        });
        console.log(status, url);
      } catch (e) {
        result.push({ url, error: e.message });
        console.log("ERROR", url);
      }
    }),
  );
}
await fs.writeFile(
  "qa/rebuild/external-links.json",
  JSON.stringify(result, null, 2),
);
