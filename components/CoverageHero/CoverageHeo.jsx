"use client";

import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CoverageHero() {
  return (
    // 🛠️ TEMA BARU: Menggunakan bg-[#010614] dengan ambient glow halus di atasnya
    <motion.div
      className="relative isolate bg-[#010614] pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-slate-900"
      initial="hidden"
      whileInView="visible"
      variants={heroVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Efek Ambient Glow Lembut */}
      <div className="absolute top-0 left-10 -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 🛠️ DISESUAIKAN: Mengunci teks agar rata kiri di desktop dan tengah di mobile */}
        <div className="max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-500">Jaringan Fiber Optic Kami</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl leading-tight">Jangkauan Area Layanan</h1>
          <p className="mt-6 text-base sm:text-lg sm:leading-relaxed text-slate-400 font-light max-w-2xl lg:mx-0">
            QUICKNET berkomitmen menghadirkan koneksi stabil di pusat bisnis utama di Indonesia. Cek ketersediaan layanan di area Anda.
          </p>
        </div>
      </div>
    </motion.div>
  );
}