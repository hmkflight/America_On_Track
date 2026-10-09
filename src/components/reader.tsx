import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import legacyRoutes from "@/lib/legacy-routes.json";
export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`action ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      <span aria-hidden="true">{href.startsWith("http") ? "↗" : "→"}</span>
    </Link>
  );
}
export function Source({
  path,
  children,
}: {
  path: keyof typeof legacyRoutes;
  children?: React.ReactNode;
}) {
  return (
    <Link className="source" href={legacyRoutes[path]}>
      {children || "Explore the details"}{" "}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  transitionName,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  transitionName?: string;
}) {
  const image = (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        fill
        sizes="(max-width: 760px) 90vw, 45vw"
        priority={priority}
      />
    </div>
  );
  return transitionName ? (
    <ViewTransition name={transitionName} share="auto" default="none">
      {image}
    </ViewTransition>
  ) : (
    image
  );
}
export function Reader({
  label,
  title,
  summary,
  visual,
  children,
  tone = "blue",
  back = "/",
}: {
  label: string;
  title: string;
  summary: string;
  visual?: React.ReactNode;
  children: React.ReactNode;
  tone?: string;
  back?: string;
}) {
  return (
    <div className={`reader tone-${tone}`}>
      <aside className="exhibit">
        <div className="exhibit-top">
          <Link href={back} className="back-link">
            ↖ {back === "/programs" ? "All programs" : back === "/resources" ? "Resource library" : back === "/privacy" ? "Privacy policy" : "The whole picture"}
          </Link>
          <span className="eyebrow">{label}</span>
        </div>
        <h1>{title}</h1>
        <div className="exhibit-art">
          {visual || (
            <div className="abstract-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          )}
        </div>
        <p className="exhibit-summary">{summary}</p>
        <span className="exhibit-corner" aria-hidden="true">
          AOT / {label.split(" / ")[0]}
        </span>
      </aside>
      <article className="reading-pane">
        <div className="reading-inner">{children}</div>
        <div className="reader-end">
          <span>You’re part of the picture.</span>
          <Link href="/get-involved">Find your part ↗</Link>
        </div>
      </article>
    </div>
  );
}
export function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="text-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function Disclosure({
  title,
  children,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <details className="disclosure" open={open}>
      <summary>
        {title}
        <span aria-hidden="true">+</span>
      </summary>
      <div>{children}</div>
    </details>
  );
}
