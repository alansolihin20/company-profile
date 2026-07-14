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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function BroadbandSection() {
  return (
    // 🛠️ TEMA BARU: Mengubah dari bg-white menjadi bg-[#010614] agar mulus bergantian
    <div className="overflow-hidden bg-[#010614] py-24 sm:py-32 border-b border-slate-900" id="broadband">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* Konten Teks Kiri */}
          <motion.div className="lg:pr-4" variants={leftColumnVariants}>
            <div className="lg:max-w-lg">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-400">Solusi Efisien</h2>
              <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Broadband Internet</p>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-400 font-light">
                Pilihan terjangkau dengan kecepatan tinggi dan konsisten. Layanan ini adalah solusi terbaik untuk kantor yang mencari keseimbangan antara performa dan anggaran operasional.
              </p>

              {/* Daftar Fitur */}
              <motion.dl className="mt-10 max-w-xl space-y-6 lg:max-w-none" variants={containerVariants}>
                {broadbandFeatures.map((feature) => (
                  <motion.div key={feature.name} className="relative pl-10" variants={featureItemVariants}>
                    <dt className="text-sm sm:text-base font-bold text-white block mb-0.5">
                      <feature.icon className="absolute left-0 top-0.5 h-6 w-6 text-amber-500" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-400 font-light">{feature.description}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
          </motion.div>

          {/* Visual Kanan */}
          <motion.div className="relative lg:pl-4" variants={rightColumnVariants}>
            <Image
              src="/images/broadband.png"
              alt="Ilustrasi Kantor Broadband"
              className="w-full max-w-full h-auto rounded-2xl shadow-2xl border border-slate-800/60 brightness-90 contrast-105 lg:ml-0"
              width={2432}
              height={1442}
            />
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}