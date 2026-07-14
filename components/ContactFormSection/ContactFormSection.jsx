"use client";

import { motion } from "framer-motion";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

// Data Kontak Perusahaan
const contactInfo = [
  {
    name: "Alamat Kantor Pusat",
    description: "Perumahan Bumi Mutiara Indah 5 (Blok B, No 08) Jl. Cibuntu satu, Kp. Pasir Tengah RT 07 RW 03 Jawa Barat, Kab. Sukabumi, Kec. Cicurug, Desa Kuta jaya",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Email Dukungan & Sales",
    description: "info@quicknet.id",
    icon: EnvelopeIcon,
  },
  {
    name: "Telepon & WhatsApp",
    description: "0851-1763-6502",
    icon: PhoneIcon,
  },
];

export default function ContactFormSection() {
  // Animasi untuk Kolom Kiri (Info dan Peta)
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animasi untuk Kolom Kanan (Formulir)
  const rightColumnVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
  };

  return (
    // 🛠️ TEMA BARU: Latar belakang menggunakan #010614 agar menyatu sempurna
    <div className="relative isolate bg-[#010614] overflow-hidden border-b border-slate-900">
      
      {/* Ambient Glow Latar Belakang */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        
        {/* ================= KOLOM KIRI: INFO KONTAK & MAPS ================= */}
        <motion.div 
          className="relative px-6 pb-16 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32" 
          initial="hidden" 
          whileInView="visible" 
          variants={leftColumnVariants} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Minta Penawaran Terbaik
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-light">
              Silakan isi formulir di bawah ini dan tim sales dedicated kami akan segera menghubungi Anda dalam waktu 1x24 jam.
            </p>

            {/* Informasi Kontak */}
            <dl className="mt-10 space-y-6 text-sm sm:text-base text-slate-300">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex gap-x-4 bg-[#051138]/20 border border-slate-900/60 p-4 rounded-xl backdrop-blur-sm">
                  <dt className="flex-none">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="font-bold text-white text-sm sm:text-base mb-0.5">{item.name}</p>
                    <span className="text-xs sm:text-sm text-slate-400 font-light">{item.description}</span>
                  </dd>
                </div>
              ))}
            </dl>

            {/* Peta Lokasi */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-white mb-3">Lokasi Kami</h3>
              <div className="overflow-hidden rounded-2xl border border-slate-800/80 p-1.5 bg-[#030e2f]/40 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5416.856682071173!2d106.76271899999999!3d-6.7645209999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDUnNTIuMyJTIDEwNsKwNDUnNDUuOCJF!5e1!3m2!1sid!2sid!4v1761320442302!5m2!1sid!2sid"
                  width="100%"
                  height="260"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi QUICKNET"
                  className="rounded-xl w-full h-full border-0 brightness-90 contrast-105"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= KOLOM KANAN: FORMULIR DARK THEME ================= */}
        <motion.form 
          action="#" 
          method="POST" 
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32" 
          initial="hidden" 
          whileInView="visible" 
          variants={rightColumnVariants} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg bg-[#030e2f]/30 border border-slate-800/60 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              
              {/* Nama Perusahaan */}
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Nama Perusahaan <span className="text-amber-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    required
                    className="block w-full rounded-lg bg-[#010614]/60 border border-slate-800 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                    placeholder="PT. Sinar Jaya Abadi"
                  />
                </div>
              </div>

              {/* Nama PIC */}
              <div>
                <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Nama PIC <span className="text-amber-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-lg bg-[#010614]/60 border border-slate-800 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                    placeholder="Budi Santoso"
                  />
                </div>
              </div>

              {/* Jabatan */}
              <div>
                <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Jabatan
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-lg bg-[#010614]/60 border border-slate-800 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                    placeholder="IT Manager"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Email <span className="text-amber-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-lg bg-[#010614]/60 border border-slate-800 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                    placeholder="budi.santoso@perusahaan.com"
                  />
                </div>
              </div>

              {/* Telepon */}
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Nomor Telepon / WhatsApp <span className="text-amber-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-lg bg-[#010614]/60 border border-slate-800 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                    placeholder="Contoh: 081234567890"
                  />
                </div>
              </div>

              {/* Layanan yang diminati */}
              <div className="sm:col-span-2">
                <label htmlFor="service-type" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Layanan yang Diminati
                </label>
                <div className="mt-2">
                  <select
                    id="service-type"
                    name="service-type"
                    className="block w-full rounded-lg bg-[#010614] border border-slate-800 px-4 py-2.5 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                  >
                    <option value="" className="bg-[#010614]">Pilih salah satu...</option>
                    <option value="dedicated" className="bg-[#010614]">Dedicated Internet Access (DIA)</option>
                    <option value="broadband" className="bg-[#010614]">Broadband Internet</option>
                    <option value="consultation" className="bg-[#010614]">Konsultasi Jaringan</option>
                    <option value="other" className="bg-[#010614]">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Pesan */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Pesan / Detail Kebutuhan
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg bg-[#010614]/60 border border-slate-800 px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition duration-150"
                    placeholder="Sebutkan lokasi pemasangan dan perkiraan kebutuhan bandwidth (misal: 100 Mbps Dedicated)."
                  />
                </div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-[#0a46cb] px-5 py-3 text-center text-xs font-bold text-white shadow-md hover:bg-blue-600 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
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