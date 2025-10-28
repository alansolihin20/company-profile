"use client";

import { motion } from "framer-motion";
import { SparklesIcon, UsersIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const broadbandFeatures = [
  {
    name: "Harga Kompetitif",
    description: "Akses internet cepat dengan biaya yang efisien, ideal untuk menekan pengeluaran operasional.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Instalasi Cepat",
    description: "Proses aktivasi yang lebih cepat untuk segera memulai aktivitas online Anda.",
    icon: SparklesIcon,
  },
  {
    name: "Ideal untuk Tim Kecil",
    description: "Dirancang untuk menunjang produktivitas kantor cabang, UKM, atau tim yang membutuhkan koneksi harian.",
    icon: UsersIcon,
  },
];

// --- VARIANTS ANIMASI (Diadaptasi dari DedicatedSection) ---
// Note: Digunakan untuk membalik arah animasi (Kiri Slide dari Kiri, Kanan Slide dari Kanan)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar item anak
      delayChildren: 0.5, // Tunda mulai animasi anak setelah parent muncul
    },
  },
};

// Kolom Kiri (Teks) akan slide dari Kiri
const leftColumnVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Kolom Kanan (Visual) akan slide dari Kanan
const rightColumnVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BroadbandSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="broadband">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Konten Teks Kiri - Animasi Slide dari Kiri */}
          <motion.div className="lg:pr-8" variants={leftColumnVariants}>
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Solusi Efisien</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Broadband Internet</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Pilihan terjangkau dengan kecepatan tinggi dan konsisten. Layanan ini adalah solusi terbaik untuk kantor yang mencari keseimbangan antara performa dan biaya.</p>

              {/* Daftar Fitur (Staggered) */}
              <motion.dl
                className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                variants={containerVariants} // Menggunakan containerVariants untuk stagger
              >
                {broadbandFeatures.map((feature) => (
                  <motion.div
                    key={feature.name}
                    className="relative pl-9"
                    variants={featureItemVariants} // Menggunakan itemVariants untuk setiap fitur
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
          </motion.div>

          {/* Visual Kanan - Animasi Slide dari Kanan */}
          <motion.div className="relative lg:pl-4 lg:pt-4" variants={rightColumnVariants}>
            <Image
              src="/images/broadband.png"
              alt="Ilustrasi Kantor Broadband"
              // Menggunakan class responsif penuh untuk lebar gambar
              className="w-full max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:ml-0"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
