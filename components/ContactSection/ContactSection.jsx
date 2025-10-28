"use client";

import { motion } from "framer-motion";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

// Data Kontak Cepat
const contactDetails = [
  { icon: BuildingOffice2Icon, label: "Alamat Kantor Pusat", value: "Kp. Bebera, Desa/Kelurahan Tenjolaya, Kec. Cicurug, Kab. Sukabumi, Provinsi Jawa Barat, Kode Pos: 44359" },
  { icon: PhoneIcon, label: "Hubungi Sales (Jam Kerja)", value: "0851-1763-6502" },
  { icon: EnvelopeIcon, label: "Email Bisnis & Penawaran", value: "info@quicknet.id" },
  { icon: ClockIcon, label: "Technical Support (NOC)", value: "0851-1763-6502" },
];

export default function ContactSection() {
  // Animasi untuk kolom kiri (slide dari kiri)
  const leftColVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Animasi untuk kolom kanan (slide dari kanan)
  const rightColVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Kolom Kiri: Informasi Kontak (Dianimasikan) */}
        <motion.div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48" initial="hidden" whileInView="visible" variants={leftColVariants} viewport={{ once: true, amount: 0.3 }}>
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Hubungi PT QUICKNET Nusantara Teknologi</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Tim kami siap membantu Anda dengan konsultasi infrastruktur, penawaran harga, atau dukungan teknis jaringan 24/7.</p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{detail.label}</span>
                    <detail.icon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <span className="font-semibold text-gray-900 block">{detail.label}</span>
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* Kolom Kanan: Formulir Kontak (Dianimasikan) */}
        <motion.form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" initial="hidden" whileInView="visible" variants={rightColVariants} viewport={{ once: true, amount: 0.3 }}>
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Formulir Permintaan Penawaran</h3>

            {/* Field Input */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nama Perusahaan
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nama Kontak
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email Kantor
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nomor Telepon (WA Aktif)
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Pesan & Kebutuhan Internet
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Kirim Permintaan Penawaran
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
