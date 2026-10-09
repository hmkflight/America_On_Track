import { Reader, Block, Action } from "@/components/reader";
import policy from "@/lib/privacy-policy.json";
export const metadata = { title: "Privacy policy" };
export default function Privacy() {
  return <Reader tone="dark" label="Information / Privacy" title="Your information matters." summary="America On Track’s privacy policy, data rights and communication choices.">
    <p className="eyebrow">Privacy policy</p>
    <p className="lead">{policy.introduction}</p>
    <nav className="article-contents" aria-label="Privacy policy sections">
      <h2>In this policy</h2>
      {policy.sections.map((section, i) => <a href={`#policy-${i + 1}`} key={section.title}>{section.title}<span aria-hidden="true">↓</span></a>)}
    </nav>
    {policy.sections.map((section, i) => <section className="text-block" id={`policy-${i + 1}`} key={section.title}>
      <h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>)}
    <Block title="Questions or a privacy request">
      <Action href="mailto:ExecSupport@AmericaOnTrack.org">Email executive support</Action>
      <Action href="tel:+17145317144" secondary>Call 714 531 7144</Action>
      <Action href="/privacy/sms" secondary>SMS disclosure & choices</Action>
    </Block>
    <Block title="About this website">
      <p>Donation, event and participation forms are hosted by America On Track’s external service provider, Wufoo. This website has no account system or payment processor. No analytics or advertising trackers have been added; fonts and images are served locally.</p>
      <p className="note">The organization’s published policy wording is preserved above. Transferred to this website on October 8, 2026; this transfer date is not a new policy effective date.</p>
    </Block>
  </Reader>;
}
