"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Data Area Layanan
const coveredCities = ["Bogor", "Sukabumi", "Jakarta", "Bandung", "Cikarang", "Karawang"];

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CoverageMapSection() {
  return (
    // 🛠️ TEMA BARU: Mengubah bg-white bawaan menjadi malam pekat #010614
    <div className="bg-[#010614] py-24 sm:py-32 border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* ================= KOLOM KIRI: PETA VISUAL ================= */}
          <motion.div className="lg:col-span-2" initial="hidden" whileInView="visible" variants={leftVariants} viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-6">Infrastruktur Jaringan Utama</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-800/80 p-1.5 bg-[#030e2f]/40 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5416.856682071173!2d106.76271899999999!3d-6.7645209999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDUnNTIuMyJTIDEwNsKwNDUnNDUuOCJF!5e1!3m2!1sid!2sid!4v1761320442302!5m2!1sid!2sid"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi QUICKNET"
                className="rounded-xl w-full h-full border-0 brightness-90 contrast-105"
              ></iframe>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-500 font-light">Hubungi tim sales kami untuk validasi ketersediaan layanan di alamat spesifik Anda.</p>
          </motion.div>

          {/* ================= KOLOM KANAN: DAFTAR KOTA & CTA ================= */}
          <motion.div className="lg:col-span-1" initial="hidden" whileInView="visible" variants={rightVariants} viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-6">Kota-Kota yang Terlayani</h2>

            {/* List Kota Terlayani (Gaya Glassmorphism) */}
            <motion.ul role="list" className="space-y-3" variants={listContainer}>
              {coveredCities.map((city) => (
                <motion.li 
                  key={city} 
                  className="flex items-center space-x-3 bg-[#030e2f]/40 border border-slate-800/60 p-3 rounded-xl shadow-md hover:border-slate-700/80 transition duration-150" 
                  variants={listItem}
                >
                  <svg className="h-5 w-5 flex-shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.886l-3.232 4.04-1.616-1.617a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l4-5a.75.75 0 00-.143-.883z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base font-bold text-slate-200">{city}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Kotak Informasi Area Tambahan */}
            <div className="mt-10 bg-[#051138]/20 border border-slate-900/60 p-5 rounded-2xl backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-bold text-white">Area Anda Belum Terdaftar?</h3>
              <p className="mt-2 text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Kami terus memperluas jangkauan. Kirimkan permintaan khusus kepada tim sales kami untuk survei lokasi secara instan.
              </p>
              <Link 
                href="/contact" 
                className="mt-5 inline-flex w-full sm:w-auto justify-center rounded-md bg-[#0a46cb] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-600 transition duration-150"
              >
                Cek Ketersediaan
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}