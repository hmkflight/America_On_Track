"use client";
import Link from "next/link";
import { useState } from "react";
export function ResourceDirectory({
  groups,
}: {
  groups: { title: string; items: string[][] }[];
}) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const visible = groups.map((g) => ({
    ...g,
    items: g.items.filter(([n]) =>
      `${g.title} ${n}`.toLowerCase().includes(needle),
    ),
  }));
  const count = visible.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <label className="resource-search">
        Find a form, program or topic
        <input
          type="search"
          placeholder="Try “mentor” or “health”"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <p className="resource-count" role="status">
        {count} resources{needle ? " found" : ""}
      </p>
      {visible
        .filter((g) => g.items.length)
        .map((g) => (
          <section className="resource-group" key={g.title}>
            <h2>{g.title}</h2>
            {g.items.map(([name, url]) => (
              <Link key={name} href={url}>
                {name}
                <span aria-hidden="true">{url.startsWith("http") ? "↗" : "→"}</span>
              </Link>
            ))}
          </section>
        ))}
      {count === 0 ? (
        <p className="note">
          No matches. Try a broader word, or clear the search to see every
          resource.
        </p>
      ) : null}
    </>
  );
}
