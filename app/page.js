import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import Home from '@/components/Home/Home';
import Footer from '@/components/Footer/Footer';
import ServicePreview from '@/components/SevicePreview/ServicePreview';
import StatsSection from '@/components/StatsSection/StatsSection';
import CTABanner from '@/components/CTABanner/CTABanner';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <main>
        <Home />
        <ServicePreview />
        <StatsSection />
        <CTABanner />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
