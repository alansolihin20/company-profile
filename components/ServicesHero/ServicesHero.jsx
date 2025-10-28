"use client";

import { motion } from "framer-motion";

const heroVariants = {
  // Posisi awal: sedikit ke bawah dan transparan
  hidden: { opacity: 0, y: 30 },
  // Posisi akhir: kembali ke posisi normal dan terlihat
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Durasi 0.8 detik
      ease: "easeOut",
    },
  },
};

export default function ServicesHero() {
  return (
    <motion.div className="bg-gray-900 pt-24 pb-16 sm:pt-32 sm:pb-24" initial="hidden" whileInView="visible" variants={heroVariants} viewport={{ once: true, amount: 0.2 }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          {" "}
          {/* Ditambahkan text-center/left responsif */}
          <p className="text-base font-semibold leading-7 text-green-400">Pilihan Terbaik untuk Bisnis Anda</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Solusi Konektivitas Terdepan</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">QUICKNET menyediakan dua produk utama—Dedicated dan Broadband—didukung oleh infrastruktur fiber optik murni dengan jaminan kualitas dan *support* 24 jam.</p>
        </div>
      </div>
    </motion.div>
  );
}
