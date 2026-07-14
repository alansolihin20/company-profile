"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa6";

export default function CTABanner() {
  return (
    // 🛠️ PERBAIKAN TEMA: Menggunakan warna dasar Deep Navy (#020b24) dengan gradasi ke (#030f33) agar menyatu
    <motion.div 
      className="relative overflow-hidden bg-gradient-to-r from-[#020b24] to-[#030f33] border-t border-b border-slate-900 py-16"
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Efek Glow Ambient Ringan di Background Banner */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
        
        {/* Teks Utama CTA */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl leading-tight">
            Siap Dapatkan Koneksi Internet Terbaik?
          </h2>
          <p className="mt-3 text-base text-slate-400 font-light">
            Hubungi kami sekarang dan dapatkan penawaran khusus dengan infrastruktur <span className="text-blue-400 font-medium">100% Fiber Optic</span> untuk kebutuhan Anda.
          </p>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-0 lg:flex-shrink-0">
          
          {/* Tombol 1: Hubungi Sales (WhatsApp / Kontak) */}
          <Link 
            href="https://wa.me/yournumber"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-[#0a46cb] px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-600 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="h-4 w-4 mr-2 text-green-400" aria-hidden="true" />
            Hubungi Sales
          </Link>

          {/* Tombol 2: Pelajari Layanan */}
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/40 backdrop-blur-sm px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition duration-150"
          >
            Pelajari Layanan
          </Link>
          
        </div>
      </div>
    </motion.div>
  );
}