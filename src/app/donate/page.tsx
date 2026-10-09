import { Reader, Photo, Block, Action, Source } from "@/components/reader";
import { links } from "@/lib/content";
export const metadata = { title: "Make a donation" };
export default function Donate() {
  return (
    <Reader
      tone="red"
      label="Giving / Make it possible"
      title="Be part of someone’s bigger picture."
      summary="Your support helps America On Track bring leadership, mentoring and community health programs to life."
      visual={
        <Photo
          src="brighter.jpg"
          alt="A Brighter Futures participant working on a STEM project"
          priority
        />
      }
    >
      <p className="eyebrow">A gift with purpose</p>
      <p className="lead">
        Help sustain the everyday work that opens possibilities.
      </p>
      <Block title="Support America On Track">
        <p>
          Your gift supports an independent nonprofit working with children,
          families, schools and community partners in Orange County.
        </p>
        <Action href={links.donate}>
          Continue to the official donation form
        </Action>
        <p className="note">
          Giving is handled through America On Track’s official Wufoo form.
          You’ll choose your gift and provide payment details there.
        </p>
      </Block>
      <div className="donor-note">
        <p className="eyebrow">For your records</p>
        <p>
          <strong>America On Track</strong>
          <br />
          501(c)(3) nonprofit organization
          <br />
          EIN: 33-0724044
        </p>
        <p>
          600 W. Santa Ana Blvd., Suite 710
          <br />
          Santa Ana, CA 92701
        </p>
      </div>
      <Block title="More ways to contribute">
        <p>
          Discuss a sponsorship, a partnership or another way of supporting the
          organization directly with the team.
        </p>
        <Action href="/contact" secondary>
          Talk about your gift
        </Action>
        <Action href="/events/golf" secondary>
          Support the golf fundraiser
        </Action>
      </Block>
      <Source path="results">Read the published results</Source>
    </Reader>
  );
}
