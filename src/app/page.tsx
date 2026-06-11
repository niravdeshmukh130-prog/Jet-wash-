import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CleanSweep from "@/components/CleanSweep";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import InstagramWall from "@/components/InstagramWall";
import Testimonials from "@/components/Testimonials";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <CleanSweep />
        <BeforeAfter />
        <Services />
        <Trust />
        <Process />
        <InstagramWall />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SmoothScroll>
  );
}
