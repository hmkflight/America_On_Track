import Link from "next/link";
import { Aperture } from "@/components/aperture";
import { ProgramGallery } from "@/components/program-gallery";
import { Action, Photo, Invitation, Arrow } from "@/components/elements";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-top wrap">
          <p className="eyebrow">
            <span className="seed" />
            America On Track · Orange County, California
          </p>
          <h1>
            Room to <em>become.</em>
          </h1>
          <p className="hero-deck">
            Every young person holds a world of possibility.
            <br />
            Together, we make space for it.
          </p>
        </div>
        <Aperture />
      </section>
      <section className="mission wrap">
        <p className="eyebrow">Potential needs possibility</p>
        <div>
          <h2>
            A mentor who shows up.
            <br />A chance to lead.
            <br />
            <em>A healthier place to grow.</em>
          </h2>
          <div className="mission-bottom">
            <p>
              America On Track brings youth leadership, mentoring, and community
              health together—creating the conditions for children and families
              to thrive.
            </p>
            <Action href="/about">Meet America On Track</Action>
          </div>
        </div>
      </section>
      <section className="program-section">
        <div className="wrap section-heading">
          <div>
            <p className="eyebrow">Different doors. Lasting possibilities.</p>
            <h2>
              Find your <em>opening.</em>
            </h2>
          </div>
          <Link href="/programs" className="text-link">
            All programs <Arrow />
          </Link>
        </div>
        <div className="wrap">
          <ProgramGallery />
        </div>
      </section>
      <section className="history-teaser wrap">
        <div className="year-sculpture" aria-label="Founded in 1995">
          <span>19</span>
          <span>
            95<em>→</em>
          </span>
        </div>
        <div className="history-teaser-copy">
          <p className="eyebrow">Rooted here. Still opening doors.</p>
          <h2>
            Some things
            <br />
            start small.
            <br />
            <em>Then change lives.</em>
          </h2>
          <p>
            Two founders. One commitment to Orange County. Decades of turning
            care into practical, lasting support.
          </p>
          <Action href="/about/history">Step into our story</Action>
        </div>
      </section>
      <section className="community-band">
        <Photo
          name="camp.jpg"
          alt="America On Track participants, volunteers, and board members together at a college camp"
        />
        <div>
          <p className="eyebrow">The work, in perspective</p>
          <h2>
            More than a moment.
            <br />
            <em>A lasting presence.</em>
          </h2>
          <p>
            Explore the results, program milestones, and people behind the work.
          </p>
          <Action href="/impact" light>
            See our impact
          </Action>
        </div>
      </section>
      <section className="event-teaser wrap">
        <div className="event-date">
          <span>OCT</span>
          <strong>26</strong>
          <span>2026</span>
        </div>
        <div>
          <p className="eyebrow">A day out. A bigger purpose.</p>
          <h2>
            Kids On Track <em>Golf.</em>
          </h2>
          <p>
            The Huntington Club · Huntington Beach
            <br />
            Supporting youth mentoring and leadership.
          </p>
        </div>
        <Action href="/events/golf">Join us on the course</Action>
      </section>
      <Invitation />
    </>
  );
}
