import { Intro, Source, Action, Invitation } from "@/components/elements";
export const metadata = { title: "Impact & results" };
export default function Impact() {
  return (
    <>
      <Intro eyebrow="Our impact" title="Care, put" accent="into practice.">
        <p>
          Our work is measured in experiences, sustained support, and healthier
          environments. Here’s what the published record tells us.
        </p>
      </Intro>
      <section className="impact-mast">
        <div className="wrap">
          <p className="eyebrow">A documented year · 2019 results</p>
          <div className="impact-numbers">
            <div>
              <strong>5,597</strong>
              <h2>Opportunities to learn & participate</h2>
              <p>
                Classes, presentations, trainings, resource booths, health
                fairs, leadership sessions, and special events conducted in
                2019.
              </p>
            </div>
            <div>
              <strong>259,452</strong>
              <h2>Service contacts</h2>
              <p>
                Duplicated youth and adult contacts, including repeated
                participation in classes and training. This is not a count of
                unique people.
              </p>
            </div>
          </div>
          <Source path="results">
            Read the published results and methodology context
          </Source>
        </div>
      </section>
      <section className="wrap content-section">
        <p className="impact-statement">
          An opportunity matters more when it’s part of{" "}
          <em>something that lasts.</em>
        </p>
      </section>
      <section className="wrap content-section">
        <div className="section-lead">
          <h2>
            Beyond
            <br />
            <em>the classroom.</em>
          </h2>
          <p>
            Individual learning and community environments are both part of
            prevention.
          </p>
        </div>
        <div className="practice-grid">
          <article className="practice">
            <h3>Schools that move</h3>
            <p>
              The published fitness program describes work in 21 schools since
              2006—a historical total, supported by physical education and
              training.
            </p>
          </article>
          <article className="practice">
            <h3>Places that protect</h3>
            <p>
              Reported policy milestones include smoke-free parks in Santa Ana
              (2012) and Stanton (2018), and work toward Buena Park policies in
              2023.
            </p>
          </article>
          <article className="practice">
            <h3>Evidence that informs</h3>
            <p>
              America On Track reports working with the Center for Applied
              Research Solutions since 1998 to inform program decisions and
              improvement.
            </p>
          </article>
        </div>
        <div className="support-note">
          <p>
            Looking for recent outcomes or a specific program’s evaluation? Ask
            the team for current reporting. We keep historical results clearly
            dated.
          </p>
          <Action href="/contact">Ask about the results</Action>
        </div>
      </section>
      <Invitation />
    </>
  );
}
