"use client";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition, useState, type CSSProperties } from "react";
type Item = {
  slug: string;
  name: string;
  audience: string;
  format: string;
  image: string;
  areas: string[];
};
export function Exhibition({
  items,
  index = false,
}: {
  items: Item[];
  index?: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(index ? 0 : null);
  const [audience, setAudience] = useState("all");
  const active = selected === null ? null : items[selected];
  return (
    <div
      className={`exhibition ${selected !== null ? "is-focused" : ""} ${index ? "program-index" : ""}`}
    >
      <div className="exhibition-meta">
        <span className="eyebrow">
          {index
            ? "Programs / Find your fit"
            : "Youth leadership · Mentoring · Community health"}
        </span>
        <span className="edition">
          Orange County, CA
          <br />
          Independent nonprofit · Est. 1995
        </span>
      </div>
      <h1 className="world-title">
        {index ? (
          <>
            <span>Different needs.</span>
            <span>A fuller picture.</span>
          </>
        ) : (
          <>
            <span>Every side of</span>
            <span>growing up.</span>
          </>
        )}
      </h1>
      <div className="photo-stage" aria-hidden="true">
        <div className="stage-shadow" />
        <div className="photo-assembly">
          {items.map((p, i) => (
            <div
              key={p.slug}
              className={`photo-plane ${selected === i ? "selected-plane" : ""}`}
              style={
                { "--i": i, "--angle": `${(i - 2.5) * 21}deg` } as CSSProperties
              }
            >
              <ViewTransition
                name={`program-photo-${p.slug}`}
                share="auto"
                default="none"
              >
                <div className="plane-image">
                  <Image
                    src={`/images/${p.image}`}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 260px, 380px"
                    priority={i === 0 || i === 1}
                  />
                </div>
              </ViewTransition>
              <div className="plane-caption">
                <span>{p.name}</span>
                <span>↗</span>
              </div>
              <div className="plane-edge" />
            </div>
          ))}
        </div>
      </div>
      <div className="world-caption">
        <span className="crosshair" aria-hidden="true">
          +
        </span>
        <p>
          {index
            ? "Find a program for your family, school or community. Select a focus to see who it serves."
            : "A young person is more than a single need. We bring leadership, mentoring and healthier communities into the same picture."}
        </p>
        <Link href={index ? "/contact" : "/about"}>
          {index ? "Talk to our team" : "Meet America On Track"} ↗
        </Link>
      </div>
      <div className="exhibit-selector">
        <p className="eyebrow">
          {index ? "Explore by audience" : "Bring a program into focus"}
        </p>
        {index ? (
          <label className="audience-label">
            I’m looking for
            <select
              value={audience}
              onChange={(e) => {
                const value = e.target.value;
                setAudience(value);
                const n = items.findIndex(
                  (p) => value === "all" || p.areas.includes(value),
                );
                setSelected(n >= 0 ? n : null);
              }}
            >
              <option value="all">All programs</option>
              <option value="youth">Young people</option>
              <option value="families">Families</option>
              <option value="schools">Schools</option>
              <option value="community">Community partners</option>
            </select>
          </label>
        ) : null}
        <div className="program-controls">
          {items.map((p, i) =>
            audience === "all" || p.areas.includes(audience) ? (
              <button
                key={p.slug}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <span className="control-dot" aria-hidden="true" />
                <span>{p.name}</span>
                <span className="control-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ) : null,
          )}
        </div>
        <button
          className="overview-control"
          onClick={() => {
            setSelected(null);
            setAudience("all");
          }}
          aria-pressed={selected === null}
        >
          ⊞ See the whole picture
        </button>
      </div>
      {active ? (
        <div className="focus-note" key={active.slug}>
          <p className="eyebrow">{active.format}</p>
          <h2>{active.name}</h2>
          <p>{active.audience}</p>
          <Link href={`/programs/${active.slug}`} className="focus-link">
            Explore this program <span aria-hidden="true">↗</span>
          </Link>
        </div>
      ) : (
        <div className="exhibition-note">
          <span className="eyebrow">Six areas of work. One commitment.</span>
          <p>Support that sees the whole person.</p>
        </div>
      )}
      <p className="sr-only" role="status">
        {active
          ? `${active.name}. ${active.audience}. Program details are available below.`
          : "All six areas of work are in view."}
      </p>
      <noscript>
        <div className="static-programs">
          <h2>Explore our programs</h2>
          {items.map((p) => (
            <Link href={`/programs/${p.slug}`} key={p.slug}>
              {p.name} →
            </Link>
          ))}
        </div>
      </noscript>
    </div>
  );
}
