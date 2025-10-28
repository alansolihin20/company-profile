"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Import icon yang sesuai, misalnya icon telepon atau pesan
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function CTABanner() {
  return (
    // Menggunakan motion.div untuk membungkus seluruh banner
    <motion.div className="bg-indigo-700" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        {/* Teks Utama CTA */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Siap Dapatkan Koneksi Internet Terbaik?</span>
          <span className="block text-green-300">Hubungi Kami Sekarang dan Dapatkan Penawaran Khusus.</span>
        </h2>

        {/* Tombol Aksi */}
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          {/* Tombol 1: Minta Penawaran */}
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">
              <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              Minta Penawaran
            </Link>
          </div>

          {/* Tombol 2: Pelajari SLA Kami */}
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400">
              Pelajari SLA Kami
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
