import { Exhibition } from "@/components/exhibition";
import { programs } from "@/lib/content";
export default function Home() {
  return (
    <Exhibition
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
