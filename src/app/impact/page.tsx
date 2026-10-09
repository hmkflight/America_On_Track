import { Reader, Block, Source, Action } from "@/components/reader";
export const metadata = { title: "Impact & evidence" };
export default function Impact() {
  return (
    <Reader
      tone="mint"
      label="Evidence / Published record"
      title="Good work deserves a clear record."
      summary="Historical results, documented milestones and the context that makes them meaningful."
      visual={
        <div className="evidence-art" aria-hidden="true">
          <span>AOT</span>
          <span>
            FIELD
            <br />
            NOTES
          </span>
          <small>2019 / PUBLISHED RESULTS</small>
        </div>
      }
    >
      <p className="eyebrow">Read the evidence</p>
      <p className="lead">
        Classes. Mentoring. Community action. The published record shows support
        in practice.
      </p>
      <table className="evidence-table">
        <caption>A documented year · 2019</caption>
        <tbody>
          <tr>
            <th scope="row">Activities delivered</th>
            <td>
              <strong>5,597</strong>Classes, presentations, resource booths,
              health fairs, leadership sessions, merchant trainings and special
              events.
            </td>
          </tr>
          <tr>
            <th scope="row">Service contacts</th>
            <td>
              <strong>259,452</strong>Duplicated youth and adult contacts,
              including repeated participation. This is not a count of unique
              people.
            </td>
          </tr>
        </tbody>
      </table>
      <Source path="results">
        Published 2019 results & evaluation context
      </Source>
      <Block title="What sits behind the numbers">
        <p>
          America On Track describes a commitment to evidence-based practice and
          formative evaluation—using findings to improve program decisions. It
          reports working with the Center for Applied Research Solutions since
          1998.
        </p>
        <p>
          Our results archive also preserves participant and mentor
          accounts. These describe individual experiences, not guaranteed
          outcomes.
        </p>
      </Block>
      <Block title="Changes in everyday environments">
        <table className="evidence-table">
          <tbody>
            <tr>
              <th scope="row">Schools</th>
              <td>
                The fitness page describes work in 21 schools since 2006. This
                is a historical total.
              </td>
            </tr>
            <tr>
              <th scope="row">Public spaces</th>
              <td>
                Reported smoke-free park milestones include Santa Ana in 2012
                and Stanton in 2018.
              </td>
            </tr>
            <tr>
              <th scope="row">Community policy</th>
              <td>
                The organization reports support for Buena Park’s smoke-free
                city and multi-unit housing policies in July 2023.
              </td>
            </tr>
          </tbody>
        </table>
        <Source path="fitness">School fitness work</Source>
        <Source path="tobacco-policies-protect-our-communities">
          Reported community policy milestones
        </Source>
      </Block>
      <Block title="Looking for current reporting?">
        <p>
          Historical results remain clearly dated here. Contact the team for
          recent evaluations, current service figures or a specific program’s
          outcomes.
        </p>
        <Action href="/contact">Ask about the results</Action>
      </Block>
    </Reader>
  );
}
