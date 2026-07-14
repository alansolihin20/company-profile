"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

// Data Navigasi untuk Footer
const navigation = {
  solutions: [
    { name: "Dedicated Internet", href: "/services#dedicated" },
    { name: "Broadband Internet", href: "/services#broadband" },
    { name: "Co-location & Server", href: "/services#colocation" },
    { name: "Solusi Khusus B2B", href: "/services#b2b" },
  ],
  company: [
    { name: "Tentang QUICKNET", href: "/about" },
    { name: "Visi & Misi", href: "/about#mission" },
    { name: "Tim Kami", href: "/about#team" },
    { name: "SLA Jaringan", href: "/services#sla" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/legal#privacy" },
    { name: "Syarat & Ketentuan", href: "/legal#terms" },
  ],
};

export default function Footer() {
  return (
    // 🛠️ TEMA BARU: Menggunakan bg-[#030f33] agar serasi dengan bagian bawah landing page
    <motion.footer 
      className="bg-[#030f33] border-t border-slate-900/80 select-none" 
      aria-labelledby="footer-heading" 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* ================= KOLOM 1: LOGO & INFORMASI KONTAK ================= */}
          <div className="space-y-6">
            <Link href="/">
              <Image 
                className="h-8 mb-2 w-auto brightness-110" 
                src="/images/logo-footer.png" 
                alt="Quicknet Nusantara Teknologi Logo" 
                width={200} 
                height={32} 
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-light max-w-sm">
              Penyedia layanan Internet profesional dengan fokus pada stabilitas, kecepatan tinggi, dan layanan dukungan teknis 24/7.
            </p>
            <div className="space-y-3.5">
              {/* Email */}
              <div className="flex items-center text-xs sm:text-sm text-slate-300">
                <EnvelopeIcon className="h-4 w-4 mr-2.5 text-blue-400 flex-shrink-0" />
                <span className="font-light">Email: <span className="font-normal text-white">info@quicknet.id</span></span>
              </div>

              {/* Telepon */}
              <div className="flex items-center text-xs sm:text-sm text-slate-300">
                <PhoneIcon className="h-4 w-4 mr-2.5 text-blue-400 flex-shrink-0" />
                <span className="font-light">Phone: <span className="font-normal text-white">0851-1763-6502</span></span>
              </div>

              {/* Alamat (🛠️ Perbaikan Ukuran Ikon Menjadi Pas & Proporsional) */}
              <div className="flex items-start text-xs text-slate-400">
                <MapPinIcon className="h-4 w-4 mr-2.5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed text-slate-300">
                  Perumahan Bumi Mutiara Indah 5 (Blok B, No 08)<br />
                  Jl. Cibuntu satu, Kp. Pasir Tengah RT 07 RW 03 Jawa Barat,<br />
                  Kab. Sukabumi, Kec. Cicurug, Desa Kuta jaya
                </span>
              </div>
            </div>
          </div>

          {/* ================= KOLOM 2 & 3: NAVIGASI LINK ================= */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            
            {/* Sub-Kolom 1: Solusi */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Solusi Internet</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-xs sm:text-sm font-light text-slate-400 hover:text-blue-400 transition duration-150">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-Kolom 2 & 3: Perusahaan & Legal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Perusahaan</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-xs sm:text-sm font-light text-slate-400 hover:text-blue-400 transition duration-150">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-xs sm:text-sm font-light text-slate-400 hover:text-blue-400 transition duration-150">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* ================= BARIS BAWAH: COPYRIGHT ================= */}
        <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 font-light tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} PT QUICKNET NUSANTARA TEKNOLOGI. Hak Cipta Dilindungi.
          </p>
          <p className="text-[11px] text-slate-600 font-light hidden sm:block">
            Infrastruktur Berbasis Fiber Optic murni 100%
          </p>
        </div>

      </div>
    </motion.footer>
  );
}