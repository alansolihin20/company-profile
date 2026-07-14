"use client";

import { motion } from "framer-motion";

const features = [
  {
    name: "Rasio Bandwidth",
    description: "Perbandingan kecepatan download dan upload yang dijamin.",
    dedicated: "1:1 (Simetris)",
    broadband: "Up to (Bersama)",
    dedicatedColor: "text-amber-400 font-bold",
    broadbandColor: "text-slate-300",
  },
  {
    name: "Service Level Agreement (SLA)",
    description: "Jaminan Uptime dan standar kualitas layanan.",
    dedicated: "99.9%",
    broadband: "95%",
    dedicatedColor: "text-amber-400 font-black text-base",
    broadbandColor: "text-slate-300",
  },
  {
    name: "IP Publik",
    description: "Jenis alamat IP yang didapatkan.",
    dedicated: "Ya (Static Public IP)",
    broadband: "Opsional / Dynamic",
    dedicatedColor: "text-amber-400 font-bold",
    broadbandColor: "text-slate-300",
  },
  {
    name: "Dukungan Prioritas",
    description: "Prioritas penanganan masalah teknis.",
    dedicated: "Support Dedicated 24/7",
    broadband: "Standard 24/7",
    dedicatedColor: "text-amber-400 font-bold",
    broadbandColor: "text-slate-300",
  },
  {
    name: "Cocok Untuk",
    description: "Jenis bisnis yang paling diuntungkan dari layanan ini.",
    dedicated: "Data Center, Hosting, Korporat Besar",
    broadband: "UKM, Kantor Cabang, Kebutuhan Umum",
    dedicatedColor: "text-amber-400 font-bold",
    broadbandColor: "text-slate-300",
  },
];

const tableVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ComparisonTable() {
  return (
    // 🛠️ TEMA BARU: Transisi tabel ke bg-[#010614] murni
    <div className="bg-[#010614] py-24 sm:py-32 border-b border-slate-900" id="comparison">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" initial="hidden" whileInView="visible" variants={tableVariants} viewport={{ once: true, amount: 0.1 }}>
        
        {/* Judul & Subjudul */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Bandingkan Solusi QUICKNET
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-light max-w-2xl">
            Pilih layanan yang paling sesuai dengan skala dan kebutuhan operasional bisnis Anda.
          </p>
        </div>

        {/* Tabel Perbandingan Modern */}
        <div className="mt-16 flow-root">
          <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-[#030e2f]/20 shadow-2xl backdrop-blur-md">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-slate-800/80">
                <thead>
                  <tr className="divide-x divide-slate-800/80">
                    <th scope="col" className="py-4 pl-4 pr-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400 sm:pl-6 bg-[#041037]/60">
                      Fitur Utama
                    </th>
                    <th scope="col" className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#0a46cb]/40">
                      Dedicated Internet
                    </th>
                    <th scope="col" className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-300 bg-[#041037]/40">
                      Broadband Internet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {features.map((feature) => (
                    <tr key={feature.name} className="divide-x divide-slate-800/60 hover:bg-[#051442]/30 transition duration-150">
                      <td className="py-4 pl-4 pr-4 text-xs sm:text-sm text-white font-bold sm:pl-6">
                        {feature.name}
                        <p className="text-xs text-slate-500 font-light mt-1 normal-case tracking-normal">{feature.description}</p>
                      </td>
                      <td className={`p-4 text-xs sm:text-sm text-center ${feature.dedicatedColor}`}>{feature.dedicated}</td>
                      <td className={`p-4 text-xs sm:text-sm text-center ${feature.broadbandColor}`}>{feature.broadband}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}