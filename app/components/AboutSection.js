"use client";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="about-grid">
                    {/* Image Side */}
                    <div className="about-image-wrapper">
                        {/* Replace with your actual photo at /public/images/about.jpg */}
                        <img
                            src="/images/about.jpg"
                            alt="Lumière Vows — Lead Photographer"
                            className="about-image"
                            onError={(e) => {
                                // Placeholder if image is missing
                                e.target.style.background =
                                    "linear-gradient(135deg, #1a1a1a 0%, #3a3028 100%)";
                                e.target.style.objectFit = "none";
                            }}
                        />
                        <div className="about-image-accent" />
                        <div className="about-badge">
                            <span className="about-badge-number">12+</span>
                            <span className="about-badge-label">Years of Vision</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content">
                        <span className="section-eyebrow">Our Story</span>
                        <h2 className="section-title">
                            Capturing Love in
                            <br />
                            Every Frame
                        </h2>
                        <div className="divider" />

                        <p className="about-text">
                            Lumière Vows was born from a simple belief — that every love
                            story deserves to be told with the same care, artistry, and
                            emotion it was lived. We are not just photographers and
                            filmmakers; we are storytellers who happen to carry a camera.
                        </p>
                        <p className="about-text">
                            With over 500 weddings across Pakistan, Dubai, and Europe, we
                            have perfected the art of blending into the background while
                            capturing the moments that matter most — the stolen glances,
                            the happy tears, the laughter that fills the room.
                        </p>
                        <p className="about-text">
                            Our films are shot in stunning{" "}
                            <strong style={{ color: "#d4af7a" }}>4K resolution</strong>,
                            ensuring every frame looks breathtaking on any screen — from
                            your phone to a 65-inch television.
                        </p>

                        <div className="about-signature">Ahmad Raza</div>
                        <div className="about-signature-label">
                            Founder &amp; Lead Cinematographer
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}