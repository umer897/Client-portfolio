import PlayerProvider from "./components/Player";
import Effects from "./components/Effects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquees from "./components/Marquees";
import Films from "./components/Films";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Enquire from "./components/Enquire";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <PlayerProvider>
      <Effects />
      <Navbar />
      <Hero />
      <Marquees />
      <Films />
      <Services />
      <Process />
      <Testimonials />
      <Enquire>
        <Footer />
      </Enquire>
    </PlayerProvider>
  );
}
