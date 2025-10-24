// components/CoverageMapSection.js
import React from 'react';
import '../../app/globals.css';
import Link from 'next/link';

// Data Area Layanan (Ganti sesuai coverage QUICKNET yang sebenarnya)
const coveredCities = ['Bogor', 'Sukabumi', 'Jakarta'];

export default function CoverageMapSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Kolom Kiri: Peta Visual */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Infrastruktur Jaringan Utama</h2>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-900/10">
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
            <p className="mt-4 text-sm text-gray-500">Hubungi tim sales kami untuk validasi ketersediaan layanan di alamat spesifik Anda.</p>
          </div>

          {/* Kolom Kanan: Daftar Kota & CTA Kecil */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Kota-Kota yang Terlayani</h2>
            <ul role="list" className="space-y-3">
              {coveredCities.map((city) => (
                <li key={city} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                  <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.886l-3.232 4.04-1.616-1.617a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l4-5a.75.75 0 00-.143-.883z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base font-medium text-gray-900">{city}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">Area Anda Belum Terdaftar?</h3>
              <p className="mt-2 text-gray-600 text-sm">Kami terus memperluas jangkauan. Kirimkan permintaan khusus kepada tim sales kami untuk survei lokasi.</p>
              <Link href="/contact" className="mt-4 inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-150">
                Cek Ketersediaan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
