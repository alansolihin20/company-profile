// pages/coverage.js

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CoverageHero from '../components/CoverageHero/CoverageHeo';
import CoverageMapSection from '../components/CoverageMapSection/CoverageMapSection'; // Komponen utama peta
import CTABanner from '../components/CTABanner/CTABanner'; // CTA untuk Inquiry

export default function Coverage() {
  return (
    <div>
      <title>Area Coverage - PT QUICKNET NUSANTARA TEKNOLOGI</title>
      <Navbar />

      <main>
        {/* 1. Judul Halaman Coverage */}
        <CoverageHero />

        {/* 2. Peta dan Daftar Area Layanan */}
        <CoverageMapSection />

        {/* 3. Aksi Penutup */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
