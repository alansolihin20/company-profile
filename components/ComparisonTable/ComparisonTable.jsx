"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Rasio Bandwidth",
    description: "Perbandingan kecepatan download dan upload yang dijamin.",
    dedicated: "1:1 (Simetris)",
    broadband: "Up to (Bersama)",
    dedicatedColor: "text-indigo-700",
    broadbandColor: "text-gray-900",
  },
  {
    name: "Service Level Agreement (SLA)",
    description: "Jaminan Uptime dan standar kualitas layanan.",
    dedicated: "99.9%",
    broadband: "95%",
    dedicatedColor: "text-indigo-700 font-extrabold",
    broadbandColor: "text-gray-900",
  },
  {
    name: "IP Publik",
    description: "Jenis alamat IP yang didapatkan.",
    dedicated: "Ya (Static Public IP)",
    broadband: "Opsional/Dynamic",
    dedicatedColor: "text-indigo-700",
    broadbandColor: "text-gray-900",
  },
  {
    name: "Dukungan Prioritas",
    description: "Prioritas penanganan masalah teknis.",
    dedicated: "Support Dedicated 24/7",
    broadband: "Standard 24/7",
    dedicatedColor: "text-indigo-700",
    broadbandColor: "text-gray-900",
  },
  {
    name: "Cocok Untuk",
    description: "Jenis bisnis yang paling diuntungkan dari layanan ini.",
    dedicated: "Data Center, Hosting, Korporat Besar",
    broadband: "UKM, Kantor Cabang, Kebutuhan Umum",
    dedicatedColor: "text-indigo-700",
    broadbandColor: "text-gray-900",
  },
];

// --- VARIANTS ANIMASI ---
const tableVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2, // Sedikit tunda agar muncul setelah hero
    },
  },
};

export default function ComparisonTable() {
  return (
    <div className="bg-white py-24 sm:py-32" id="comparison">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" initial="hidden" whileInView="visible" variants={tableVariants} viewport={{ once: true, amount: 0.1 }}>
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bandingkan Solusi QUICKNET</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">Pilih layanan yang paling sesuai dengan skala dan kebutuhan operasional bisnis Anda.</p>
        </div>

        {/* Tabel Perbandingan */}
        <div className="mt-16 flow-root">
          <div className="overflow-x-auto rounded-xl shadow-2xl ring-1 ring-gray-900/5">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 bg-gray-50 rounded-tl-xl">
                      Fitur
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-white bg-indigo-600">
                      Dedicated Internet
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-gray-900 bg-green-100 rounded-tr-xl">
                      {" "}
                      {/* Menggunakan warna hijau yang lebih lembut untuk Broadband */}
                      Broadband Internet
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {features.map((feature) => (
                    <tr key={feature.name} className="divide-x divide-gray-200 hover:bg-gray-50 transition duration-150">
                      <td className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {feature.name}
                        <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                      </td>
                      <td className={`whitespace-nowrap p-4 text-sm text-center font-semibold ${feature.dedicatedColor}`}>{feature.dedicated}</td>
                      <td className={`whitespace-nowrap p-4 text-sm text-center ${feature.broadbandColor}`}>{feature.broadband}</td>
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
