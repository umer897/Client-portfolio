"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { siteConfig, heroWords, stats } from "@/data/siteData";

export default function Hero() {
  const [who, setWho] = useState("couple");

  const layer = () => (
    <div className="layer">
      <img src={siteConfig.heroPoster} alt="" role="presentation" />
      <video className="vid" src={siteConfig.heroVideo} poster={siteConfig.heroPoster} autoPlay muted loop playsInline preload="auto" />
    </div>
  );

  return (
    <header className="hero" id="top">
      <div className="cmp" id="cmp">
        {layer()}
      </div>
      <div className="hshade" />
      <div className="wrap hin">
        <div className="eyebrow rv" style={{ "--d": "1.3s" }}>Cinematic wedding post-production · UK &amp; US</div>
        <div className="toggle rv" style={{ "--d": "1.4s" }}>
          <span>I’m a</span>
          <button className={who === "couple" ? "on" : ""} onClick={() => setWho("couple")}>Couple</button>
          <button className={who === "studio" ? "on" : ""} onClick={() => setWho("studio")}>Studio or videographer</button>
        </div>
        <div className="mobile-hero-kicker">Wedding films</div>
        <h1>
          <span className="hero-title-desktop">
            {heroWords.map((w, i) => (
              <span key={i}>
                <span className="ln"><span className="hw" style={{ "--i": i }}>{Array.isArray(w) ? <i>{w[0]}</i> : w}</span></span>{" "}
              </span>
            ))}
          </span>
          <span className="hero-title-mobile">
            <span>Your day,</span>
            <span>beautifully told.</span>
          </span>
        </h1>
        <div className="row rv" style={{ "--d": "1.9s" }}>
          <p className="lead">Your videographer shot the day. We turn the raw footage into a story-first film built around your vows, the laughs and the in-between moments. Serving couples across the UK and US.</p>
          <div className="acts">
            <a className="btn fill" href="#films">
              Watch my work
              <svg className="hero-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2.5v11m-4.5-4.5L8 13.5l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn" href="#enquire">Start an enquiry</a>
          </div>
        </div>
        <div className="stats rv" style={{ "--d": "2.1s" }}>
          {stats.map((s) => <div className="stat" key={s.label}><b>{s.number}</b><span>{s.label}</span></div>)}
        </div>
      </div>
      <div className="mobile-scroll-cue" aria-hidden="true" />
    </header>
  );
}
