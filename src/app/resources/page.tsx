import { Intro } from "@/components/elements";
import { links } from "@/lib/content";
export const metadata = { title: "Resources" };
const groups = [
  {
    title: "Join & participate",
    items: [
      ["Adult mentor interest", links.mentor],
      ["Teen leadership interest", links.teen],
      ["Volunteer interest", links.volunteer],
      ["Newsletter sign-up", links.newsletter],
    ],
  },
  {
    title: "Give & gather",
    items: [
      ["Official donation form", links.donate],
      ["Golf registration", links.golf],
      ["Golf sponsorship", links.sponsor],
      ["Awards dinner", links.dinner],
      ["Auction item donation", links.auction],
      ["2026 golf schedule & map (PDF)", links.schedule],
    ],
  },
  {
    title: "Explore the evidence",
    items: [
      ["Published results", "https://americaontrack.org/results/"],
      ["Awards & recognition archive", "https://americaontrack.org/awards/"],
      ["Board of Directors", "https://americaontrack.org/board-of-directors/"],
      ["Our story", "https://americaontrack.org/our-story/"],
    ],
  },
  {
    title: "Community health",
    items: [
      [
        "Tobacco & vape prevention",
        "https://americaontrack.org/tobacco-vape-use-prevention/",
      ],
      [
        "Lowering youth access to tobacco",
        "https://americaontrack.org/lowering-youth-access-to-tobacco/",
      ],
      [
        "Tobacco policies & communities",
        "https://americaontrack.org/tobacco-policies-protect-our-communities/",
      ],
      [
        "Drug-use prevention education",
        "https://americaontrack.org/drug-use-prevention-education/",
      ],
      ["Nutrition education", "https://americaontrack.org/nutrition/"],
    ],
  },
];
export default function Resources() {
  return (
    <>
      <Intro eyebrow="Resource library" title="The useful" accent="things.">
        <p>
          Forms, program information, and original source material. A direct
          route to what you need.
        </p>
      </Intro>
      <section className="wrap resource-groups" aria-label="Resource directory">
        {groups.map((g) => (
          <article className="resource-group" key={g.title}>
            <h2>{g.title}</h2>
            {g.items.map(([n, h]) => (
              <a key={n} href={h}>
                {n}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </article>
        ))}
      </section>
    </>
  );
}
