import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "↗"}
    </span>
  );
}
export function Action({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`action${light ? " light" : ""}`} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function Photo({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/${name}`}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 60vw, 800px"
        priority={priority}
      />
    </div>
  );
}
export function Intro({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro wrap">
      <p className="eyebrow">
        <span className="seed" />
        {eyebrow}
      </p>
      <h1>
        {title} {accent && <em>{accent}</em>}
      </h1>
      {children && <div className="intro-copy">{children}</div>}
    </header>
  );
}
export function Source({
  path,
  children = "Read the original source",
}: {
  path: string;
  children?: ReactNode;
}) {
  return (
    <a className="source" href={`https://americaontrack.org/${path}/`}>
      {children} ↗
    </a>
  );
}
export function Invitation() {
  return (
    <section className="invitation wrap">
      <p className="eyebrow">There’s a place for you here</p>
      <h2>
        Make room for
        <br />
        <em>someone’s next.</em>
      </h2>
      <div className="actions">
        <Action href="/get-involved">Find your part</Action>
        <Link href="/donate" className="text-link">
          Support the work <Arrow />
        </Link>
      </div>
      <div className="invitation-doors" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}
