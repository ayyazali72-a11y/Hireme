import type { Metadata } from "next";
import { site, cases } from "../../lib/site";
import CtaBand from "../../components/CtaBand";
import Placeholder from "../../components/Placeholder";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Marketing Portfolio | Ayaz Ali",
  description: "Performance marketing case studies by Ayaz Ali covering Google Ads, Meta Ads, TikTok Ads and GA4 measurement.",
  alternates: { canonical: `${site.url}/portfolio` },
};

const screenshots = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/screenshots/${n}.png`);

export default function PortfolioPage() {
  return (
    <>
      <section className="wrap page-head">
        <p className="eyebrow">Portfolio</p>
        <h1 className="serif">Campaigns, strategy and measured results.</h1>
        <p className="lead">Each case study covers the objective, strategy, structure, optimisation, tracking and results. Client names may be anonymised where confidentiality applies.</p>
      </section>
      <section className="wrap section">
        <div className="case-grid">
          {cases.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="case-card">
              <Placeholder label="Campaign screenshot pending" />
              <div className="case-meta"><span>Case study {c.n}</span><span>Industry: TBC</span><span>Platform: TBC</span></div>
              <h3>Client and campaign name pending</h3>
              <p className="muted">Objective: to be confirmed. Results: pending verified data.</p>
              <span className="link-arrow">View Case Study</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head"><p className="eyebrow">Campaign dashboards</p><h2 className="serif">Platform reporting</h2>
        <p className="muted">Personal contact details have been blurred. Personal contact details have been removed.</p></div>
        <div className="case-grid">
          {screenshots.map((src, i) => (
            <figure key={src} style={{ margin: 0 }}>
              <img src={src} alt={`Campaign dashboard screenshot ${i + 1}`} loading="lazy" style={{ border: "1px solid var(--line)", borderRadius: 6, width: "100%", height: "auto" }} />
            </figure>
          ))}
        </div>
      </section>
      <CtaBand title="Want the detailed version?" text="I can walk you through campaign structure, measurement and results in a direct conversation." />
    </>
  );
}
