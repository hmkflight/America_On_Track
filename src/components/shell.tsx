"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
const destinations = [
  ["/", "The whole picture"],
  ["/programs", "Our programs"],
  ["/about", "About America On Track"],
  ["/about/leadership", "People & boards"],
  ["/about/history", "History & recognition"],
  ["/impact", "Impact & evidence"],
  ["/get-involved", "Get involved"],
  ["/donate", "Make a donation"],
  ["/events/golf", "Kids On Track Golf"],
  ["/resources", "Resource library"],
  ["/contact", "Contact us"],
];
export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() {
    menu.current?.close();
    trigger.current?.focus();
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className="site-header"
        style={{ viewTransitionName: "site-header" }}
      >
        <Link href="/" className="brand" aria-label="America On Track home">
          <span className="brand-symbol" aria-hidden="true">
            ✳
          </span>
          <span>
            AMERICA
            <br />
            ON TRACK
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary">
          <Link
            href="/programs"
            aria-current={path.startsWith("/programs") ? "page" : undefined}
          >
            Programs
          </Link>
          <Link
            href="/about"
            aria-current={path === "/about" ? "page" : undefined}
          >
            About us
          </Link>
          <Link
            href="/impact"
            aria-current={path === "/impact" ? "page" : undefined}
          >
            Impact
          </Link>
          <Link
            href="/get-involved"
            aria-current={path === "/get-involved" ? "page" : undefined}
          >
            Get involved
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="give-link" href="/donate">
            Give <span aria-hidden="true">↗</span>
          </Link>
          <button
            ref={trigger}
            onClick={() => menu.current?.showModal()}
            className="menu-trigger"
            aria-label="Open site index"
          >
            Index <span aria-hidden="true">☰</span>
          </button>
        </div>
      </header>
      <noscript>
        <nav className="nojs-nav" aria-label="Site pages">
          {destinations.map(([url, label]) => (
            <Link href={url} key={url}>
              {label}
            </Link>
          ))}
        </nav>
      </noscript>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <span>Orange County, California · Since 1995</span>
        <Link href="/events/golf">26 OCT 2026 · Kids On Track Golf ↗</Link>
        <div>
          <Link href="/contact">Contact</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
      <dialog
        ref={menu}
        className="site-index"
        onClick={(e) => {
          if (e.target === menu.current) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            const items =
              menu.current?.querySelectorAll<HTMLElement>("a,button");
            if (!items?.length) return;
            const first = items[0],
              last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }}
      >
        <div className="index-top">
          <span className="eyebrow">America On Track / Site index</span>
          <button
            onClick={close}
            className="round-button"
            aria-label="Close site index"
          >
            ×
          </button>
        </div>
        <nav aria-label="All pages">
          {destinations.map(([url, label], i) => (
            <Link
              key={url}
              href={url}
              onClick={close}
              aria-current={path === url ? "page" : undefined}
            >
              <span className="index-no">{String(i + 1).padStart(2, "0")}</span>
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <div className="index-bottom">
          <p>
            Many ways to make a difference.
            <br />
            One place to start.
          </p>
          <a href="tel:+17145317144">714 531 7144</a>
        </div>
      </dialog>
    </>
  );
}
