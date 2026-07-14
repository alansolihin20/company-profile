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

export default function ServicesHero() {
  return (
    <motion.div 
      className="relative isolate bg-[#010614] pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-slate-900" 
      initial="hidden" 
      whileInView="visible" 
      variants={heroVariants} 
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Efek Ambient Glow Elegan di Belakang Teks */}
      <div className="absolute top-0 left-10 -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 🛠️ PERBAIKAN: Memastikan text-center hanya di mobile, dan lg:text-left mengunci rata kiri murni */}
        <div className="max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-500">
            Pilihan Terbaik untuk Bisnis Anda
          </p>
          
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl leading-tight">
            Solusi Konektivitas Terdepan
          </h1>
          
          {/* 🛠️ PERBAIKAN: Mengganti mx-auto menjadi lg:mx-0 agar tidak memaksa ke tengah di desktop */}
          <p className="mt-6 text-base sm:text-lg sm:leading-relaxed text-slate-400 font-light max-w-2xl lg:mx-0">
            QUICKNET menyediakan dua produk utama—Dedicated dan Broadband—didukung oleh infrastruktur fiber optik murni dengan jaminan kualitas dan <span className="text-blue-400 font-normal">support 24 jam</span>.
          </p>
          
        </div>
      </div>
    </motion.div>
  );
}