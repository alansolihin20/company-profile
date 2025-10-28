"use client"; // Pastikan komponen ini adalah Client Component karena menggunakan hooks/interaksi.

import Link from "next/link";
import { motion } from "framer-motion";

// Konfigurasi animasi untuk elemen text
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Konfigurasi animasi untuk ilustrasi/gambar
const imageVariants = {
  initial: { opacity: 0, scale: 0.95, rotateY: 10 },
  animate: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 } },
};

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        {/* Konten Text (Dianimasikan) */}
        <motion.div
          className="lg:max-w-lg lg:flex-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Teks akan muncul satu per satu
              },
            },
          }}
        >
          {/* Judul Utama */}
          <motion.h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" variants={textVariants}>
            Koneksi Internet Andal, Mendorong Produktivitas Bisnis Anda
          </motion.h1>

          {/* Deskripsi */}
          <motion.p className="mt-6 text-lg leading-8 text-gray-300" variants={textVariants}>
            PT QUICKNET NUSANTARA TEKNOLOGI menyediakan infrastruktur Fiber Optic yang stabil dan layanan dedicated/broadband dengan jaminan SLA tinggi.
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div className="mt-10 flex items-center gap-x-6" variants={textVariants}>
            <Link
              href="/services"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Lihat Solusi Internet
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-green-400 transition duration-300">
              Hubungi Tim Sales <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Gambar Ilustrasi/Demo (Dianimasikan) */}
        <motion.div
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
          initial="initial"
          animate="animate"
          variants={imageVariants}
          // Efek Hover ringan pada ilustrasi
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            {/* Ganti dengan ilustrasi jaringan, peta koneksi, atau server */}
            <img src="/images/isp.jpg" alt="Ilustrasi Jaringan Fiber Optic" className="w-full object-cover aspect-[16/10]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
