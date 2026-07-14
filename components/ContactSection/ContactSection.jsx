"use client";

import { motion } from "framer-motion";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

// Data Kontak Cepat
const contactDetails = [
  { icon: BuildingOffice2Icon, label: "Alamat Kantor Pusat", value: "Perumahan Bumi Mutiara Indah 5 (Blok B, No 08) Jl. Cibuntu satu, Kp. Pasir Tengah RT 07 RW 03 Jawa Barat, Kab. Sukabumi, Kec. Cicurug, Desa Kuta jaya" },
  { icon: PhoneIcon, label: "Hubungi Sales (Jam Kerja)", value: "0851-1763-6502" },
  { icon: EnvelopeIcon, label: "Email Bisnis & Penawaran", value: "info@quicknet.id" },
  { icon: ClockIcon, label: "Technical Support (NOC)", value: "0851-1763-6502" },
];

export default function ContactSection() {
  const leftColVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightColVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
  };

  return (
    // 🛠️ TEMA BARU: Menggunakan bg-[#020b24] (Deep Navy) agar menyatu dengan halaman Home
    <div className="relative isolate bg-[#020b24] overflow-hidden border-t border-slate-900">
      
      {/* Efek Ambient Glow Halus */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        
        {/* ================= KOLOM KIRI: INFORMASI KONTAK ================= */}
        <motion.div 
          className="relative px-6 pb-12 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32" 
          initial="hidden" 
          whileInView="visible" 
          variants={leftColVariants} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Hubungi PT QUICKNET <br className="hidden sm:block" />
              Nusantara Teknologi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 font-light">
              Tim kami siap membantu Anda dengan konsultasi infrastruktur, penawaran harga, atau dukungan teknis jaringan 24/7.
            </p>

            <dl className="mt-10 space-y-6 text-sm leading-6 text-slate-300">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-x-4 bg-[#030f33]/40 border border-slate-900 p-4 rounded-xl backdrop-blur-sm">
                  <dt className="flex-none">
                    <span className="sr-only">{detail.label}</span>
                    <detail.icon className="h-6 w-5 text-blue-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <span className="font-bold text-white block mb-0.5">{detail.label}</span>
                    <span className="font-light text-slate-300">{detail.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* ================= KOLOM KANAN: FORMULIR KONTAK ================= */}
        <motion.form 
          action="#" 
          method="POST" 
          className="px-6 pb-24 pt-12 sm:pb-32 lg:px-8 lg:py-32" 
          initial="hidden" 
          whileInView="visible" 
          variants={rightColVariants} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg bg-[#030f33]/60 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-bold tracking-tight text-white mb-6">Formulir Permintaan Penawaran</h3>

            {/* Field Input (Bergaya Dark Mode Minimalis) */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="company-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Nama Perusahaan
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="organization"
                    className="block w-full rounded-md border-slate-800 bg-[#020b24]/80 px-3.5 py-2 text-white text-sm shadow-sm ring-1 ring-inset ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-blue-500 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="full-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Nama Kontak
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-slate-800 bg-[#020b24]/80 px-3.5 py-2 text-white text-sm shadow-sm ring-1 ring-inset ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-blue-500 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email Kantor
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-slate-800 bg-[#020b24]/80 px-3.5 py-2 text-white text-sm shadow-sm ring-1 ring-inset ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-blue-500 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Nomor Telepon (WA Aktif)
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-slate-800 bg-[#020b24]/80 px-3.5 py-2 text-white text-sm shadow-sm ring-1 ring-inset ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-blue-500 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Pesan & Kebutuhan Internet
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-slate-800 bg-[#020b24]/80 px-3.5 py-2 text-white text-sm shadow-sm ring-1 ring-inset ring-slate-800 focus:ring-2 focus:ring-inset focus:ring-blue-500 placeholder:text-slate-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            {/* Tombol Kirim bertema Biru Apple */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-[#0a46cb] px-5 py-2.5 text-center text-xs font-bold text-white shadow-md hover:bg-blue-600 transition duration-150 transform hover:-translate-y-0.5"
              >
                Kirim Permintaan Penawaran
              </button>
            </div>
          </div>
        </motion.form>

      </div>
    </div>
  );
}