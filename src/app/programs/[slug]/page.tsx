import { notFound } from "next/navigation";
import Link from "next/link";
import { programs } from "@/lib/content";
import {
  Intro,
  Photo,
  Action,
  Source,
  Invitation,
} from "@/components/elements";
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
  const p = programs.find((p) => p.slug === slug);
  if (!p) notFound();
  const bits = p.headline.split(" ");
  const accent = bits.pop();
  return (
    <>
      <section className={`detail-hero theme-${p.slug}`}>
        <Intro eyebrow={p.name} title={bits.join(" ")} accent={accent}>
          <p>{p.intro}</p>
        </Intro>
        <div className="detail-visual wrap">
          <Photo name={p.image} alt={p.alt} className={p.slug} priority />
          <div className="detail-facts">
            <dl>
              <dt>Who it’s for</dt>
              <dd>{p.audience}</dd>
            </dl>
            <dl>
              <dt>What it looks like</dt>
              <dd>{p.format}</dd>
            </dl>
            <Action href={p.href}>{p.cta}</Action>
          </div>
        </div>
      </section>
      <section className="content-section wrap">
        <div className="section-lead">
          <h2>What opens up.</h2>
          <p>
            Practical experiences. Supportive relationships. Skills that carry
            into everyday life.
          </p>
        </div>
        <div className="practice-grid">
          {p.steps.map((s) => (
            <article key={s.title} className="practice">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section wrap">
        <div className="section-lead">
          <h2>
            A little more
            <br />
            <em>to know.</em>
          </h2>
        </div>
        <div className="disclosures">
          {p.details.map((d) => (
            <details key={d.title}>
              <summary>{d.title}</summary>
              <p>{d.text}</p>
            </details>
          ))}
          <Source path={p.source}>Original program information</Source>
        </div>
      </section>
      <section className="wrap content-section">
        <p className="eyebrow">Keep exploring</p>
        <div className="next-programs">
          {programs
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <Link key={x.slug} href={`/programs/${x.slug}`}>
                {x.name} ↗
              </Link>
            ))}
        </div>
      </section>
      <Invitation />
    </>
  );
}
