import Hero from "../components/landing/Hero";
import DashboardPreview from "../components/landing/DashboardPreview";

export default function LandingPage() {
  return (
    <main className="bg-[#09090B] text-white">
      <Hero />
      <DashboardPreview />
    </main>
  );
}