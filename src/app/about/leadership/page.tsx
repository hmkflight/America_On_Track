import { Intro, Photo, Source } from "@/components/elements";
import { board, honorary, advisory } from "@/lib/content";
export const metadata = { title: "People & boards" };
export default function Leadership() {
  return (
    <>
      <Intro
        eyebrow="People & governance"
        title="The work has"
        accent="many hands."
      >
        <p>
          Founders, board members, staff, and volunteers bring a shared
          commitment—and different experience—to America On Track.
        </p>
      </Intro>
      <section className="wrap founder-grid" aria-label="Founders">
        <article className="founder">
          <Photo
            name="terry.jpg"
            alt="Terry Thompson, President and Co-Founder"
            priority
          />
          <div>
            <h2>
              Terry
              <br />
              <em>Thompson</em>
            </h2>
            <p className="eyebrow">President · Co-Founder</p>
            <p>
              Co-founded America On Track in 1995, bringing business experience
              and leadership training to work with young people and families.
            </p>
            <Source path="terry-thompson">Terry’s full biography</Source>
          </div>
        </article>
        <article className="founder">
          <Photo
            name="claire.jpg"
            alt="Claire Braeburn, Executive Director and Co-Founder"
            priority
          />
          <div>
            <h2>
              Claire
              <br />
              <em>Braeburn</em>
            </h2>
            <p className="eyebrow">Executive Director · Co-Founder</p>
            <p>
              Co-founded the organization and helped design its work in
              mentoring, leadership, health education, and community prevention.
            </p>
            <Source path="claire-braeburn">Claire’s full biography</Source>
          </div>
        </article>
      </section>
      <section className="governance">
        <div className="wrap">
          <p className="eyebrow">The governance assembly</p>
          <h2 style={{ marginTop: 20 }}>
            Experience in service
            <br />
            <em>of possibility.</em>
          </h2>
          <nav className="board-tabs" aria-label="Board sections">
            <a href="#directors">Board of Directors</a>
            <a href="#honorary">Honorary Board</a>
            <a href="#advisory">Advisory Board</a>
          </nav>
          <h2 id="directors" className="sr-only">
            Board of Directors
          </h2>
          <div className="board-grid">
            {board.map(([name, role, org]) => (
              <article key={name} className="board-person">
                <span className="initial" aria-hidden="true">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <h3>{name}</h3>
                <p>{role}</p>
                <p>{org}</p>
              </article>
            ))}
          </div>
          <div className="board-secondary">
            {[
              ["Honorary Board", "honorary", honorary],
              ["Advisory Board", "advisory", advisory],
            ].map(([title, id, people]) => (
              <section id={id as string} key={id as string}>
                <h2>{title as string}</h2>
                {(people as string[][]).map(([name, role]) => (
                  <article className="board-person" key={name}>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </article>
                ))}
              </section>
            ))}
          </div>
          <p className="source-note">
            Roster reproduced from America On Track’s published board page, last
            modified May 22, 2025 and checked October 7, 2026. Professional
            affiliations are listed as published.
          </p>
          <Source path="board-of-directors">Published board roster</Source>
        </div>
      </section>
    </>
  );
}
