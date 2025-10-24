import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        {/* Konten Text */}
        <div className="lg:max-w-lg lg:flex-auto">
          {/* TAGLINE KUAT ISP */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Koneksi Internet Andal, Mendorong Produktivitas Bisnis Anda</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">PT QUICKNET NUSANTARA TEKNOLOGI menyediakan infrastruktur Fiber Optic yang stabil dan layanan dedicated/broadband dengan jaminan SLA tinggi.</p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/services"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Lihat Solusi Internet
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              Hubungi Tim Sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Gambar Ilustrasi/Demo */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {/* Ganti dengan ilustrasi jaringan, peta koneksi, atau server */}
            <img src="/images/isp.jpg" alt="Ilustrasi Jaringan Fiber Optic" className="w-full  object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
