"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/content";
const labels = ["Lead", "Belong", "Move", "Nourish", "Choose", "Protect"];
export function ProgramGallery({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(0);
  const Heading = full ? "h2" : "h3";
  const [filter, setFilter] = useState("all");
  const available = programs
    .map((p, i) => ({ ...p, index: i }))
    .filter((p) => filter === "all" || p.areas.includes(filter));
  return (
    <div className={`program-gallery${full ? " full" : ""}`}>
      {full && (
        <div
          className="filter-controls"
          aria-label="Filter programs by audience"
        >
          {[
            ["all", "Everyone"],
            ["youth", "Young people"],
            ["families", "Families"],
            ["schools", "Schools"],
            ["community", "Community"],
          ].map(([value, label]) => (
            <button
              key={value}
              aria-pressed={filter === value}
              onClick={() => {
                setFilter(value);
                const first = programs.findIndex(
                  (p) => value === "all" || p.areas.includes(value),
                );
                setActive(first);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" role="status">
        {available.length} programs shown
      </p>
      <div className="program-rooms">
        {available.map((p) => (
          <article
            key={p.slug}
            className={`program-room room-${p.index}${active === p.index ? " expanded" : ""}`}
          >
            <button
              className="room-toggle"
              aria-expanded={active === p.index}
              aria-controls={`room-${p.slug}`}
              aria-label={`${labels[p.index]} — ${p.name}`}
              onClick={() => setActive(active === p.index ? -1 : p.index)}
            >
              <span className="room-shape" aria-hidden="true" />
              <span>{labels[p.index]}</span>
              <span className="room-plus" aria-hidden="true">
                {active === p.index ? "−" : "+"}
              </span>
            </button>
            <div className="room-content" id={`room-${p.slug}`}>
              <div className="room-photo">
                <Image
                  src={`/images/${p.image}`}
                  alt={p.alt}
                  fill
                  priority={full && p.index === 0}
                  sizes="(max-width:700px) 85vw, 460px"
                />
              </div>
              <div className="room-description">
                <p className="eyebrow">{p.format}</p>
                <Heading>
                  <Link href={`/programs/${p.slug}`}>
                    {p.name}
                    <span aria-hidden="true"> ↗</span>
                  </Link>
                </Heading>
                <p>{p.audience}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <noscript>
        <style>
          {
            ".program-rooms{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));height:auto!important}.program-room{min-height:490px;min-width:0}.room-toggle{position:relative!important;height:80px!important;flex-direction:row!important;padding:25px!important;pointer-events:none}.room-toggle>span:nth-child(2){writing-mode:horizontal-tb!important;font-size:24px}.room-plus,.filter-controls{display:none}.room-content{display:flex!important;flex-direction:column!important;animation:none!important;clip-path:none!important;padding:0 20px 20px;height:410px}.room-photo{flex:1;width:100%;min-height:190px}"
          }
        </style>
      </noscript>
    </div>
  );
}
