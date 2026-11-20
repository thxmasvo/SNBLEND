
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />

      {/* MAIN HERO */}
      <Hero />

      {/* WELCOME SECTION */}
      <section id="welcome" className="scroll-mt-16">
        <Welcome />
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-16">
        <Gallery />
      </section>

      {/* LOCATION — INALA, BRISBANE */}
      <Location />

  

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
