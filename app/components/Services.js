import { services } from "@/data/siteData";

export default function Services() {
  return (
    <section className="dark2">
      <div className="wrap">
        <div id="services" className="eyebrow rv">What I edit</div>
        <h2 className="rv" style={{ marginBottom: 56, "--d": "80ms" }}>Services</h2>
        {services.map((s, i) => (
          <div className="srow rv" key={s.title} style={{ "--d": `${i * 70}ms` }}>
            <span className="si">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="price">{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
