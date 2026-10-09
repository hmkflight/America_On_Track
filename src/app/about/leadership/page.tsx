import { PeopleExhibit } from "@/components/people-exhibit";
import { Reader, Block, Disclosure, Source } from "@/components/reader";
import { board, honorary, advisory } from "@/lib/content";
export const metadata = { title: "People & boards" };
export default function Leadership() {
  return (
    <Reader
      label="Organization / People"
      title="The people behind the commitment."
      summary="Founders, directors and advisers with a shared commitment to Orange County’s children and families."
      visual={<PeopleExhibit />}
    >
      <p className="eyebrow">Leadership & governance</p>
      <p className="lead">A long-standing purpose, carried by people.</p>
      <Block title="Our founders">
        <Disclosure title="Terry Thompson · President & Co-Founder" open>
          <p>
            Terry co-founded America On Track in 1995 and directs several of its
            programs. Her background spans literature, financial planning and
            leadership training, with a lifelong interest in social justice.
          </p>
          <p>
            She brings a hands-on approach to working with schools, families,
            volunteers and community partners.
          </p>
          <Source path="terry-thompson">Read Terry’s full biography</Source>
        </Disclosure>
        <Disclosure title="Claire Braeburn · Executive Director & Co-Founder">
          <p>
            Claire helped launch America On Track with experience in technology,
            public speaking and marketing. Her work spans program
            infrastructure, community coalitions, violence prevention and
            tobacco prevention.
          </p>
          <p>
            Her early volunteer work at UCLA helped shape a career in community
            leadership. She has participated in the Tobacco and Vape Free OC
            Coalition since 1997.
          </p>
          <Source path="claire-braeburn">Read Claire’s full biography</Source>
        </Disclosure>
      </Block>
      <Block title="Board of Directors">
        <table className="governance-table">
          <caption>Published Board of Directors</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Role & affiliation</th>
            </tr>
          </thead>
          <tbody>
            {board.map(([name, role, organization]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>
                  {role}
                  <span>{organization}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Block>
      <Block title="Honorary & advisory boards">
        <Disclosure title="Honorary Board of Directors">
          <div className="roster">
            {honorary.map(([n, r]) => (
              <p key={n}>
                <strong>{n}</strong>
                <span>{r}</span>
              </p>
            ))}
          </div>
        </Disclosure>
        <Disclosure title="Advisory Board">
          <div className="roster">
            {advisory.map(([n, r]) => (
              <p key={n}>
                <strong>{n}</strong>
                <span>{r}</span>
              </p>
            ))}
          </div>
        </Disclosure>
      </Block>
      <p className="note">
        Names, roles and affiliations reflect the organization’s published board
        listing, checked October 2026. The source page was last updated in May
        2025.
      </p>
    </Reader>
  );
}
