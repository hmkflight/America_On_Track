"use client";
import Image from "next/image";
import { useState } from "react";
const people = [
  {
    name: "Terry Thompson",
    role: "President & Co-Founder",
    image: "terry.jpg",
  },
  {
    name: "Claire Braeburn",
    role: "Executive Director & Co-Founder",
    image: "claire.jpg",
  },
];
export function PeopleExhibit() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="people-exhibit">
      <div className="portrait-stack">
        {people.map((p, i) => (
          <div
            className={`portrait ${i === selected ? "portrait-active" : ""}`}
            key={p.name}
          >
            <Image
              src={`/images/${p.image}`}
              fill
              sizes="(max-width:760px) 230px, 300px"
              alt={p.name}
              priority
            />
          </div>
        ))}
      </div>
      <div className="portrait-switch" aria-label="Founder portraits">
        {people.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setSelected(i)}
            aria-pressed={i === selected}
          >
            {p.name}
            <small>{p.role}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
