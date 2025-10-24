// pages/services.js
import '../app/globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ServicesHero from '../components/ServicesHero/ServicesHero'; // Judul halaman Layanan
import DedicatedSection from '../components/DedicatedSection/DedicatedSection'; // Detail Internet Dedicated
import BroadbandSection from '../components/BroadbandSection/BroadbandSection'; // Detail Internet Broadband
import ComparisonTable from '../components/ComparisonTable/ComparisonTable'; // Tabel Perbandingan Produk
import CTABanner from '@/components/CTABanner/CTABanner'; // CTA untuk penawaran

export default function Services() {
  return (
    <div>
      <title>Layanan Kami - PT QUICKNET NUSANTARA TEKNOLOGI</title>
      <Navbar />

      <main>
        {/* 1. Judul Halaman Layanan */}
        <ServicesHero />

        {/* 2. Detail Layanan Dedicated (Premium) */}
        <DedicatedSection />

        {/* 3. Detail Layanan Broadband (Ekonomis) */}
        <BroadbandSection />

        {/* 4. Tabel Perbandingan Cepat */}
        <ComparisonTable />

        {/* 5. Aksi Penutup */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
