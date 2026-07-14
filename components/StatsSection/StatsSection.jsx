"use client"; // Wajib untuk menggunakan hooks dan framer-motion

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "SLA Uptime Jaringan", value: "99.9%" },
  { id: 2, name: "Klien Korporat Terlayani", value: "0+" }, // Contoh angka agar lebih meyakinkan
  { id: 3, name: "Panjang Backbone FO", value: "0+ Km" },
  { id: 4, name: "Dukungan Teknis NOC", value: "24/7/365" },
];

export default function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    // Mengubah bg-gray-900 standar menjadi Deep Navy Blue (#020b24) konsisten dengan tema gambar
    <div className="relative isolate bg-[#020b24] py-24 sm:py-32 border-t border-slate-900/60">
      
      {/* Efek Glow Aksen Samping */}
      <div className="absolute top-1/2 right-0 -z-10 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center">
              Dampak PT QUICKNET dalam Angka
            </h2>
            <p className="mt-4 text-base text-slate-400 text-center font-light max-w-xl mx-auto">
              Kepercayaan bisnis Anda dibangun di atas infrastruktur jaringan yang terukur, transparan, dan terjamin secara profesional.
            </p>
          </motion.div>

          {/* Grid Statistik Modern */}
          <motion.div
            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                variants={itemVariants} 
                // Mengubah kotak kaku menjadi gaya Glassmorphism dengan border tipis elegan
                className="flex flex-col justify-center bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Nilai Angka Utama (Berwarna Putih Cerah & Tebal) */}
                <p className="text-4xl lg:text-5xl font-black tracking-tight text-white">
                  {stat.value}
                </p>
                {/* Nama Parameter di bawah angka dengan aksen warna Cyan/Biru Muda cerah */}
                <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mt-3">
                  {stat.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}