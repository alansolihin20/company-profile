"use client"; // Wajib untuk menggunakan hooks dan framer-motion

import { motion } from "framer-motion";
import Link from "next/link";
import { LuRocket, LuGlobe, LuServer, LuShieldCheck } from "react-icons/lu"; // Menggunakan Lucide icons agar serasi dengan Home

// Data Layanan Inti ISP QUICKNET (Diselaraskan dengan tema gambar)
const features = [
  {
    name: "Internet Dedicated",
    description: "Koneksi simetris 1:1, super stabil dengan jaminan SLA hingga 99.9%. Sangat ideal untuk korporat, data center, dan operasional kantor pusat.",
    icon: LuRocket, 
    badge: "Populer"
  },
  {
    name: "Internet Broadband",
    description: "Akses internet berkecepatan tinggi yang reliabel. Solusi efisien dan hemat biaya yang dirancang khusus untuk UKM dan kantor cabang.",
    icon: LuGlobe,
  },
  {
    name: "Data Center & Co-location",
    description: "Infrastruktur penempatan server yang aman dengan pasokan daya ganda, pendingin optimal, dan interkoneksi langsung ke core network.",
    icon: LuServer,
  },
  {
    name: "Managed Network & Support",
    description: "Dukungan penuh dari tim Network Operations Center (NOC) profesional yang siap siaga 24/7 memantau dan menjaga aset jaringan Anda.",
    icon: LuShieldCheck,
  },
];

export default function ServicePreview() {
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Mengubah background menjadi Deep Navy Blue (#020b24) mengikuti tema gambar
    <div className="relative isolate bg-[#020b24] py-24 sm:py-32 border-t border-slate-900">
      
      {/* Efek Cahaya / Glow Ambient di Background */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center" 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xs lg:text-sm font-semibold tracking-widest text-amber-500 uppercase">
            Jaringan Cepat & Stabil
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Solusi Konektivitas Utama dari QUICKNET
          </p>
          <p className="mt-4 text-base text-slate-400 font-light">
            Infrastruktur handal yang dirancang untuk mempercepat pertumbuhan digital bisnis Anda tanpa kendala hambatan jaringan.
          </p>
        </motion.div>

        {/* Feature Grid (Gaya Glassmorphism Gelap) */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                // Mengubah kartu menjadi gelap transparan (Glassmorphism) dengan border tipis
                className="relative p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/80 hover:border-blue-500/50 shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {feature.badge && (
                  <span className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-500/20">
                    {feature.badge}
                  </span>
                )}

                <div className="flex flex-col h-full">
                  {/* Ikon dengan warna biru terang khas Quicknet */}
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-[#0a46cb] group-hover:text-white group-hover:border-[#0a46cb] transition-all duration-300">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tombol Aksi Bawah */}
        <motion.div 
          className="mt-16 text-center" 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold text-white bg-[#0a46cb] hover:bg-blue-600 shadow-lg shadow-blue-950/50 transition-all duration-150 transform hover:-translate-y-0.5"
          >
            Konsultasi Kebutuhan Internet Anda
          </Link>
        </motion.div>
      </div>
    </div>
  );
}