import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section id="words" className="dark">
      <div className="wrap">
        <div className="eyebrow rv">Kind words</div>
        <h2 className="rv" style={{ "--d": "80ms" }}>From videographers and couples</h2>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <div className="q rv" key={i} style={{ "--d": `${i * 90}ms` }}>
              <span className="qm">“</span>
              <blockquote>{t.text}</blockquote>
              <cite>{t.by}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
