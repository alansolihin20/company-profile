// components/FeatureCard.js
import React from 'react';

// Jika kamu menggunakan Heroicons (sangat direkomendasikan dengan Tailwind)
// Contoh: import { GlobeAltIcon } from '@heroicons/react/24/outline'

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      {/* Icon Section */}
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        {/*
          Catatan: Jika kamu menggunakan Heroicons, ganti div ini
          dengan <Icon className="h-6 w-6" aria-hidden="true" />
          Untuk saat ini, kita gunakan placeholder sederhana (Icon component)
        */}
        {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : <div className="h-6 w-6"></div>}
      </div>

      {/* Konten Text */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold leading-6 text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}
