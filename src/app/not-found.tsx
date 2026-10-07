import { Intro, Action } from "@/components/elements";
export default function NotFound() {
  return (
    <div className="wrap missing">
      <Intro
        eyebrow="404 · A different door"
        title="Let’s find"
        accent="your place."
      />
      <p>This page isn’t here. There’s plenty more to explore.</p>
      <Action href="/programs">Explore our programs</Action>
    </div>
  );
}
