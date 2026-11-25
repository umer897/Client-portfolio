import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <div className="wrap">
      <footer className="rv">
        <span>© {new Date().getFullYear()} [YOUR NAME] · Wedding film editor · UK &amp; US</span>
        <div>
          <a href="#">Instagram</a>
          <a href="#">Vimeo</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
        </div>
      </footer>
    </div>
  );
}
