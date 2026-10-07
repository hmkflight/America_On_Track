import { Intro, Photo, Action, Source } from "@/components/elements";
import { links } from "@/lib/content";
export const metadata = { title: "Give" };
export default function Donate() {
  return (
    <>
      <Intro
        eyebrow="Give to America On Track"
        title="Make possibility"
        accent="possible."
      >
        <p>
          Your support helps sustain mentoring, youth leadership, and healthier
          communities across Orange County.
        </p>
      </Intro>
      <section className="giving wrap">
        <Photo
          name="brighter.jpg"
          alt="A Brighter Futures participant showing a hands-on STEM project"
          priority
        />
        <div className="giving-panel">
          <p className="eyebrow">Invest in what can be</p>
          <h2>
            A gift that
            <br />
            <em>opens doors.</em>
          </h2>
          <p>
            Support the programs and relationships that help children and
            families build brighter futures.
          </p>
          <Action href={links.donate}>Continue to the donation form</Action>
          <p className="fine">
            You’ll continue to America On Track’s official donation form.
            Payment details are entered there.
          </p>
          <Source path="donate">Other ways to support the organization</Source>
        </div>
      </section>
      <section className="wrap content-section">
        <div className="section-lead">
          <h2>
            Give with
            <br />
            <em>understanding.</em>
          </h2>
          <p>
            America On Track is an independent 501(c)(3) nonprofit. EIN:
            33-0724044.
          </p>
        </div>
        <div className="disclosures">
          <details>
            <summary>Giving by mail</summary>
            <p>
              Contact America On Track to confirm your gift arrangements. The
              published office address is 600 W. Santa Ana Blvd., Suite 710,
              Santa Ana, CA 92701.
            </p>
          </details>
          <details>
            <summary>Corporate support and event sponsorship</summary>
            <p>
              Explore Kids On Track Golf sponsorships or contact the
              organization to discuss a partnership that fits your goals.
            </p>
            <a className="source" href="/events/golf">
              Golf sponsorship opportunities ↗
            </a>
          </details>
          <details>
            <summary>Questions about your donation</summary>
            <p>
              Call <a href="tel:+17145317144">714-531-7144</a> or email{" "}
              <a href={links.email}>PR@AmericaOnTrack.org</a>. The team can
              assist with gift arrangements and documentation.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
