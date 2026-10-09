import { notFound } from "next/navigation";
import Link from "next/link";
import { programs } from "@/lib/content";
import {
  Reader,
  Photo,
  Block,
  Disclosure,
  Action,
  Source,
} from "@/components/reader";
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: programs.find((p) => p.slug === slug)?.name || "Program" };
}
export default async function Program({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <Reader
      label="Programs / In focus"
      title={p.name}
      summary={p.format}
      back="/programs"
      visual={
        <Photo
          transitionName={`program-photo-${p.slug}`}
          src={p.image}
          alt={p.alt}
          priority
          className={p.slug === "fitness" ? "contain-photo" : ""}
        />
      }
    >
      <p className="eyebrow">The program</p>
      <p className="lead">{p.intro}</p>
      <dl className="facts">
        <div>
          <dt>Who it’s for</dt>
          <dd>{p.audience}</dd>
        </div>
        <div>
          <dt>How it works</dt>
          <dd>{p.format}</dd>
        </div>
      </dl>
      <Action href={p.href}>{p.cta}</Action>
      <Block title="Support in practice">
        <div className="practice-list">
          {p.steps.map((s, i) => (
            <div key={s.title}>
              <span className="practice-symbol" aria-hidden="true">
                {["◒", "✳", "⊞"][i]}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>
      {p.slug === "emerging-leaders" && <Block title="Nine ways to grow">
        <ul className="article-list">
          {["Dynamic leadership and public speaking", "Private and group coaching with experienced coaches", "Awards and college scholarship opportunities", "Interactive sessions supporting practical life skills", "Awareness of global issues", "STEM activities and future careers", "LifeSkills training for drug-use prevention", "Civic engagement", "Exposure to social justice issues"].map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Block>}
      <Block title="A closer look">
        {p.details.map((d) => (
          <Disclosure key={d.title} title={d.title}>
            <p>{d.text}</p>
          </Disclosure>
        ))}
      </Block>
      {p.slug === "tobacco-free-communities" ? (
        <Block title="Three connected areas">
          <Source path="tobacco-vape-use-prevention">
            Tobacco & vape prevention
          </Source>
          <Source path="lowering-youth-access-to-tobacco">
            Reducing youth access
          </Source>
          <Source path="tobacco-policies-protect-our-communities">
            Healthier community environments
          </Source>
        </Block>
      ) : null}
      <Action href="/contact" secondary>Talk to us about this program</Action>
      <div className="related-programs">
        <p className="eyebrow">Keep exploring</p>
        {programs
          .filter((x) => x.slug !== slug)
          .map((x) => (
            <Link href={`/programs/${x.slug}`} key={x.slug}>
              {x.name} ↗
            </Link>
          ))}
      </div>
    </Reader>
  );
}
