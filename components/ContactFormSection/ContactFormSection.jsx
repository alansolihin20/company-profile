// components/ContactFormSection.js

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

// Data Kontak Perusahaan
const contactInfo = [
  {
    name: 'Alamat Kantor Pusat',
    description: 'Kp. Bebera, Desa/Kelurahan Tenjolaya, Kec. Cicurug, Kab. Sukabumi, Provinsi Jawa Barat, Kode Pos: 44359',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Email Dukungan & Sales',
    description: 'info@quicknet.id',
    icon: EnvelopeIcon,
  },
  {
    name: 'Telepon & WhatsApp',
    description: '0851-1763-6502',
    icon: PhoneIcon,
  },
];

export default function ContactFormSection() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Kolom Kiri: Formulir Kontak */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Minta Penawaran Terbaik</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Silakan isi formulir di bawah ini dan tim sales dedicated kami akan segera menghubungi Anda dalam waktu 1x24 jam.</p>

            {/* Informasi Kontak Statis */}
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Peta Lokasi (Placeholder) */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lokasi Kami</h3>
              {/* Gunakan iframe Google Maps jika ada alamat spesifik */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5416.856682071173!2d106.76271899999999!3d-6.7645209999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDUnNTIuMyJTIDEwNsKwNDUnNDUuOCJF!5e1!3m2!1sid!2sid!4v1761320442302!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi QUICKNET"
                  className="rounded-xl w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Formulir Detail */}
        <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Nama Perusahaan */}
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nama Perusahaan <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="PT. Sinar Jaya Abadi"
                  />
                </div>
              </div>

              {/* Nama PIC */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nama PIC <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Budi Santoso"
                  />
                </div>
              </div>

              {/* Jabatan */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Jabatan
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="IT Manager"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="budi.santoso@perusahaan.com"
                  />
                </div>
              </div>

              {/* Telepon */}
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nomor Telepon/WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contoh: 0812 3456 7890"
                  />
                </div>
              </div>

              {/* Layanan yang diminati */}
              <div className="sm:col-span-2">
                <label htmlFor="service-type" className="block text-sm font-semibold leading-6 text-gray-900">
                  Layanan yang Diminati
                </label>
                <div className="mt-2.5">
                  <select
                    id="service-type"
                    name="service-type"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Pilih salah satu...</option>
                    <option value="dedicated">Dedicated Internet Access (DIA)</option>
                    <option value="broadband">Broadband Internet</option>
                    <option value="consultation">Konsultasi Jaringan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Pesan */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Pesan / Detail Kebutuhan
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Sebutkan lokasi pemasangan (alamat lengkap) dan perkiraan kebutuhan bandwidth (misal: 100 Mbps Dedicated)."
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kirim Permintaan Penawaran
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
