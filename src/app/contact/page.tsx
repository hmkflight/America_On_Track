import { Reader, Block, Action } from "@/components/reader";
import { links } from "@/lib/content";
export const metadata = { title: "Contact us" };
export default function Contact() {
  return (
    <Reader
      label="Contact / Start here"
      title="Let’s find your place in the picture."
      summary="For program participation, partnerships, volunteering and giving, talk directly with America On Track."
      visual={
        <div className="contact-exhibit">
          <span className="eyebrow">START A CONVERSATION</span>
          <a href="tel:+17145317144">714 531 7144 ↗</a>
          <a href={links.email}>PR@AmericaOnTrack.org ↗</a>
          <span className="eyebrow">SANTA ANA / ORANGE COUNTY</span>
        </div>
      }
    >
      <p className="eyebrow">Our home in Orange County</p>
      <p className="lead">A local team. An open conversation.</p>
      <Block title="Our office">
        <address className="address">
          America On Track
          <br />
          600 W. Santa Ana Blvd., Suite 710
          <br />
          Santa Ana, CA 92701
        </address>
        <p className="note">
          Fax: 714 531 7773
          <br />
          Please contact the team to arrange a visit.
        </p>
        <Action
          href="https://www.google.com/maps/search/?api=1&query=600+W+Santa+Ana+Blvd+Suite+710+Santa+Ana+CA+92701"
          secondary
        >
          View the office location
        </Action>
      </Block>
      <Block title="A direct route">
        <Action href={links.mentor} secondary>
          Adult mentor interest
        </Action>
        <Action href={links.teen} secondary>
          Teen leadership interest
        </Action>
        <Action href={links.volunteer} secondary>
          General volunteer interest
        </Action>
        <Action href={links.newsletter} secondary>
          Newsletter sign-up
        </Action>
      </Block>
      <p className="note">
        Email and phone links use your device’s apps. You can also copy the
        address or number above.
      </p>
    </Reader>
  );
}
