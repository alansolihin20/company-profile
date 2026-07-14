"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheckIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function AboutHero() {
  // Animasi untuk kolom kiri (Teks)
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animasi untuk kolom kanan (Gambar)
  const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
  };

  return (
    // 🛠️ TEMA BARU: Menggunakan bg-[#010614] agar menyatu sempurna dengan skema warna utama
    <div className="relative isolate overflow-hidden bg-[#010614] py-24 sm:py-32 border-b border-slate-900">
      
      {/* Efek Ambient Glow Halus */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* ================= KONTEN TEKS (SISI KIRI) ================= */}
          <motion.div 
            className="lg:pr-4" 
            initial="hidden" 
            whileInView="visible" 
            variants={textVariants} 
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="lg:max-w-lg">
              {/* Mengubah aksen hijau ke Amber emas agar senada dengan badge depan */}
              <p className="text-xs font-bold tracking-widest text-amber-500 uppercase">Sejak 2025</p>
              
              <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl leading-tight">
                Tentang PT QUICKNET <br />
                Nusantara Teknologi
              </h1>
              
              <p className="mt-6 text-base leading-relaxed text-slate-300 font-light">
                Kami adalah ISP terdepan yang didirikan dengan satu tujuan: mengatasi tantangan konektivitas bisnis di Indonesia dengan infrastruktur yang andal dan layanan dukungan yang proaktif.
              </p>
              
              <dl className="mt-10 max-w-xl space-y-6 text-sm leading-6 text-slate-300 lg:max-w-none">
                {/* Fitur 1 */}
                <div className="relative pl-12 bg-[#051138]/30 border border-slate-900 p-4 rounded-xl backdrop-blur-sm">
                  <dt className="inline font-bold text-white">
                    <ShieldCheckIcon className="absolute left-4 top-4 h-5 w-5 text-blue-400" aria-hidden="true" />
                    Fokus B2B.
                  </dt>{" "}
                  <dd className="inline text-slate-400 font-light">
                    Dedikasi penuh kami pada segmen korporat menjamin kualitas layanan yang Anda butuhkan untuk operasional kritikal.
                  </dd>
                </div>

                {/* Fitur 2 */}
                <div className="relative pl-12 bg-[#051138]/30 border border-slate-900 p-4 rounded-xl backdrop-blur-sm">
                  <dt className="inline font-bold text-white">
                    <CpuChipIcon className="absolute left-4 top-4 h-5 w-5 text-blue-400" aria-hidden="true" />
                    Infrastruktur Fiber Optic.
                  </dt>{" "}
                  <dd className="inline text-slate-400 font-light">
                    Jaringan kami dibangun di atas teknologi Fiber Optic terkini untuk kecepatan dan stabilitas maksimum di setiap titik.
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* ================= VISUAL / GAMBAR (SISI KANAN) ================= */}
          <motion.div 
            className="relative flex justify-center lg:justify-end" 
            initial="hidden" 
            whileInView="visible" 
            variants={imageVariants} 
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Glow di belakang gambar kantor */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-xl blur-xl" />
            
            <div className="relative rounded-2xl border border-slate-800/80 p-2 bg-[#030e2f]/40 backdrop-blur-md shadow-2xl overflow-hidden max-w-[540px] xl:max-w-[580px]">
              <Image
                src="/images/kantor.jpg"
                alt="Gedung Kantor Quicknet"
                className="w-full h-auto rounded-xl object-cover brightness-90 contrast-105"
                width={2432}
                height={1442}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}