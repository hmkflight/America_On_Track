import { Exhibition } from "@/components/exhibition";
import { programs } from "@/lib/content";
export const metadata = { title: "Explore our programs" };
export default function Programs() {
  return (
    <Exhibition
      index
      items={programs.map(({ slug, name, audience, format, image, areas }) => ({
        slug,
        name,
        audience,
        format,
        image,
        areas,
      }))}
    />
  );
}
