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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animasi Container untuk Nilai Inti (Mengaktifkan Stagger)
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Jeda 0.2 detik antar item
      },
    },
  };

  // Animasi untuk setiap item Nilai Inti
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Visi dan Misi - Dianimasikan */}
        <motion.div className="mx-auto max-w-2xl lg:mx-0" initial="hidden" whileInView="visible" variants={mainSectionVariants} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Visi dan Misi Kami</h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <p className="font-semibold text-xl text-indigo-600">Visi:</p>
            <p>Menjadi penyedia solusi infrastruktur dan konektivitas digital terpercaya yang mendukung transformasi bisnis di seluruh Indonesia.</p>

            <p className="font-semibold text-xl text-indigo-600 mt-6">Misi:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Menyediakan layanan Dedicated dan Broadband berkualitas dengan jaminan Uptime 99%.</li>
              <li>Membangun infrastruktur Fiber Optic yang luas dan terdistribusi merata.</li>
              <li>Memberikan dukungan teknis (NOC) yang responsif dan siap siaga 24/7.</li>
            </ul>
          </div>
        </motion.div>

        {/* Nilai Inti - Dianimasikan dengan Stagger */}
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <motion.h3 className="text-2xl font-bold tracking-tight text-gray-900" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            Nilai-Nilai Inti Kami
          </motion.h3>

          <motion.dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3" initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, amount: 0.3 }}>
            {values.map((value) => (
              <motion.div key={value.name} variants={itemVariants}>
                <dt className="text-xl font-semibold leading-7 text-gray-900">{value.name}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
