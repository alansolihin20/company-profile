"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  // Animasi untuk kolom kiri (Teks)
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Animasi untuk kolom kanan (Gambar)
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          {/* Konten Text - Dianimasikan */}
          <motion.div className="lg:pr-4 lg:pt-4" initial="hidden" whileInView="visible" variants={textVariants} viewport={{ once: true, amount: 0.3 }}>
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">Sejak 2025</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tentang PT QUICKNET Nusantara Teknologi</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Kami adalah ISP terdepan yang didirikan dengan satu tujuan: mengatasi tantangan konektivitas bisnis di Indonesia dengan infrastruktur yang handal dan layanan dukungan yang proaktif.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">Fokus B2B.</dt> <dd className="inline">Dedikasi penuh kami pada segmen korporat menjamin kualitas layanan yang Anda butuhkan untuk operasional kritikal.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">Infrastruktur Fiber Optic.</dt>{" "}
                  <dd className="inline">Jaringan kami dibangun di atas teknologi Fiber Optic terkini untuk kecepatan dan stabilitas maksimum di setiap titik.</dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* Gambar/Visual - Dianimasikan */}
          <motion.div className="relative" initial="hidden" whileInView="visible" variants={imageVariants} viewport={{ once: true, amount: 0.3 }}>
            <Image
              src="/images/kantor.jpg"
              alt="Gedung Kantor Quicknet"
              // === CLASS YANG DIREVISI (Sudah sesuai untuk responsif) ===
              className="w-full max-w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
