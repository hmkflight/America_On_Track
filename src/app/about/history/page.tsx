import {
  Reader,
  Block,
  Disclosure,
  Photo,
  Source,
  Action,
} from "@/components/reader";
import { milestones } from "@/lib/content";
export const metadata = { title: "History & recognition" };
export default function History() {
  return (
    <Reader
      tone="dark"
      label="Archive / Since 1995"
      title="A purpose with a history."
      summary="Decades of practical work, growing from a conviction that children and communities deserve better possibilities."
      visual={
        <div className="archive-display">
          <div className="archive-label">
            FROM THE ARCHIVE<span>Recognition / November 1998</span>
          </div>
          <Photo
            src="award.jpg"
            alt="The founders receiving national recognition at the White House, from the organization’s awards archive"
            priority
          />
          <div className="archive-label">
            PRESIDENT’S SERVICE AWARD<span>A history of showing up.</span>
          </div>
        </div>
      }
    >
      <p className="eyebrow">The archive</p>
      <p className="lead">
        Two founders. A year of research. A lasting commitment to Orange County.
      </p>
      <Block title="The beginning">
        <p>
          Terry Thompson and Claire Braeburn established America On Track in
          1995 after studying the challenges facing local children and families.
          Their combined experience became the foundation for leadership,
          mentoring, health education and prevention programs.
        </p>
      </Block>
      <Block title="Open a chapter">
        <Disclosure title="1995–2003 / Establishing the work" open>
          {milestones.slice(0, 2).map(([y, t, d]) => (
            <div className="archive-entry" key={y}>
              <time>{y}</time>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
          <div className="archive-entry">
            <time>1998</time>
            <div>
              <h3>National recognition</h3>
              <p>
                The awards archive dates the founders’ President’s Service Award
                at the White House to November 1998.
              </p>
              <p className="note">
                Another program page says 1999. We follow the dedicated awards
                archive and retain the discrepancy.
              </p>
            </div>
          </div>
        </Disclosure>
        <Disclosure title="2004–2016 / Deepening the support">
          {milestones.slice(2, 5).map(([y, t, d]) => (
            <div className="archive-entry" key={y}>
              <time>{y}</time>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </Disclosure>
        <Disclosure title="2017 onward / Healthier environments">
          <div className="archive-entry">
            <time>2018</time>
            <div>
              <h3>Smoke-free parks in Stanton</h3>
              <p>
                The organization reports work supporting an ordinance adopted in
                July 2018.
              </p>
            </div>
          </div>
          <div className="archive-entry">
            <time>2020</time>
            <div>
              <h3>A quarter-century of service</h3>
              <p>
                The awards archive marks 25 years and describes multi-year
                nutrition, physical education and tobacco-prevention grant
                support.
              </p>
            </div>
          </div>
          {milestones.slice(5).map(([y, t, d]) => (
            <div className="archive-entry" key={y}>
              <time>{y}</time>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </Disclosure>
      </Block>
      <Block title="Recognition, in context">
        <p>
          The published archive records 21 awards and commendations across the
          organization’s first 25 years. Recognition includes the President’s
          Service Award, Santa Ana’s 2010 Community Building Award and a 2016
          Tobacco Control Evaluation Center Certificate of Excellence.
        </p>
        <Source path="awards">Explore the full awards & grant archive</Source>
      </Block>
      <Action href="/impact">Read the evidence</Action>
      <Source path="our-story">The organization’s founding story</Source>
    </Reader>
  );
}
