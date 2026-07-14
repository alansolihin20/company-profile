"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, SignalIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const dedicatedFeatures = [
  {
    name: "Jaminan SLA 99.9%",
    description: "Kami menjamin tingkat uptime jaringan tertinggi untuk kelangsungan operasional bisnis Anda.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Rasio 1:1 Simetris",
    description: "Kecepatan upload dan download yang sama dan konsisten, vital untuk VPN, VoIP, dan transfer data besar.",
    icon: SignalIcon,
  },
  {
    name: "Static Public IP",
    description: "Dapatkan alamat IP publik statis untuk keamanan server, remote access, dan hosting aplikasi internal.",
    icon: LockClosedIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function DedicatedSection() {
  return (
    // 🛠️ TEMA BARU: Latar belakang menggunakan bg-[#010614] pekat
    <div className="overflow-hidden bg-[#010614] py-24 sm:py-32 border-b border-slate-900" id="dedicated">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* Visual Kiri */}
          <motion.div className="lg:pr-4" variants={leftColumnVariants}>
            <Image 
              src="/images/dedicated.png" 
              alt="Ilustrasi Koneksi Dedicated Fiber Optic" 
              className="w-full max-w-full h-auto rounded-2xl shadow-2xl border border-slate-800/60 brightness-90 contrast-105" 
              width={2432} 
              height={1442} 
            />
          </motion.div>

          {/* Konten Teks Kanan */}
          <motion.div className="lg:pl-4" variants={rightColumnVariants}>
            <div className="lg:max-w-lg">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-500">Layanan Premium</h2>
              <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Dedicated Internet Access (DIA)</p>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-400 font-light">
                Solusi konektivitas tak terbagi yang dirancang khusus untuk kebutuhan korporat yang menuntut <span className="text-white font-normal">stabilitas</span>, <span className="text-white font-normal">bandwidth terjamin</span>, dan <span className="text-white font-normal">latency minimal</span>.
              </p>

              {/* Daftar Fitur */}
              <motion.dl className="mt-10 max-w-xl space-y-6 lg:max-w-none" variants={containerVariants}>
                {dedicatedFeatures.map((feature) => (
                  <motion.div key={feature.name} className="relative pl-10" variants={featureItemVariants}>
                    <dt className="text-sm sm:text-base font-bold text-white block mb-0.5">
                      <feature.icon className="absolute left-0 top-0.5 h-6 w-6 text-blue-400" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-400 font-light">{feature.description}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}