import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import DashboardPreview from "../components/landing/DashboardPreview";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="bg-[#09090B] text-white min-h-screen">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <CTA />
      <Footer />
    </main>
  );
}