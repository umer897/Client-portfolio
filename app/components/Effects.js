"use client";
import { useEffect } from "react";

// Page-wide effects: scroll progress bar, reveal-on-scroll, magnetic buttons.
export default function Effects() {
  useEffect(() => {
    const de = document.documentElement, off = [];
    const alreadyHasJsClass = de.classList.contains("js");
    de.classList.add("js");
    if (!alreadyHasJsClass) off.push(() => de.classList.remove("js"));

    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".rv").forEach((x) => io.observe(x));
    off.push(() => io.disconnect());

    const prog = document.getElementById("prog");
    const onS = () => { prog.style.width = (scrollY / Math.max(1, de.scrollHeight - innerHeight)) * 100 + "%"; };
    addEventListener("scroll", onS, { passive: true }); onS();
    off.push(() => removeEventListener("scroll", onS));

    document.querySelectorAll(".btn,.ring").forEach((b) => {
      const mv = (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.25}px)`; };
      const lv = () => (b.style.transform = "");
      b.addEventListener("mousemove", mv); b.addEventListener("mouseleave", lv);
      off.push(() => { b.removeEventListener("mousemove", mv); b.removeEventListener("mouseleave", lv); });
    });
    return () => off.forEach((f) => f());
  }, []);

  return (
    <>
      <div id="pre" aria-hidden="true"><span>Lumière Vows</span><i /></div>
      <div id="prog" />
    </>
  );
}
