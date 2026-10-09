import { Reader, Block, Action } from "@/components/reader";
import Image from "next/image";
import sponsors from "@/lib/sponsors.json";
import { links } from "@/lib/content";
export const metadata = { title: "Kids On Track Golf · October 26, 2026" };
export default function Golf() {
  return (
    <Reader
      tone="red"
      label="Gathering / October 2026"
      title="A day on the course. A bigger purpose."
      summary="Kids On Track Golf Tournament · Benefiting America On Track’s youth leadership development programs."
      visual={
        <div className="event-art">
          26<span>OCTOBER</span>
          <small>MONDAY / 2026</small>
        </div>
      }
    >
      <p className="eyebrow">Kids On Track Golf Tournament</p>
      <p className="lead">Join us at The Huntington Club.</p>
      <dl className="facts">
        <div>
          <dt>When</dt>
          <dd>Monday, October 26, 2026</dd>
        </div>
        <div>
          <dt>Where</dt>
          <dd>
            The Huntington Club
            <br />
            6501 Palm Avenue
            <br />
            Huntington Beach, CA
          </dd>
        </div>
        <div>
          <dt>Golf chairman</dt>
          <dd>Mike Lake · Crevier BMW</dd>
        </div>
      </dl>
      <Action href={links.golf}>Register for the tournament</Action>
      <Block title="The day at a glance">
        <ol className="event-schedule">
          <li>
            <time>9:00 am</time>
            <span>Registration & driving range open</span>
          </li>
          <li>
            <time>11:00 am</time>
            <span>Shotgun start</span>
          </li>
          <li>
            <time>4:30 pm</time>
            <span>Awards dinner</span>
          </li>
        </ol>
        <p>
          Registration includes 18 holes, lunch and beverages on the course, tee
          prizes and the awards dinner.
        </p>
        <a href={links.schedule} className="source">
          2026 schedule & location map (PDF) ↗
        </a>
      </Block>
      <Block title="Make the day possible">
        <Action href={links.sponsor} secondary>
          Become a sponsor
        </Action>
        <Action href={links.dinner} secondary>
          Attend the awards dinner
        </Action>
        <Action href={links.auction} secondary>
          Donate an auction item
        </Action>
      </Block>
      <Block title="With thanks to our 2025 sponsors">
        <p>The sponsor recognition from the published tournament page is preserved below. This is the 2025 acknowledgment, not a confirmed 2026 sponsor roster.</p>
        <div className="sponsor-grid">
          {sponsors.map((sponsor) => <div className="sponsor-logo" key={sponsor.image}>
            <Image src={sponsor.image} alt={sponsor.name} width={240} height={120} sizes="(max-width: 760px) 40vw, 180px" />
          </div>)}
        </div>
      </Block>
      <p className="note">
        Event details checked against the organization’s 2026 event page and
        schedule. Confirm availability and final arrangements with America On
        Track.
      </p>
    </Reader>
  );
}
