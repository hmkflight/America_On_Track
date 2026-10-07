"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
const paths = [
  ["Programs", "/programs"],
  ["Our story", "/about"],
  ["Impact", "/impact"],
  ["Get involved", "/get-involved"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  function close() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="America On Track home">
          <span className="brand-symbol" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            America
            <br />
            <strong>On Track</strong>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {paths.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/donate" className="give-link">
            Give <span aria-hidden="true">↗</span>
          </Link>
          <button
            ref={trigger}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
            }}
          >
            Menu <span aria-hidden="true">＋</span>
          </button>
        </div>
      </header>
      <noscript>
        <style>{`.menu-toggle,.space-toggle{display:none!important}`}</style>
        <nav
          className="fallback-nav"
          aria-label="Navigation without JavaScript"
        >
          {[...paths, ["Resources", "/resources"], ["Contact", "/contact"]].map(
            ([name, href]) => (
              <a key={href} href={href}>
                {name}
              </a>
            ),
          )}
        </nav>
      </noscript>
      <dialog
        ref={dialog}
        id="site-menu"
        className="menu-dialog"
        aria-label="Explore America On Track"
        onCancel={close}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items =
            dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
          if (!items?.length) return;
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
      >
        <div className="menu-inside">
          <div className="menu-top">
            <span className="eyebrow">America On Track</span>
            <button onClick={close} aria-label="Close menu">
              Close ×
            </button>
          </div>
          <nav aria-label="Expanded navigation">
            {[
              ...paths,
              ["Leadership", "/about/leadership"],
              ["History", "/about/history"],
              ["Resources", "/resources"],
              ["Golf tournament", "/events/golf"],
              ["Contact", "/contact"],
              ["Donate", "/donate"],
            ].map(([name, href]) => (
              <Link key={href} href={href} onClick={close}>
                {name}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <p>Orange County, California · Since 1995</p>
        </div>
      </dialog>
    </>
  );
}
