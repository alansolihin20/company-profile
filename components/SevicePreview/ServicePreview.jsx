"use client"; // Wajib untuk menggunakan hooks dan framer-motion

import { motion } from "framer-motion";
import Link from "next/link";
// Contoh import Icon dari Heroicons
import { RocketLaunchIcon, GlobeAltIcon, WrenchScrewdriverIcon, CpuChipIcon } from "@heroicons/react/24/outline";

// Data Layanan Inti ISP (Ganti dengan produk QUICKNET)
const features = [
  {
    name: "Internet Dedicated",
    description: "Koneksi 1:1, stabil, dengan jaminan Service Level Agreement (SLA) hingga 99.9%. Ideal untuk korporat dan kantor pusat.",
    icon: RocketLaunchIcon, // Bisa diartikan Kecepatan Tinggi
  },
  {
    name: "Internet Broadband",
    description: "Akses internet *up to* kecepatan tertentu, ideal untuk UKM atau kantor cabang dengan anggaran terbatas.",
    icon: GlobeAltIcon, // Melambangkan Jangkauan Global/Internet
  },
  {
    name: "Layanan Co-location & Server",
    description: "Penyediaan tempat aman untuk server Anda di data center kami dengan lingkungan yang terkontrol dan konektivitas prima.",
    icon: CpuChipIcon, // Melambangkan Data Center
  },
  {
    name: "Technical Support 24/7",
    description: "Tim Network Operations Center (NOC) siap siaga 24 jam sehari, 7 hari seminggu, untuk memastikan uptime jaringan Anda.",
    icon: WrenchScrewdriverIcon, // Melambangkan Perbaikan/Dukungan
  },
];

export default function ServicePreview() {
  // Container variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda 0.15 detik antar kartu
      },
    },
  };

  // Item variants for each card (slide up effect)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section (Dianimasikan) */}
        <motion.div className="mx-auto max-w-2xl lg:text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
          <h2 className="text-base font-semibold leading-7 text-green-600">Jaringan Cepat & Stabil</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solusi Konektivitas Utama dari QUICKNET</p>
        </motion.div>

        {/* Feature Grid (Dianimasikan dengan Stagger) */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }} // Memicu saat 20% konten terlihat
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              // Menerapkan motion.div langsung di sekitar struktur kartu sesuai gambar
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]" // Styling kartu sesuai gambar
              >
                <div className="flex flex-col h-full">
                  {/* Ikon dengan background ungu/biru (sesuai gambar) */}
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tombol Aksi (Dianimasikan) */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg transition duration-150">
            Konsultasi Kebutuhan Internet Anda
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
