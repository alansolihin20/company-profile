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

// --- VARIANTS ANIMASI ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar item anak
      delayChildren: 0.5, // Tunda mulai animasi anak setelah parent muncul
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DedicatedSection() {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32" id="dedicated">
      <motion.div className="mx-auto max-w-7xl px-6 lg:px-8" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Visual Kiri - Animasi Slide dari Kiri */}
          <motion.div className="lg:pr-4 lg:pt-4" variants={leftColumnVariants}>
            <Image src="/images/dedicated.png" alt="Ilustrasi Koneksi Dedicated Fiber Optic" className="w-full max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10" width={2432} height={1442} />
          </motion.div>

          {/* Konten Teks Kanan - Animasi Slide dari Kanan */}
          <motion.div className="lg:pl-8" variants={rightColumnVariants}>
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Layanan Premium</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dedicated Internet Access (DIA)</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Solusi konektivitas tak terbagi yang dirancang khusus untuk kebutuhan korporat yang menuntut **stabilitas**, *bandwidth* yang terjamin, dan *latency* minimal.</p>

              {/* Daftar Fitur (Staggered) */}
              <motion.dl
                className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                variants={containerVariants} // Menggunakan containerVariants untuk stagger
              >
                {dedicatedFeatures.map((feature) => (
                  <motion.div
                    key={feature.name}
                    className="relative pl-9"
                    variants={featureItemVariants} // Menggunakan itemVariants untuk setiap fitur
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
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
