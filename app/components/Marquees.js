import { marquee1, marquee2 } from "@/data/siteData";

const css = `
.mq-section {
  --mq-color: var(--ivory);
  --mq-accent: var(--gold);
  --mq-line: rgba(255, 255, 255, 0.1);

  padding: clamp(28px, 4vw, 48px) 0;
  border-top: 1px solid var(--mq-line);
  border-bottom: 1px solid var(--mq-line);
  color: var(--mq-color);
  background: radial-gradient(ellipse at center, rgba(255, 210, 74, 0.07), transparent 68%), #1c040c;
}

.mq {
  display: flex;
  overflow: hidden;
  padding: 14px 0;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  background: var(--gold);
  color: #1c040c;
}

.mq--outline {
  margin-top: 12px;
  padding: 16px 0;
  border-block: 1px solid rgba(255, 210, 74, 0.28);
  background: rgba(255, 255, 255, 0.025);
  color: var(--mq-color);
}

.mq__group {
  display: flex;
  flex-shrink: 0;
  min-width: 100%;
  align-items: center;
  justify-content: space-around;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  padding-right: clamp(1.25rem, 3vw, 2.5rem);
  margin: 0;
  list-style: none;
  animation: mq-scroll var(--mq-duration, 40s) linear infinite;
}

.mq--reverse .mq__group {
  animation-direction: reverse;
}

.mq:hover .mq__group {
  animation-play-state: paused;
}

.mq__item {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.5rem);
  white-space: nowrap;
}

.mq__text {
  font-size: clamp(1.5rem, 3.4vw, 2.7rem);
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 1.1;
  font-style: italic;
  font-family: var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif;
  display: inline-block;
}

.mq--outline .mq__text {
  font-size: clamp(1.7rem, 3.8vw, 3rem);
  color: transparent;
  -webkit-text-stroke: 1px var(--gold2);
}

.mq__star {
  display: inline-block;
  font-size: clamp(0.75rem, 1.2vw, 1rem);
  color: var(--mq-accent);
}

.mq--outline .mq__star {
  color: var(--gold);
}

@keyframes mq-scroll {
  to { transform: translateX(-100%); }
}

@media (prefers-reduced-motion: reduce) {
  .mq__group { animation: none; }
}
`;

function Row({ items, reverse = false, outline = false, duration = 40 }) {
  return (
    <div
      className={`mq ${reverse ? "mq--reverse" : ""} ${outline ? "mq--outline" : ""}`}
      style={{ "--mq-duration": `${duration}s` }}
      aria-hidden="true"
    >
      {[0, 1].map((g) => (
        <ul className="mq__group" key={g}>
          {items.map((t, i) => (
            <li className="mq__item" key={i}>
              <span className="mq__text">{t}</span>
              <span className="mq__star">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function Marquees() {
  return (
    <section className="mq-section">
      <style>{css}</style>
      <Row items={marquee1} duration={45} />
      <Row items={marquee2} duration={55} reverse outline />
    </section>
  );
}