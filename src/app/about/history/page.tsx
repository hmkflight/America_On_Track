import { Intro, Photo, Source, Invitation } from "@/components/elements";
import { milestones } from "@/lib/content";
export const metadata = { title: "History & recognition" };
export default function History() {
  return (
    <>
      <Intro
        eyebrow="The America On Track archive"
        title="A commitment."
        accent="Still unfolding."
      >
        <p>
          From two founders studying local needs to decades of mentoring,
          learning, and community health. Open a few chapters of the story.
        </p>
      </Intro>
      <section className="archive wrap" aria-label="Historical chapters">
        <div className="archive-folios">
          {milestones.map(([year, title, text]) => (
            <article className="folio" key={year}>
              <span className="year">{year}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="award-feature">
          <Photo
            name="award.jpg"
            alt="Terry Thompson and Claire Braeburn receiving recognition at the White House"
          />
          <div>
            <p className="eyebrow">From the archive · National recognition</p>
            <h2>
              Service that
              <br />
              <em>was seen.</em>
            </h2>
            <p>
              The founders received the President’s Service Award for their work
              with young people. The Awards page and archival photograph
              identify November 1998; the Emerging Leaders page gives 1999.
            </p>
            <Source path="awards">Explore the complete awards archive</Source>
          </div>
        </div>
        <div className="disclosures">
          <details>
            <summary>Education, prevention, and community recognition</summary>
            <p>
              The published archive includes the 1997 Outstanding Contributions
              to Education Award; the 2000 Ambassadors of Peace Award; the 2001
              Outstanding Supporters of Prevention Award; the 2009 Women Making
              a Difference Award; and the 2010 Community Building Award for the
              Memorial Exercise Park.
            </p>
          </details>
          <details>
            <summary>Long-term investment in healthier communities</summary>
            <p>
              The archive records Physical Education Program grants in 2007,
              2011, and 2016; nutrition education grants from 2013–2020; and
              tobacco-prevention and tobacco-control grants. These are
              historical awards, not claims of current funding.
            </p>
          </details>
        </div>
        <Source path="our-story">The founding story</Source>
      </section>
      <Invitation />
    </>
  );
}
