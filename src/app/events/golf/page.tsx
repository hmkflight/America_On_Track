import Image from "next/image";
import { Action, Source } from "@/components/elements";
import { links } from "@/lib/content";
export const metadata = { title: "2026 Kids On Track Golf" };
export default function Golf() {
  return (
    <>
      <section className="event-hero">
        <div className="wrap">
          <p className="eyebrow">
            Monday, October 26, 2026 · The Huntington Club
          </p>
          <div className="event-poster">
            <div>
              <h1>
                Good company.
                <br />
                Great cause.
                <br />
                <em>Let’s golf.</em>
              </h1>
              <p>
                Kids On Track Golf Tournament
                <br />A day on the course for youth mentoring and leadership.
              </p>
              <Action href={links.golf} light>
                Register for the tournament
              </Action>
            </div>
            <div className="golf-orb">
              <Image
                src="/images/golf.png"
                width={230}
                height={245}
                alt="Kids On Track Golf artwork: many hands supporting a golf ball"
                priority
              />
            </div>
          </div>
          <div className="event-meta">
            <div>
              <strong>October 26</strong>
              <span>Monday · 2026</span>
            </div>
            <div>
              <strong>The Huntington Club</strong>
              <span>6501 Palm Ave. · Huntington Beach</span>
            </div>
            <div>
              <strong>18 holes</strong>
              <span>Lunch, course beverages, awards dinner & tee prizes</span>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap content-section">
        <div className="section-lead">
          <h2>
            Make a day
            <br />
            <em>of it.</em>
          </h2>
          <p>
            Join Golf Chairman Mike Lake of Crevier BMW and help support America
            On Track’s mentoring and leadership programs.
          </p>
        </div>
        <div className="schedule-grid">
          <div>
            <strong>9:00 am</strong>
            <h3>Welcome & warm up</h3>
            <p>Registration and driving range open.</p>
          </div>
          <div>
            <strong>11:00 am</strong>
            <h3>Shotgun start</h3>
            <p>Head out for a day on the course.</p>
          </div>
          <div>
            <strong>4:30 pm</strong>
            <h3>Awards dinner</h3>
            <p>Come together after the tournament.</p>
          </div>
        </div>
        <a className="source" href={links.schedule}>
          Official 2026 schedule & location PDF ↗
        </a>
      </section>
      <section className="wrap pathways" aria-label="Support the tournament">
        {[
          [
            "Sponsor the event",
            "Help make the day possible through an event sponsorship or tee sign.",
            "Explore sponsorship",
            links.sponsor,
          ],
          [
            "Join the dinner",
            "Celebrate the work and enjoy the awards dinner with the community.",
            "Dinner registration",
            links.dinner,
          ],
          [
            "Donate an auction item",
            "Contribute to the fundraiser through an auction donation.",
            "Auction donation form",
            links.auction,
          ],
          [
            "Bring a foursome",
            "Gather friends or colleagues for a round with a shared purpose.",
            "Register golfers",
            links.golf,
          ],
        ].map(([title, text, label, href]) => (
          <article className="pathway" key={title}>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Action href={href}>{label}</Action>
          </article>
        ))}
      </section>
      <div className="wrap" style={{ paddingBottom: 60 }}>
        <p className="source-note">
          Event details follow the organization’s published 2026 page and
          schedule. Registration and availability are confirmed on the official
          forms.
        </p>
        <Source path="golf-tournament">Official event page</Source>
      </div>
    </>
  );
}
