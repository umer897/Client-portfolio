"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { films } from "@/data/siteData";
import { usePlayer } from "./Player";

const bgOf = (f) => `radial-gradient(120% 120% at 20% 10%,${f.from},${f.to} 70%)`;

export default function Films() {
  const [filter, setFilter] = useState("all");
  const { open } = usePlayer();

  return (
    <section className="light">
      <div className="wrap">
        <div id="films" className="head rv">
          <div><div className="eyebrow">Selected work</div><h2>Recent edits</h2></div>
          <div className="filters">
            {["all", "uk", "us"].map((f) => (
              <button key={f} className={filter === f ? "on" : ""} onClick={() => setFilter(f)}>{f === "all" ? "All" : f.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div className="grid">
          {films.map((f, i) => (
            <article key={f.id} className="card rv" style={{ "--d": `${i * 70}ms`, display: filter === "all" || filter === f.region ? undefined : "none" }}
              onClick={() => open({ title: f.title, video: f.video, youtubeId: f.youtubeId, poster: f.poster || f.image, image: f.image, bg: f.image ? undefined : bgOf(f), note: "4K wedding film preview" })}>
              <div className="thumb" style={f.image || f.poster ? undefined : { background: bgOf(f) }}>
                {f.image ? <img src={f.image} alt="" /> : f.poster ? <img src={f.poster} alt="" /> : (
                  <div className="ap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".8"><circle cx="12" cy="12" r="9" /><path d="M12 3l3 6M21 12l-6 0M12 21l-3-6M3 12l6 0M5.6 5.6l5.2 3M18.4 5.6l-3 5.2M18.4 18.4l-5.2-3M5.6 18.4l3-5.2" /></svg>
                    <span>Film still</span>
                  </div>
                )}
                {f.region && <span className="badge">{f.region.toUpperCase()}</span>}
                <span className="watch">Watch film</span>
                <i className="shade" />
              </div>
              <h3>{f.title}</h3>
              {f.place && <p>{f.place}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
