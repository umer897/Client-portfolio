"use client";
import { useEffect, useRef } from "react";
import { steps } from "@/data/siteData";

export default function Process() {
  const box = useRef(null);

  // Scroll-linked progress line; toggles "on" via the DOM so it never fights the reveal classes.
  useEffect(() => {
    const el = box.current, st = [...el.querySelectorAll(".step")];
    const upd = () => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.8 - r.top) / (innerHeight * 0.45)));
      el.style.setProperty("--prog", p);
      st.forEach((s, i) => s.classList.toggle("on", p >= i / 3 - 0.02 && p > 0.02));
    };
    addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
    return () => { removeEventListener("scroll", upd); removeEventListener("resize", upd); };
  }, []);

  return (
    <section id="process" className="light">
      <div className="wrap">
        <div className="eyebrow rv">How it works</div>
        <h2 className="rv" style={{ "--d": "80ms" }}>A simple, clear process</h2>
        <div className="steps" ref={box}>
          {steps.map((s, i) => (
            <div className="step rv" key={s.title} style={{ "--d": `${i * 90}ms` }}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
