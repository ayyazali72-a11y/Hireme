import Link from "next/link";
import type { Metadata } from "next";
import { site, services, cases } from "../lib/site";
import CtaBand from "../components/CtaBand";
import Placeholder from "../components/Placeholder";

export const metadata: Metadata = {
  title: "Ayaz Ali | Performance Marketing Manager",
  description: "Ayaz Ali is a Performance Marketing Manager with 7+ years of experience in Google Ads, Meta Ads, TikTok Ads and GA4. $3M+ ad spend managed, 10x average ROAS.",
  alternates: { canonical: site.url },
};

const icons: Record<string, string> = {
  "google-ads": "M5 16a3 3 0 1 0 0 .01M8 13l9-10M13 4l5 6",
  "meta-ads": "M3 14c0-4 2-7 4.5-7s4 3 4.5 5c.5-2 2-5 4.5-5S21 10 21 14s-2 5-4.5 5-4-3-4.5-5c-.5 2-2 5-4.5 5S3 18 3 14z",
  "chatgpt-ads": "M4 5h16v11H9l-5 4z",
  "tiktok-ads": "M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 3 2.5 5 5 5",
  ga4: "M4 20V12M10 20V4M16 20v-7M22 20H2",
};

export default function HomePage() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="eyebrow">Ayaz Ali &middot; Performance Marketing Manager</p>
          <h1 className="serif">Meet The Performance Marketer.</h1>
          <p className="hero-sub">Turning advertising investment into measurable business growth.</p>
          <p className="lead">I help ambitious businesses grow through data-driven performance marketing, paid advertising, and advanced measurement strategies. From managing multi-platform advertising campaigns to optimising conversion performance, my focus is always on measurable business growth.</p>
          <p className="muted small">7+ Years of Performance Marketing Experience &middot; {site.location}</p>
          <div className="btn-row">
            <Link href="/portfolio" className="btn btn-primary">View My Portfolio</Link>
            <Link href="/contact" className="btn btn-ghost">Get in Touch</Link>
          </div>
        </div>
        <figure className="hero-photo" style={{ margin: 0 }}>
          <img src="/images/1.jpg" alt="Ayaz Ali, Performance Marketing Manager" width={1080} height={1080} />
        </figure>
      </section>

      <section className="stats" aria-label="Key results">
        <div className="wrap stat-grid">
          {site.stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-num">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section" aria-labelledby="what-i-do">
        <div className="section-head">
          <p className="eyebrow">What I do</p>
          <h2 id="what-i-do" className="serif">Five platforms. One goal: measurable growth.</h2>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <Link key={s.id} href={`/services#${s.id}`} className="svc-card">
              <span className="svc-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[s.id]} /></svg></span>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
              <span className="link-arrow">Explore service</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section" aria-labelledby="featured">
        <div className="section-head">
          <p className="eyebrow">Featured work</p>
          <h2 id="featured" className="serif">Selected case studies</h2>
          <p className="muted">Case study details and results are being prepared from verified campaign data.</p>
        </div>
        <div className="case-grid">
          {cases.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="case-card">
              <Placeholder label="Campaign screenshot pending" />
              <div className="case-meta"><span>Case study {c.n}</span><span>Industry: TBC</span><span>Platform: TBC</span></div>
              <h3>Client and campaign name pending</h3>
              <p className="muted">Objective and key results to be added from verified campaign data.</p>
              <span className="link-arrow">View Case Study</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section split" aria-labelledby="about-preview">
        <img src="/images/3.png" alt="Ayaz Ali, professional photograph" style={{ borderRadius: 6, width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-preview" className="serif">Seven years of performance marketing, built on data.</h2>
          <p>I am a Performance Marketing Manager based in Lahore, Pakistan, with more than seven years of experience managing paid advertising across Google and Meta, and measuring it through GA4.</p>
          <p>I manage budgets with a focus on conversion performance, and I am open to relocating to the United Kingdom for suitable onsite Performance Marketing roles.</p>
          <Link href="/about" className="link-arrow">Read full profile</Link>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="testi-preview">
        <div className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testi-preview" className="serif">Client feedback</h2>
        </div>
        <div className="placeholder-box"><p>Client testimonials will appear here once they have been supplied and approved.</p></div>
      </section>

      <CtaBand title="Let's build something measurable." text="Whether you are a recruiter with a Performance Marketing role to fill, or a business that needs better paid media results, I would welcome the conversation." />
    </>
  );
}
