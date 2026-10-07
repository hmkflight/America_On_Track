import { Intro, Action, Photo, Source } from "@/components/elements";
import { links } from "@/lib/content";
export const metadata = { title: "Get involved" };
const ways = [
  [
    "Become a mentor",
    "Be a steady, encouraging presence for a child. Start with the adult mentor interest form; the team will explain qualifications, training, and commitments.",
    "Adult mentor interest",
    links.mentor,
  ],
  [
    "Lead as a teen",
    "Build your own leadership skills while contributing to your community. Explore Emerging Leaders and share your interest.",
    "Teen interest form",
    links.teen,
  ],
  [
    "Lend your time",
    "Support activities, events, and practical work with America On Track. Share your interests and ask about current volunteer opportunities.",
    "Volunteer interest",
    links.volunteer,
  ],
  [
    "Bring us together",
    "Schools, businesses, and community organizations can help create more opportunities. Start a conversation about a partnership.",
    "Talk about a partnership",
    links.email,
  ],
];
export default function Involved() {
  return (
    <>
      <Intro
        eyebrow="Get involved"
        title="You have something"
        accent="to give."
      >
        <p>
          Time. Experience. Encouragement. There are many ways to make room for
          someone else’s possibilities.
        </p>
      </Intro>
      <section className="wrap pathways" aria-label="Ways to participate">
        {ways.map(([title, text, cta, href]) => (
          <article className="pathway" key={title}>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Action href={href}>{cta}</Action>
          </article>
        ))}
      </section>
      <section className="community-band">
        <Photo
          name="mentor.jpg"
          alt="An adult mentor and young participant at an America On Track event"
        />
        <div>
          <p className="eyebrow">A relationship can open a world</p>
          <h2>
            Showing up
            <br />
            <em>is a beginning.</em>
          </h2>
          <p>
            The first step is a conversation. America On Track will help you
            understand where your time and experience can make a difference.
          </p>
          <Action href="/programs/brighter-futures" light>
            Meet Brighter Futures
          </Action>
          <br />
          <Source path="volunteer">Official volunteer information</Source>
        </div>
      </section>
    </>
  );
}
