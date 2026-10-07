import { Intro } from "@/components/elements";
import { links } from "@/lib/content";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <>
      <Intro eyebrow="Contact us" title="A conversation" accent="opens things.">
        <p>
          Looking for a program, a partnership, or a way to help? Start here.
          We’ll help you find your next step.
        </p>
      </Intro>
      <section className="contact-layout wrap">
        <div className="contact-panel">
          <p className="eyebrow">America On Track</p>
          <h2>We’re here.</h2>
          <a href="tel:+17145317144">714 531 7144 ↗</a>
          <a href={links.email}>PR@AmericaOnTrack.org ↗</a>
          <address>
            600 W. Santa Ana Blvd., Suite 710
            <br />
            Santa Ana, CA 92701
          </address>
          <a
            className="source"
            href="https://www.google.com/maps/search/?api=1&query=600+W+Santa+Ana+Blvd+Suite+710+Santa+Ana+CA+92701"
            style={{ fontSize: 14 }}
          >
            Get directions ↗
          </a>
          <p className="source-note">
            Fax: 714-531-7773
            <br />
            Contact the team before visiting.
          </p>
        </div>
        <div className="contact-choices">
          <h2>
            What brings
            <br />
            <em>you here?</em>
          </h2>
          {[
            ["Find a program", "/programs"],
            ["Become an adult mentor", links.mentor],
            ["Teen leadership interest", links.teen],
            ["Volunteer", links.volunteer],
            ["Giving questions", "/donate"],
            ["Golf tournament", "/events/golf"],
          ].map(([n, h]) => (
            <a key={n} href={h}>
              {n}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
