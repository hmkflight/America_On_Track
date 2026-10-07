import Link from "next/link";
import { links } from "@/lib/content";
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-name">
            America
            <br />
            <em>On Track.</em>
          </Link>
          <p>
            Creating brighter futures for
            <br />
            communities & youth since 1995.
          </p>
        </div>
        <div>
          <h2>Discover</h2>
          {[
            ["Programs", "/programs"],
            ["Our story", "/about"],
            ["People & boards", "/about/leadership"],
            ["History & awards", "/about/history"],
            ["Impact", "/impact"],
          ].map(([n, h]) => (
            <Link key={h} href={h}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h2>Take part</h2>
          {[
            ["Get involved", "/get-involved"],
            ["Give", "/donate"],
            ["Kids On Track Golf", "/events/golf"],
            ["Resources", "/resources"],
            ["Contact", "/contact"],
          ].map(([n, h]) => (
            <Link key={h} href={h}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h2>Let’s connect</h2>
          <a href="tel:+17145317144">714 531 7144</a>
          <a href={links.email}>PR@AmericaOnTrack.org</a>
          <p>
            600 W. Santa Ana Blvd.
            <br />
            Suite 710
            <br />
            Santa Ana, CA 92701
          </p>
          <a href={links.newsletter}>Join our newsletter ↗</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 America On Track</span>
        <span>Independent 501(c)(3) · EIN 33-0724044</span>
        <Link href="/privacy">Privacy & site information</Link>
      </div>
    </footer>
  );
}
