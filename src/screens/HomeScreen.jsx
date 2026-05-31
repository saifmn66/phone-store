import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import HowItWorks from '../components/home/HowItWorks';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import ContactBooking from '../components/home/ContactBooking';
import Footer from '../components/Footer';

export default function HomeScreen() {
  return (
    <main className="w-full bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Hero section with carousels and smooth animations */}
      <Hero />

      {/* Services grid displaying Screen, Battery, Liquid and Board-level repair options */}
      <Services />

      {/* 3-Step logical repair progression (Diagnose -> Repair -> Deliver) */}
      <HowItWorks />

      {/* Price matrix quotes with brand toggle selectors */}
      <Pricing />

      {/* Testimonials slider displaying verified client ratings */}
      <Testimonials />

      {/* Secure booking scheduler and stylized vector GPS grid coordinates */}
      <ContactBooking />

      {/* Brand footer and trust details list */}
      <Footer />
    </main>
  );
}
