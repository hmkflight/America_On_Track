import { Intro, Photo, Invitation, Source } from "@/components/elements";
import Link from "next/link";
export const metadata = { title: "Our story" };
export default function About() {
  return (
    <>
      <Intro
        eyebrow="Our story"
        title="Potential is human."
        accent="So is our work."
      >
        <p>
          Since 1995, America On Track has helped create the relationships,
          skills, and healthier environments that children and families deserve.
        </p>
      </Intro>
      <div className="wrap">
        <Photo
          name="camp.jpg"
          alt="America On Track’s college camp community with participants, volunteers and board members"
          className="about-photo"
          priority
        />
      </div>
      <section className="beliefs">
        <div className="wrap">
          <div className="section-lead">
            <h2>
              Start with people.
              <br />
              <em>Change what’s possible.</em>
            </h2>
            <p>
              Founded by Terry Thompson and Claire Braeburn, America On Track is
              an independent nonprofit rooted in the needs of Orange County.
            </p>
          </div>
          <div className="belief-grid">
            <article>
              <h3>Our mission</h3>
              <p>
                To inspire brighter futures by building youth leaders,
                supporting families, and strengthening communities through
                life-transforming programs.
              </p>
            </article>
            <article>
              <h3>Our vision</h3>
              <p>
                More vibrant communities, with fewer social inequities and
                health disparities. Our work connects leadership, mentoring,
                academic achievement, fitness, nutrition, and prevention.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="wrap content-section">
        <div className="section-lead">
          <h2>
            Care becomes
            <br />
            <em>something concrete.</em>
          </h2>
          <p>
            A trusted adult. A college experience. A school that makes movement
            part of every day. A healthier public space. Our programs turn
            commitment into practical opportunities.
          </p>
        </div>
        <div className="story-links">
          <Link href="/about/leadership">
            <p className="eyebrow">People & governance</p>
            <h3>
              The people who
              <br />
              keep it possible. ↗
            </h3>
          </Link>
          <Link href="/about/history">
            <p className="eyebrow">History & recognition</p>
            <h3>
              Decades of
              <br />
              showing up. ↗
            </h3>
          </Link>
        </div>
        <Source path="our-story" />
      </section>
      <Invitation />
    </>
  );
}
