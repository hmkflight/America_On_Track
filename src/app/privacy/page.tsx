import { Intro, Source } from "@/components/elements";
export const metadata = { title: "Privacy & site information" };
export default function Privacy() {
  return (
    <>
      <Intro
        eyebrow="Privacy & site information"
        title="Clear about"
        accent="the details."
      />
      <div className="wrap prose">
        <h2>About this local website</h2>
        <p>
          This is a privately developed redesign proposal for America On Track.
          It is not the organization’s official public website. Program
          information and photographs come from the organization’s published
          materials, reviewed October 7, 2026.
        </p>
        <h2>Forms and donations</h2>
        <p>
          This preview does not collect form submissions, process payments, or
          use analytics. Participation and giving links lead to the
          organization’s official third-party forms, which have their own
          privacy practices.
        </p>
        <h2>Organization policies</h2>
        <p>
          For America On Track’s current privacy and messaging terms, consult
          the official sources.
        </p>
        <Source path="privacy-policy">Official privacy policy</Source>
        <br />
        <Source path="sms-disclosure">Official SMS disclosure</Source>
        <h2>Photography and reporting</h2>
        <p>
          Images show real America On Track activities and people. They are not
          presented as photographs of 2026 participants. Historical results
          remain dated, and published board affiliations are not independently
          verified employment records.
        </p>
      </div>
    </>
  );
}
