import Link from "next/link";
import { Reader, Photo, Block, Action, Source } from "@/components/reader";
export const metadata = { title: "About us" };
export default function About() {
  return (
    <Reader
      label="Organization / Our purpose"
      title="See the person. Change the possibilities."
      summary="America On Track brings youth leadership, mentoring and community health together in Orange County."
      visual={
        <Photo
          src="camp.jpg"
          alt="America On Track camp participants, volunteers and board members holding thank-you letters"
          priority
        />
      }
    >
      <p className="eyebrow">Independent. Community-rooted. Since 1995.</p>
      <p className="lead">
        Growing up is complicated. Support should see the whole picture.
      </p>
      <Block title="One organization. Many forms of care.">
        <p>
          America On Track’s mission is to inspire brighter futures by building
          youth leaders, supporting families and strengthening communities
          through life-transforming programs.
        </p>
        <p>
          Our vision addresses social inequities and health disparities through
          evidence-based programs: leadership, mentoring, academic achievement,
          fitness, nutrition and tobacco and drug-use prevention.
        </p>
      </Block>
      <nav className="mini-nav" aria-label="About America On Track">
        <Link href="/about/leadership">People & boards ↗</Link>
        <Link href="/about/history">History & recognition ↗</Link>
        <Link href="/impact">Impact & evidence ↗</Link>
      </nav>
      <Block title="Personal support. Healthier surroundings.">
        <p>
          A trusted mentor can help a child imagine college. A leadership
          program can help a teen speak up. A school or neighborhood can make
          healthier choices easier. America On Track works across these
          different parts of daily life.
        </p>
        <p>
          Programs reach young people, families, schools, residents and
          community partners. Each has its own audience, approach and way to
          participate.
        </p>
        <Action href="/programs">Find the right program</Action>
      </Block>
      <Block title="Built here, for here.">
        <p>
          Terry Thompson and Claire Braeburn founded America On Track in 1995
          after researching the needs of Orange County’s children and families.
          The organization remains an independent 501(c)(3) nonprofit.
        </p>
        <dl className="facts">
          <div>
            <dt>Home</dt>
            <dd>Santa Ana, Orange County, California</dd>
          </div>
          <div>
            <dt>Nonprofit EIN</dt>
            <dd>33-0724044</dd>
          </div>
        </dl>
      </Block>
      <Block title="Support can come full circle">
        <blockquote className="quote">
          <p>“I definitely want to pay it forward.”</p>
          <cite>
            A former mentee who became a mentor, in America On Track’s published
            results archive. The account is undated.
          </cite>
        </blockquote>
        <Source path="results">Read participant and mentor accounts</Source>
      </Block>
    </Reader>
  );
}
