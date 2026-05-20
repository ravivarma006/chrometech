import dynamic from "next/dynamic";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// Below-the-fold interactive components — lazy loaded to reduce initial JS bundle
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"));
const CoverageSection = dynamic(() => import("@/components/CoverageSection"));
const PartnershipsSection = dynamic(() => import("@/components/PartnershipsSection"));
const InsightsSection = dynamic(() => import("@/components/InsightsSection"));

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <AboutSection />
        <WhySection />
        <TestimonialsSection />
        <IndustriesSection />
        <CoverageSection />
        <PartnershipsSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
