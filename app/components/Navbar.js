"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/siteData";

export default function Navbar() {
  const nav = useRef(null);

  useEffect(() => {
    const el = nav.current;
    const onS = () => el.classList.toggle("solid", scrollY > 40);
    onS();
    addEventListener("scroll", onS, { passive: true });
    return () => removeEventListener("scroll", onS);
  }, []);

  const toggleMenu = () => nav.current.classList.toggle("open");
  const closeMenu = () => nav.current.classList.remove("open");

  return (
    <nav id="nav" ref={nav}>
      <div className="wrap">
        <a className="logo" href="#top"><i />{siteConfig.name}</a>
        <ul>
          <li><a href="#films" onClick={closeMenu}>Films</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#process" onClick={closeMenu}>Process</a></li>
          <li><a href="#words" onClick={closeMenu}>Kind words</a></li>
          <li className="mobile-book-link"><a href="#enquire" onClick={closeMenu}>Book an edit</a></li>
        </ul>
        <a className="btn gold" href="#enquire">Book an edit</a>
        <button id="mb" aria-label="Menu" onClick={toggleMenu}><i /><i /></button>
      </div>
    </nav>
  );
}
