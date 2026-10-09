import {
  Reader,
  Photo,
  Block,
  Disclosure,
  Action,
} from "@/components/reader";
import { links } from "@/lib/content";
export const metadata = { title: "Get involved" };
export default function Involved() {
  return (
    <Reader
      label="Participation / Your part"
      title="Bring what only you can bring."
      summary="Time. Curiosity. Experience. A willingness to show up. There are many ways to contribute."
      visual={
        <Photo
          src="mentor.jpg"
          alt="An America On Track mentor and young participant at a construction-themed event"
          priority
        />
      }
    >
      <p className="eyebrow">Take part</p>
      <p className="lead">
        Start with the role that fits you. We’ll help you find the next step.
      </p>
      <Block title="How would you like to participate?">
        <Disclosure title="I’d like to become an adult mentor" open>
          <p>
            Build a positive connection with a young person through Brighter
            Futures. Start with the interest form; the team will explain
            qualifications, training and expectations.
          </p>
          <Action href={links.mentor}>Adult mentor interest form</Action>
        </Disclosure>
        <Disclosure title="I’m a teen interested in leadership">
          <p>
            Emerging Leaders combines public speaking, civic engagement and
            learning. The program serves grades 4–12; this interest form is for
            teens. Families of younger students can contact the team.
          </p>
          <Action href={links.teen}>Teen Emerging Leader form</Action>
        </Disclosure>
        <Disclosure title="I’d like to volunteer">
          <p>
            Share your skills and interests with America On Track. The team can
            discuss current opportunities and where your time can make a useful
            contribution.
          </p>
          <Action href={links.volunteer}>Volunteer interest form</Action>
        </Disclosure>
        <Disclosure title="I’m looking for support for my family">
          <p>
            Ask about Brighter Futures and other opportunities. Program
            availability and participation are confirmed directly with the team.
          </p>
          <Action href="/contact">Contact the team</Action>
        </Disclosure>
        <Disclosure title="I represent a school or community partner">
          <p>
            Explore programs in leadership, fitness, nutrition and prevention,
            or discuss community health and policy collaboration.
          </p>
          <Action href="/programs">Explore programs</Action>
        </Disclosure>
      </Block>
      <Block title="Other ways to show up">
        <Action href="/events/golf" secondary>
          Join Kids On Track Golf
        </Action>
        <Action href="/donate" secondary>
          Support the work with a gift
        </Action>
        <Action href={links.newsletter} secondary>
          Join the email list
        </Action>
      </Block>
      <p className="note">
        Interest forms open America On Track’s official Wufoo pages. Submitting
        interest begins a conversation; it does not confirm placement.
      </p>
    </Reader>
  );
}
