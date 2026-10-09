import { notFound } from "next/navigation";
import Link from "next/link";
import { Reader, Photo, Action } from "@/components/reader";
import articles from "@/lib/articles.json";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article?.title, description: article?.summary };
}
export default async function ResourceArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <Reader label={article.label} title={article.title} summary={article.summary} tone={article.tone} back="/resources"
      visual={<Photo src={article.image} alt={article.slug === "terry-thompson" ? "Terry Thompson" : article.slug === "claire-braeburn" ? "Claire Braeburn" : article.slug === "awards" ? "America On Track founders receiving recognition at the White House" : article.slug === "results" ? "An America On Track mentoring activity" : article.slug === "lowering-youth-access-to-tobacco" ? "America On Track scholarship recipients" : "A Santa Ana park featured in America On Track’s community health work"} priority />}>
      <p className="eyebrow">{article.label}</p>
      <p className="lead">{article.summary}</p>
      <nav className="article-contents" aria-label="On this page">
        <h2>In this article</h2>
        {article.sections.map((section, index) => <a key={section.title} href={`#part-${index + 1}`}>{section.title}<span aria-hidden="true">↓</span></a>)}
      </nav>
      {article.sections.map((section, index) => (
        <section className="text-block" id={`part-${index + 1}`} key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul className="article-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        </section>
      ))}
      <div className="related-programs">
        <h2>Continue exploring</h2>
        {article.related.map(([name, href]) => <Link key={href} href={href}>{name} →</Link>)}
      </div>
      <Action href="/resources" secondary>Back to the resource library</Action>
    </Reader>
  );
}
