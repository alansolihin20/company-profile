"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// Import MapPinIcon untuk Alamat
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

// Data Navigasi untuk Footer
const navigation = {
  solutions: [
    { name: "Dedicated Internet", href: "/services#dedicated" },
    { name: "Broadband Internet", href: "/services#broadband" },
    { name: "Co-location & Server", href: "/services#colocation" },
    { name: "Solusi Khusus B2B", href: "/services#b2b" },
  ],
  company: [
    { name: "Tentang QUICKNET", href: "/about" },
    { name: "Visi & Misi", href: "/about#mission" },
    { name: "Tim Kami", href: "/about#team" },
    { name: "SLA Jaringan", href: "/services#sla" },
  ],
  legal: [
    { name: "Kebijakan Privasi", href: "/legal#privacy" },
    { name: "Syarat & Ketentuan", href: "/legal#terms" },
  ],
};

export default function Footer() {
  return (
    // Membungkus seluruh footer dengan motion.footer untuk animasi fade-in
    <motion.footer className="bg-gray-900" aria-labelledby="footer-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Kolom 1: Logo & Informasi Kontak */}
          <div className="space-y-8">
            <Link href="/">
              {/* Pastikan kamu punya versi logo putih/terang untuk background gelap */}
              {/* Catatan: Ganti "/images/logo.png" dengan URL gambar yang sesuai. */}
              <Image className="h-8 w-auto" src="/images/logo.png" alt="Quicknet Nusantara Teknologi Logo" width={150} height={32} />
            </Link>
            <p className="text-sm leading-6 text-gray-400">Penyedia layanan Internet profesional dengan fokus pada stabilitas, kecepatan, dan layanan dukungan 24/7.</p>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center text-sm text-gray-400">
                <EnvelopeIcon className="h-4 w-4 mr-2 text-green-500" /> {/* Diubah ke H-4 W-4 */}
                <span>Email: info@quicknet.id</span>
              </div>

              {/* Telepon */}
              <div className="flex items-center text-sm text-gray-400">
                <PhoneIcon className="h-4 w-4 mr-2 text-green-500" /> {/* Diubah ke H-4 W-4 */}
                <span>Phone: 0851-1763-6502</span>
              </div>

              {/* ALAMAT (FIX: Ikon MapPinIcon dan ukuran H-4 W-4) */}
              <div className="flex items-center text-xs text-gray-400">
                <MapPinIcon className="h-4 w-4 mr-2 text-green-500" />
                <span>Kp.Bebera, Desa/Kelurahan Tenjolaya, Kec. Cicurug, Kab. Sukabumi, Provinsi Jawa Barat, Kode Pos: 44359</span>
              </div>
            </div>
          </div>

          {/* Kolom 2 & 3: Navigasi */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Sub-Kolom 1: Solusi */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solusi Internet</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sub-Kolom 2 & 3: Perusahaan & Legal */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Perusahaan</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright */}
        <div className="mt-16 border-t border-gray-800 pt-8 lg:mt-20">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} PT QUICKNET NUSANTARA TEKNOLOGI. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </motion.footer>
  );
}
