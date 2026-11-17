import type { Metadata } from "next";
import { site } from "../../lib/site";
import CtaBand from "../../components/CtaBand";

export const metadata: Metadata = {
  title: "Testimonials | Ayaz Ali Performance Marketing",
  description: "Client testimonials for Ayaz Ali, Performance Marketing Manager.",
  alternates: { canonical: `${site.url}/testimonials` },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="wrap page-head">
        <p className="eyebrow">Testimonials</p>
        <h1 className="serif">What clients and colleagues say.</h1>
      </section>
      <section className="wrap section">
        <div className="placeholder-box"><p>Client testimonials will be published here once they have been supplied and approved for display.</p></div>
      </section>
      <CtaBand title="Worked together before?" text="If you are happy to share a testimonial, I would be grateful." />
    </>
  );
}
