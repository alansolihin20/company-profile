// components/ServicePreview.js

import FeatureCard from '../FeatureCard/FeatureCard';
// Contoh import Icon dari Heroicons
import { RocketLaunchIcon, GlobeAltIcon, WrenchScrewdriverIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Data Layanan Inti ISP (Ganti dengan produk QUICKNET)
const features = [
  {
    name: 'Internet Dedicated',
    description: 'Koneksi 1:1, stabil, dengan jaminan Service Level Agreement (SLA) hingga 99.9%. Ideal untuk korporat dan kantor pusat.',
    icon: RocketLaunchIcon, // Bisa diartikan Kecepatan Tinggi
  },
  {
    name: 'Internet Broadband',
    description: 'Akses internet *up to* kecepatan tertentu, ideal untuk UKM atau kantor cabang dengan anggaran terbatas.',
    icon: GlobeAltIcon, // Melambangkan Jangkauan Global/Internet
  },
  {
    name: 'Layanan Co-location & Server',
    description: 'Penyediaan tempat aman untuk server Anda di data center kami dengan lingkungan yang terkontrol dan konektivitas prima.',
    icon: CpuChipIcon, // Melambangkan Data Center
  },
  {
    name: 'Technical Support 24/7',
    description: 'Tim Network Operations Center (NOC) siap siaga 24 jam sehari, 7 hari seminggu, untuk memastikan uptime jaringan Anda.',
    icon: WrenchScrewdriverIcon, // Melambangkan Perbaikan/Dukungan
  },
];

export default function ServicePreview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Jaringan Cepat & Stabil</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solusi Konektivitas Utama dari QUICKNET</p>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.name} {...feature} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg transition duration-150">
            Konsultasi Kebutuhan Internet Anda
          </Link>
        </div>
      </div>
    </div>
  );
}
