// components/DedicatedSection.js

import { ShieldCheckIcon, SignalIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const dedicatedFeatures = [
  // ... (dedicatedFeatures tetap)
  {
    name: 'Jaminan SLA 99.9%',
    description: 'Kami menjamin tingkat uptime jaringan tertinggi untuk kelangsungan operasional bisnis Anda.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Rasio 1:1 Simetris',
    description: 'Kecepatan upload dan download yang sama dan konsisten, vital untuk VPN, VoIP, dan transfer data besar.',
    icon: SignalIcon,
  },
  {
    name: 'Static Public IP',
    description: 'Dapatkan alamat IP publik statis untuk keamanan server, remote access, dan hosting aplikasi internal.',
    icon: LockClosedIcon,
  },
];

export default function DedicatedSection() {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32" id="dedicated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Visual Kiri - BAGIAN YANG DIPERBAIKI */}
          <div className="lg:pr-4 lg:pt-4">
            <Image
              src="/images/dedicated.png"
              alt="Ilustrasi Koneksi Dedicated Fiber Optic"
              // === CLASS YANG DIREVISI ===
              // Mengganti lebar mutlak (w-[48rem]) dengan lebar relatif (w-full, max-w-full)
              // dan menambahkan h-auto untuk menjaga rasio aspek (aspect ratio).
              className="w-full max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={2432}
              height={1442}
            />
          </div>

          {/* Konten Teks Kanan - Tidak Berubah */}
          <div className="lg:pl-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Layanan Premium</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dedicated Internet Access (DIA)</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Solusi konektivitas tak terbagi yang dirancang khusus untuk kebutuhan korporat yang menuntut stabilitas, bandwidth yang terjamin, dan *latency* minimal.</p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {dedicatedFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
