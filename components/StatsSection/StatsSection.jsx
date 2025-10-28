"use client"; // Wajib untuk menggunakan hooks dan framer-motion

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "SLA Uptime Jaringan", value: "99.9%" },
  { id: 2, name: "Klien Korporat Terlayani", value: "0+" },
  { id: 3, name: "Total Panjang Jaringan FO (Km)", value: "0+" },
  { id: 4, name: "Tahun Pengalaman di Industri", value: "0+" },
];

export default function StatsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Header (Dianimasikan) */}
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Dampak PT QUICKNET dalam Angka</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 text-center">Kepercayaan bisnis Anda berawal dari infrastruktur yang terukur dan terjamin.</p>
          </motion.div>

          {/* Grid Statistik (Dianimasikan dengan Stagger) */}
          <motion.div
            className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }} // Memicu saat 20% konten terlihat
          >
            {stats.map((stat) => (
              <motion.div key={stat.id} variants={itemVariants} className="flex flex-col bg-gray-800/50 p-8">
                <p className="order-first text-base font-semibold text-green-400">{stat.name}</p>
                <p className="text-5xl font-bold tracking-tight text-white mt-2">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
