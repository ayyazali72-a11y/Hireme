import Link from "next/link";
import { site, whatsappBusiness } from "../lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="mark" aria-hidden="true">AA</span>
          <span>{site.name}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm">Let&apos;s Talk</Link>
        <details className="mobile-menu">
          <summary aria-label="Open menu">Menu</summary>
          <nav aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
            <a href={whatsappBusiness} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
