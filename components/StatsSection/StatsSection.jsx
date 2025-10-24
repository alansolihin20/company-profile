// components/StatsSection.js

const stats = [
  { id: 1, name: 'SLA Uptime Jaringan', value: '99.9%' },
  { id: 2, name: 'Klien Korporat Terlayani', value: '0+' },
  { id: 3, name: 'Total Panjang Jaringan FO (Km)', value: '1,500+' },
  { id: 4, name: 'Tahun Pengalaman di Industri', value: '10+' },
];

export default function StatsSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Header */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Dampak PT QUICKNET dalam Angka</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300 text-center">Kepercayaan bisnis Anda berawal dari infrastruktur yang terukur dan terjamin.</p>

          {/* Grid Statistik */}
          <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-800/50 p-8">
                <p className="order-first text-base font-semibold text-green-400">{stat.name}</p>
                <p className="text-5xl font-bold tracking-tight text-white mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
