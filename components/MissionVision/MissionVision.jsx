// components/MissionVision.js

// Data Visi, Misi, dan Nilai Inti
const values = [
  {
    name: 'Reliabilitas (SLA Tinggi)',
    description: 'Kami menjamin konektivitas yang konsisten dengan komitmen Service Level Agreement (SLA) tertinggi di industri.',
  },
  {
    name: 'Customer-Centric',
    description: 'Fokus pada kebutuhan klien, memastikan setiap solusi disesuaikan untuk mencapai efisiensi bisnis maksimal.',
  },
  {
    name: 'Inovasi Jaringan',
    description: 'Selalu mengadopsi teknologi jaringan terbaru dan mengoptimalkan infrastruktur untuk performa masa depan.',
  },
];

export default function MissionVision() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Visi dan Misi */}
        <div className="mx-auto max-w-2xl lg:mx-0">
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
        </div>

        {/* Nilai Inti */}
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nilai-Nilai Inti Kami</h3>
          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="text-xl font-semibold leading-7 text-gray-900">{value.name}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
