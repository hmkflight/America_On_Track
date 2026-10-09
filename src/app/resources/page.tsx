import { Reader } from "@/components/reader";
import { ResourceDirectory } from "@/components/resources";
import { links } from "@/lib/content";
export const metadata = { title: "Resource library" };
const groups = [
  { title: "Programs in depth", items: [
    ["Emerging Leaders", "/programs/emerging-leaders"],
    ["Brighter Futures & mentoring", "/programs/brighter-futures"],
    ["Fitness & active play", "/programs/fitness"],
    ["Tobacco-Free Communities", "/programs/tobacco-free-communities"],
  ] },
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
      ["Published results", "/resources/results"],
      ["Awards & recognition archive", "/resources/awards"],
      ["Board of Directors", "/about/leadership"],
      ["Our story", "/about"],
      ["Terry Thompson · biography", "/resources/terry-thompson"],
      ["Claire Braeburn · biography", "/resources/claire-braeburn"],
    ],
  },
  {
    title: "Community health",
    items: [
      [
        "Tobacco & vape prevention",
        "/resources/tobacco-vape-use-prevention",
      ],
      [
        "Lowering youth access to tobacco",
        "/resources/lowering-youth-access-to-tobacco",
      ],
      [
        "Tobacco policies & communities",
        "/resources/tobacco-policies-protect-our-communities",
      ],
      [
        "Drug-use prevention education",
        "/programs/drug-use-prevention",
      ],
      ["Nutrition education", "/programs/nutrition"],
    ],
  },
  { title: "Privacy & communication choices", items: [["Privacy policy", "/privacy"], ["SMS disclosure & preferences", "/privacy/sms"]] },
];
export default function Resources() {
  return (
    <Reader
      tone="dark"
      label="Library / Useful things"
      title="Less searching. More doing."
      summary="Program guides, our published record and practical ways to take part."
    >
      <p className="eyebrow">Resource library</p>
      <p className="lead">A direct route to what you need.</p>
      <ResourceDirectory groups={groups} />
    </Reader>
  );
}
