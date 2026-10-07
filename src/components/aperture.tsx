"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export function Aperture() {
  const [open, setOpen] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  return (
    <div className={`aperture-experience${open ? " is-open" : ""}`}>
      <div
        className="aperture-stage"
        id="possibility-spaces"
        ref={stage}
        onPointerMove={(e) => {
          if (
            e.pointerType !== "mouse" ||
            matchMedia("(prefers-reduced-motion: reduce)").matches
          )
            return;
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty(
            "--rx",
            `${((e.clientX - r.left - r.width / 2) / r.width) * 7}deg`,
          );
          e.currentTarget.style.setProperty(
            "--ry",
            `${(-(e.clientY - r.top - r.height / 2) / r.height) * 4}deg`,
          );
        }}
        onPointerLeave={() => {
          stage.current?.style.setProperty("--rx", "0deg");
          stage.current?.style.setProperty("--ry", "0deg");
        }}
      >
        <div className="aperture-ground" aria-hidden="true" />
        <div className="portal">
          <div className="portal-frame f1" />
          <div className="portal-frame f2" />
          <div className="portal-frame f3" />
          <div className="portal-frame f4" />
          <div className="portal-image">
            <Image
              src="/images/mentoring.jpg"
              alt="An America On Track mentor and young people sharing time together outdoors"
              fill
              sizes="(max-width:700px) 90vw, 650px"
              priority
              className="is-active"
            />
          </div>
          <span className="portal-word" aria-hidden="true">
            belong.
          </span>
        </div>
        <div
          className="side-space space-left"
          inert={!open}
          aria-hidden={!open}
        >
          <div className="space-picture">
            <Image
              src="/images/stem.jpg"
              alt="Young people collaborating on a hands-on learning project"
              fill
              sizes="(max-width:700px) 130px, 270px"
            />
          </div>
          <Link href="/programs/emerging-leaders">
            <em>discover.</em>
            <span>Learning together ↗</span>
          </Link>
        </div>
        <div
          className="side-space space-right"
          inert={!open}
          aria-hidden={!open}
        >
          <div className="space-picture">
            <Image
              src="/images/leaders.jpg"
              alt="America On Track scholarship recipients with Terry Thompson"
              fill
              sizes="(max-width:700px) 130px, 270px"
            />
          </div>
          <Link href="/programs/emerging-leaders">
            <em>lead.</em>
            <span>Youth leadership ↗</span>
          </Link>
        </div>
        <span className="scene-annotation left">
          Potential is already there.
          <br />
          We help create the conditions.
        </span>
        <span className="scene-annotation right">
          Orange County, CA
          <br />
          Opening possibilities since 1995
        </span>
      </div>
      <div className="scene-bottom">
        <button
          className="space-toggle"
          aria-controls="possibility-spaces"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="toggle-glyph" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
          {open ? "Bring it together" : "Open the space"}
          <span className="toggle-hint">
            {open ? "One connected purpose" : "A world of possibilities"}
          </span>
        </button>
        <Link className="scene-link" href="/programs">
          Explore our programs <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
