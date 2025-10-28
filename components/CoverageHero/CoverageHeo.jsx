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

export default function CoverageHero() {
  return (
    <motion.div
      className="bg-gray-50 pt-24 pb-16 sm:pt-32 sm:pb-24"
      initial="hidden"
      whileInView="visible"
      variants={heroVariants}
      viewport={{ once: true, amount: 0.2 }} // Memicu ketika 20% konten terlihat
    >
      <div className="mx-auto max-w-7xl px-6 bg-gray lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">Jaringan Fiber Optic Kami</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Jangkauan Area Layanan</h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">QUICKNET berkomitmen menghadirkan koneksi stabil di pusat bisnis utama di Indonesia. Cek ketersediaan layanan di area Anda.</p>
        </div>
      </div>
    </motion.div>
  );
}
