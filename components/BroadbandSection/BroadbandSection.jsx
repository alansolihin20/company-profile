// components/BroadbandSection.js

import { SparklesIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const broadbandFeatures = [
  {
    name: 'Harga Kompetitif',
    description: 'Akses internet cepat dengan biaya yang efisien, ideal untuk menekan pengeluaran operasional.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Instalasi Cepat',
    description: 'Proses aktivasi yang lebih cepat untuk segera memulai aktivitas online Anda.',
    icon: SparklesIcon,
  },
  {
    name: 'Ideal untuk Tim Kecil',
    description: 'Dirancang untuk menunjang produktivitas kantor cabang, UKM, atau tim yang membutuhkan koneksi harian.',
    icon: UsersIcon,
  },
];

// components/BroadbandSection.js
// ... (bagian import dan broadbandFeatures tidak berubah)

export default function BroadbandSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="broadband">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Konten Teks Kiri (Layout Dibalik) - Tidak Berubah */}
          <div className="lg:pr-8">
            {/* ... (Konten teks di sini) ... */}
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Solusi Efisien</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Broadband Internet</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Pilihan terjangkau dengan kecepatan tinggi dan konsisten. Layanan ini adalah solusi terbaik untuk kantor yang mencari keseimbangan antara performa dan biaya.</p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {broadbandFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Visual Kanan - BAGIAN YANG DIPERBAIKI */}
          <div className="relative lg:pl-4 lg:pt-4">
            <Image
              src="/images/broadband.png"
              alt="Ilustrasi Kantor Broadband"
              // === CLASS YANG DIREVISI ===
              // Hapus: w-[48rem] dan sm:w-[57rem] karena dapat membuat gambar melebihi container
              // Tambahkan: w-full (lebar 100% dari container) dan h-auto (tinggi otomatis)
              // Pastikan max-w-full (maksimum lebar 100%) untuk mencegah overflow di layar yang sangat kecil
              className="max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:ml-0"
              width={2432}
              height={1442}
              // Pastikan `layout='responsive'` (opsional, tetapi dapat membantu)
              // Catatan: Jika Anda menggunakan Next.js Image Component versi terbaru,
              // properti `width` dan `height` digabungkan dengan `sizes`
              // dan penggunaan `className` dengan `max-w-full` sudah cukup.
            />
          </div>
        </div>
      </div>
    </div>
  );
}
