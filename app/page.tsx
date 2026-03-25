import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import HowItWorks from "@/components/HowItWorks";
import Premium from "@/components/Premium";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <RestaurantCarousel />
      <HowItWorks />
      <Premium />
      <Testimonials />
      <Stats />
      <FinalCTA />
      <Footer />
    </main>
  );
}
