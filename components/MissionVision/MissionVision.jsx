"use client";

import { motion } from "framer-motion";

// Data Visi, Misi, dan Nilai Inti
const values = [
  {
    name: "Reliabilitas (SLA Tinggi)",
    description: "Kami menjamin konektivitas yang konsisten dengan komitmen Service Level Agreement (SLA) tertinggi di industri.",
  },
  {
    name: "Customer-Centric",
    description: "Fokus pada kebutuhan klien, memastikan setiap solusi disesuaikan untuk mencapai efisiensi bisnis maksimal.",
  },
  {
    name: "Inovasi Jaringan",
    description: "Selalu mengadopsi teknologi jaringan terbaru dan mengoptimalkan infrastruktur untuk performa masa depan.",
  },
];

export default function MissionVision() {
  // Animasi untuk bagian Visi & Misi (Container)
  const mainSectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animasi Container untuk Nilai Inti (Mengaktifkan Stagger)
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animasi untuk setiap item Nilai Inti
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    // 🛠️ TEMA BARU: Menggunakan bg-[#010614] pekat dengan batas border yang halus
    <div className="relative isolate bg-[#010614] py-24 sm:py-32 border-b border-slate-900 overflow-hidden">
      
      {/* Efek Ambient Glow Lembut di Sisi Kanan Bawah */}
      <div className="absolute -bottom-20 -right-20 -z-10 h-[380px] w-[380px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ================= VISI DAN MISI ================= */}
        <motion.div 
          className="mx-auto max-w-3xl lg:mx-0" 
          initial="hidden" 
          whileInView="visible" 
          variants={mainSectionVariants} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Visi dan Misi Kami
          </h2>
          
          <div className="mt-8 text-sm sm:text-base leading-relaxed text-slate-300 font-light space-y-6">
            {/* Box Visi */}
            <div className="bg-[#051138]/20 border border-slate-900/60 p-5 rounded-xl backdrop-blur-sm">
              <p className="font-bold text-base text-amber-500 uppercase tracking-wider mb-2">Visi</p>
              <p className="text-slate-200">
                Menjadi penyedia solusi infrastruktur dan konektivitas digital terpercaya yang mendukung transformasi bisnis di seluruh Indonesia.
              </p>
            </div>

            {/* Box Misi */}
            <div className="bg-[#051138]/20 border border-slate-900/60 p-5 rounded-xl backdrop-blur-sm">
              <p className="font-bold text-base text-blue-400 uppercase tracking-wider mb-3">Misi</p>
              <ul className="space-y-2.5 text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-500 mt-1 flex-shrink-0">🔹</span>
                  <span>Menyediakan layanan Dedicated dan Broadband berkualitas dengan jaminan Uptime 99%.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-500 mt-1 flex-shrink-0">🔹</span>
                  <span>Membangun infrastruktur Fiber Optic yang luas dan terdistribusi merata.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-500 mt-1 flex-shrink-0">🔹</span>
                  <span>Memberikan dukungan teknis (NOC) yang responsif dan siap siaga 24/7.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ================= NILAI INTI (KARTU MODERN) ================= */}
        <div className="mx-auto mt-20 max-w-2xl lg:mt-24 lg:max-w-none">
          <motion.h3 
            className="text-2xl font-black tracking-tight text-white" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            Nilai-Nilai Inti Kami
          </motion.h3>

          <motion.dl 
            className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3" 
            initial="hidden" 
            whileInView="visible" 
            variants={staggerContainer} 
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value) => (
              <motion.div 
                key={value.name} 
                variants={itemVariants}
                // Kartu Glassmorphism tipis agar senada dengan bagian bawah landing page kamu
                className="bg-[#030e2f]/40 backdrop-blur-md border border-slate-800/60 p-6 rounded-2xl shadow-xl hover:border-slate-700/80 transition duration-200"
              >
                <dt className="text-lg font-bold text-white tracking-wide">
                  {value.name}
                </dt>
                <dd className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
                  {value.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

      </div>
    </div>
  );
}