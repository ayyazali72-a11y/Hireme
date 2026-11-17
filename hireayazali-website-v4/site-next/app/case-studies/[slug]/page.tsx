import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site, cases, caseSections } from "../../../lib/site";
import CtaBand from "../../../components/CtaBand";
import Placeholder from "../../../components/Placeholder";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

function find(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const c = find(params.slug);
  if (!c) return { title: "Case study not found" };
  return {
    title: `Case Study ${c.n} | Performance Marketing | Ayaz Ali`,
    description: `Performance marketing case study ${c.n} by Ayaz Ali: strategy, campaign structure, optimisation and measured results.`,
    alternates: { canonical: `${site.url}/case-studies/${c.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const c = find(params.slug);
  if (!c) notFound();
  return (
    <>
      <nav aria-label="Breadcrumb" className="wrap crumbs">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li aria-current="page">Case study {c.n}</li>
        </ol>
      </nav>
      <section className="wrap page-head">
        <p className="eyebrow">Case study {c.n}</p>
        <h1 className="serif">Client and campaign name pending</h1>
        <p className="lead">Objective, platform and headline results will appear here once the campaign data is verified.</p>
        <div className="case-meta"><span>Industry: TBC</span><span>Platform: TBC</span><span>Period: TBC</span></div>
      </section>
      <section className="wrap" style={{ marginTop: 24 }}>
        <Placeholder label="Campaign dashboard screenshot pending" />
      </section>
      <section className="wrap section narrow">
        {caseSections.map((name) => (
          <div key={name} style={{ borderTop: "1px solid var(--line)", padding: "20px 0" }}>
            <h2 style={{ fontSize: "1.4rem" }} className="serif">{name}</h2>
            <p className="muted">Pending. To be written from verified campaign data.</p>
          </div>
        ))}
      </section>
      <CtaBand title="Have a similar objective?" text="Share your goals and current setup and I will tell you honestly whether I can help." />
    </>
  );
}
