"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaWhatsapp } from "react-icons/fa6"; 
import { RiShieldCheckLine, RiGroupLine, RiGlobalLine, RiCustomerService2Line } from "react-icons/ri";

const textVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    // Latar belakang menggunakan warna gelap pekat agar serasi dengan gambar aslimu
    <div className="relative isolate bg-[#020619] lg:h-[calc(100vh-80px)] w-full flex flex-col justify-between overflow-y-auto lg:overflow-hidden select-none px-4 sm:px-6 lg:px-12 py-6 lg:py-4">
      {/* Efek Ambient Glow lembut di latar belakang */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[130px]" />

      {/* ================= AREA UTAMA (KONTEN TENGAH) ================= */}
      <div className="mx-auto max-w-7xl flex-grow flex items-center w-full min-h-0 py-4 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-center w-full">
          
          {/* SISI KIRI: TEKS, TOMBOL, & MINI BADGE */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
          >
            <motion.span className="text-[11px] font-bold tracking-widest text-amber-500 uppercase mb-2 block" variants={textVariants}>
              KONEKSI ANDAL, BISNIS BERKEMBANG
            </motion.span>

            <motion.h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.1] mb-4" variants={textVariants}>
              Internet Cepat.<br />
              Stabil.<br />
              <span>Tanpa Kompromi.</span>
            </motion.h1>

            <motion.p className="text-xs sm:text-sm leading-relaxed text-slate-300/90 font-normal max-w-xl" variants={textVariants}>
              PT Quicknet Nusantara Teknologi adalah penyedia layanan Internet Service Provider dengan infrastruktur Fiber Optic berkualitas tinggi, ASN sendiri, dan dukungan teknis profesional untuk rumah, bisnis, dan perusahaan.
            </motion.p>

            {/* Tombol Aksi */}
            <motion.div className="mt-6 flex items-center gap-4" variants={textVariants}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-[#0a46cb] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-600 transition duration-150"
              >
                <FaRocket className="w-3.5 h-3.5" /> Lihat Layanan
              </Link>
              <Link 
                href="https://wa.me/6285117636502"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-transparent px-6 py-3 text-xs font-bold text-white hover:bg-slate-800/40 transition duration-150"
              >
                <FaWhatsapp className="w-4 h-4 text-green-500" /> Hubungi Sales
              </Link>
            </motion.div>

            {/* MINI BADGE BOX */}
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 bg-[#051138]/50 backdrop-blur-md border border-slate-800/60 px-4 py-3 rounded-xl max-w-xl"
              variants={textVariants}
            >
              <div className="flex items-center gap-2">
                <img src="/images/komdigi.png" alt="Kominfo Digital Indonesia" className="w-10 h-6 object-contain" />
                <div className="flex flex-col"><span className="text-[8px] text-slate-400 leading-none">Berizin</span><span className="text-[10px] font-bold text-white">KOMDIGI</span></div>
              </div>
              <div className="w-px h-6 bg-slate-800/80" />
              <div className="flex items-center gap-2">
                <img src="/images/apjii.png" alt="APJII" className="w-10 h-6 object-contain" />
                <div className="flex flex-col"><span className="text-[8px] text-slate-400 leading-none">Anggota</span><span className="text-[10px] font-bold text-white">APJII</span></div>
              </div>
              <div className="w-px h-6 bg-slate-800/80" />
              <div className="flex items-center gap-2">
                <RiGlobalLine className="w-4 h-4 text-slate-300" />
                <div className="flex flex-col"><span className="text-[8px] text-slate-400 leading-none">ASN</span><span className="text-[10px] font-bold text-white">Sendiri</span></div>
              </div>
              <div className="w-px h-6 bg-slate-800/80" />
              <div className="flex items-center gap-1.5">
                <span className="px-1 py-0.5 text-[8px] font-extrabold text-[#020719] bg-slate-300 rounded-sm leading-none tracking-tighter">IPv6</span>
                <span className="text-[10px] font-bold text-white">Ready</span>
              </div>
              <div className="w-px h-6 bg-slate-800/80" />
              <div className="flex items-center gap-2">
                <RiCustomerService2Line className="w-4 h-4 text-slate-300" />
                <div className="flex flex-col"><span className="text-[8px] text-slate-400 leading-none">Support</span><span className="text-[10px] font-bold text-white">24/7</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= SISI KANAN: ILUSTRASI PETA JARINGAN ================= */}
          {/* 🛠️ PERBAIKAN: Ditambahkan teknik [mask-image] radial gradient agar tepian gambar melebur mulus */}
          <div className="hidden lg:flex lg:col-span-6 w-full h-full items-center justify-center relative min-h-0 pl-4">
            
            <div 
              className="relative w-full max-w-[540px] xl:max-w-[580px] aspect-[4/3] transform scale-110 xl:scale-115 transition-transform duration-300"
              style={{
                // Properti CSS Masking ini otomatis menyamarkan 4 sisi tepi gambar menjadi transparan (pudar)
                WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                maskImage: "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)"
              }}
            >
              <img 
                src="/images/banner.png" 
                alt="Quicknet Core Network Map" 
                className="w-full h-full object-contain pointer-events-none" 
              />
            </div>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM SIDE: FOOTER STATS BAR ================= */}
      <div className="w-full bg-[#030e2f]/60 backdrop-blur-md border border-slate-800/60 py-5 lg:py-6 flex-shrink-0 mt-auto rounded-2xl max-w-7xl mx-auto px-6 lg:px-8 mb-2 shadow-2xl">
        <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-x-4 text-center md:text-left">
          
          {/* Stat 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/15 text-blue-500 text-lg flex-shrink-0 border border-blue-500/10">📡</div>
            <div>
              <h3 className="text-lg lg:text-xl font-black text-white leading-tight">1+ ASN</h3>
              <p className="text-[11px] text-slate-400 font-normal tracking-wide mt-0.5">Autonomous System Number</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4 border-l-0 md:border-l border-slate-800/60">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/15 text-blue-500 text-lg flex-shrink-0 border border-blue-500/10">🎧</div>
            <div>
              <h3 className="text-lg lg:text-xl font-black text-white leading-tight">24/7 Support</h3>
              <p className="text-[11px] text-slate-400 font-normal tracking-wide mt-0.5">Teknisi Siap Membantu</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4 border-l-0 md:border-l border-slate-800/60">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/15 text-blue-500 text-lg flex-shrink-0 border border-blue-500/10">🛡️</div>
            <div>
              <h3 className="text-lg lg:text-xl font-black text-white leading-tight">99%</h3>
              <p className="text-[11px] text-slate-400 font-normal tracking-wide leading-tight mt-0.5">Network Uptime<br /><span className="text-[10px] text-slate-500">Jaringan Andal & Stabil</span></p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4 border-l-0 md:border-l border-slate-800/60">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600/15 text-blue-500 text-lg flex-shrink-0 border border-blue-500/10">🚀</div>
            <div>
              <h3 className="text-lg lg:text-xl font-black text-white leading-tight">100%</h3>
              <p className="text-[11px] text-slate-400 font-normal tracking-wide leading-tight mt-0.5">Fiber Optic<br /><span className="text-[10px] text-slate-500">Infrastruktur Full Fiber</span></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}