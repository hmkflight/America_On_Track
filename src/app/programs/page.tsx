import { Intro, Action } from "@/components/elements";
import { ProgramGallery } from "@/components/program-gallery";
export const metadata = { title: "Programs" };
export default function Programs() {
  return (
    <>
      <Intro eyebrow="Our programs" title="Many ways" accent="to become.">
        <p>
          Leadership. Belonging. Health. Six areas of work create opportunities
          that reach beyond a single lesson.
        </p>
      </Intro>
      <section className="wrap program-index" aria-label="Program directory">
        <ProgramGallery full />
        <div className="support-note">
          <p>
            Looking for support or a school partnership? We’ll help you find the
            right program and explain current availability.
          </p>
          <Action href="/contact">Talk with our team</Action>
        </div>
      </section>
    </>
  );
}
