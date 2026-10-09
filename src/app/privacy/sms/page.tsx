import { Reader, Block, Action } from "@/components/reader";
export const metadata = { title: "SMS disclosure" };
export default function SMS() {
  return <Reader tone="dark" label="Information / SMS" title="Messages. On your terms." summary="Program information, updates and news from America On Track, with clear choices about receiving messages." back="/privacy">
    <p className="eyebrow">SMS disclosure</p>
    <p className="lead">Text updates are optional.</p>
    <Block title="What opting in means">
      <p>America On Track’s published SMS disclosure states that opting in means agreeing to receive program information, updates and news via text message. Messages recur, and message and data rates may apply. Reply STOP at any time to unsubscribe.</p>
    </Block>
    <Block title="Manage your preferences">
      <p>To ask about joining the SMS program or to manage your information, contact executive support. Contacting the team does not automatically subscribe you to text messages.</p>
      <Action href="mailto:ExecSupport@AmericaOnTrack.org?subject=SMS%20program%20preferences">Contact executive support</Action>
      <Action href="tel:+17145317144" secondary>Call 714 531 7144</Action>
    </Block>
    <Block title="Opt out at any time">
      <p>Reply STOP to an America On Track message, or contact the organization directly. Opting out does not affect your other interactions with its services.</p>
      <p>The privacy policy explains mobile-information handling, service providers and your rights to access, correct, verify or remove personal information.</p>
      <Action href="/privacy">Read the privacy policy</Action>
    </Block>
  </Reader>;
}
