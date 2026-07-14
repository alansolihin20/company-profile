"use client";

import "../globals.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// --- Konten Dokumen Legal ---
const PrivacyPolicyContent = `# Kebijakan Privasi PT QUICKNET NUSANTARA TEKNOLOGI

**Berlaku Efektif: 1 Januari 2025**

PT QUICKNET NUSANTARA TEKNOLOGI berkomitmen untuk melindungi privasi dan keamanan data pribadi pelanggan kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda sehubungan dengan penggunaan layanan internet dan situs web kami.

## 1. Informasi yang Kami Kumpulkan

Kami mengumpulkan informasi untuk menyediakan layanan yang lebih baik kepada semua pengguna kami. Jenis informasi yang kami kumpulkan meliputi:

### A. Informasi Pribadi
* **Data Identitas:** Nama, alamat, nomor telepon, alamat email, dan identitas bisnis (jika Anda adalah pelanggan korporat).
* **Data Pembayaran:** Informasi yang diperlukan untuk memproses pembayaran, seperti detail tagihan.

### B. Data Layanan dan Jaringan
* **Informasi Penggunaan Layanan:** Data volume, waktu koneksi, dan jenis perangkat yang digunakan untuk mengakses layanan kami.
* **Alamat IP:** Alamat IP statis atau dinamis yang dialokasikan kepada Anda.
* **Data Lokasi:** Informasi geolokasi yang terkait dengan alamat instalasi layanan Anda.

## 2. Bagaimana Kami Menggunakan Informasi Anda

Informasi Anda digunakan untuk tujuan berikut:
* **Penyediaan Layanan:** Untuk mengelola, memelihara, dan menyediakan layanan internet yang Anda beli.
* **Dukungan Pelanggan:** Untuk merespons pertanyaan dan permintaan dukungan teknis Anda secara efisien.
* **Penagihan:** Untuk memproses pembayaran, tagihan, dan mengelola akun Anda.
* **Peningkatan Layanan:** Untuk menganalisis tren penggunaan dan meningkatkan kualitas serta keandalan jaringan kami.
* **Kepatuhan Hukum:** Untuk mematuhi hukum, peraturan yang berlaku, dan proses hukum yang sah.

## 3. Pengungkasan Informasi

Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami dapat mengungkapkan informasi Anda kepada:
* **Penyedia Layanan:** Pihak ketiga yang bekerja atas nama kami, seperti kontraktor instalasi dan layanan pembayaran.
* **Otoritas Hukum:** Jika diwajibkan oleh hukum atau proses hukum, termasuk mematuhi permintaan pemerintah yang sah.

## 4. Keamanan Data

Kami mengambil langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi data pribadi Anda dari akses, pengungkapan, perubahan, atau penghancuran yang tidak sah.

## 5. Perubahan pada Kebijakan Privasi

Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan dipublikasikan di halaman ini, dan kami mendorong Anda untuk meninjaunya secara berkala.`;

const TermsAndConditionsContent = `# Syarat dan Ketentuan Layanan QUICKNET

**Berlaku Efektif: 1 Januari 2025**

Selamat datang di layanan PT QUICKNET NUSANTARA TEKNOLOGI (selanjutnya disebut "Layanan"). Dengan mengakses atau menggunakan Layanan, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini ("Ketentuan").

## 1. Definisi

* **QUICKNET:** Mengacu pada PT. Quicknet Nusantara Teknologi, penyedia Layanan ini.
* **Pelanggan:** Individu atau entitas bisnis yang mendaftar dan menggunakan Layanan.
* **Layanan:** Layanan Dedicated Internet Access (DIA) dan Broadband Internet yang disediakan oleh QUICKNET.

## 2. Penggunaan Layanan

### 2.1. Kepemilikan Peralatan
Semua peralatan (misalnya, modem, router fiber, kabel) yang dipinjamkan atau disediakan oleh QUICKNET selama durasi Layanan tetap menjadi milik QUICKNET. Pelanggan bertanggung jawab atas kehilangan atau kerusakan peralatan tersebut di luar penggunaan normal.

### 2.2. Batasan Penggunaan
Pelanggan setuju untuk tidak menggunakan Layanan untuk:
* Kegiatan ilegal atau yang melanggar hukum dan peraturan yang berlaku di Republik Indonesia.
* Mengirimkan konten yang bersifat mengancam, melecehkan, atau melanggar hak cipta.
* Mengirimkan *spam* atau *email* massal yang tidak diminta.

## 3. Ketentuan Pembayaran dan Penagihan

### 3.1. Pembayaran
Pelanggan wajib membayar biaya Layanan tepat waktu sesuai dengan tanggal jatuh tempo yang tertera pada faktur. Keterlambatan pembayaran dapat mengakibatkan penangguhan atau pemutusan Layanan.

### 3.2. Perubahan Harga
QUICKNET berhak mengubah harga Layanan sewaktu-waktu, dengan pemberitahuan tertulis kepada Pelanggan minimal 30 (tiga puluh) hari sebelumnya.

## 4. Service Level Agreement (SLA)

* **Dedicated Internet Access (DIA):** QUICKNET menjamin SLA hingga 99.9% uptime jaringan, dengan kompensasi yang diatur dalam kontrak terpisah.
* **Broadband Internet:** Layanan ini disediakan dengan upaya komersial terbaik (best effort) dan SLA yang lebih rendah (95%) dibandingkan DIA.

## 5. Pemutusan Layanan

QUICKNET berhak memutus Layanan tanpa pemberitahuan jika:
* Pelanggan melanggar Ketentuan ini, khususnya Batasan Penggunaan.
* Kegagalan pembayaran berlanjut setelah masa tenggang.

## 6. Hukum yang Mengatur

Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari Ketentuan ini akan diselesaikan melalui musyawarah mufakat, dan jika tidak tercapai, akan diselesaikan di pengadilan yang memiliki yurisdiksi di Jakarta.`;

// 🛠️ PERBAIKAN UTAMA: Memaksa semua komponen teks Markdown menggunakan class warna terang dari Tailwind
const components = {
  h1: ({ node, ...props }) => <h1 className="text-2xl sm:text-3xl font-black text-white mt-8 mb-4 tracking-tight" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-8 mb-4 border-b border-slate-800/80 pb-2" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-base sm:text-lg font-bold text-blue-400 mt-6 mb-2" {...props} />,
  p: ({ node, ...props }) => <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed my-4 text-justify" {...props} />,
  li: ({ node, ...props }) => <li className="text-sm sm:text-base text-slate-300 font-light leading-relaxed my-2 list-disc list-inside pl-1" {...props} />,
  ul: ({ node, ...props }) => <ul className="my-4 pl-2" {...props} />,
  strong: ({ node, ...props }) => <strong className="font-bold text-amber-400" {...props} />,
};

const getInitialActiveSection = () => {
  if (typeof window !== "undefined") {
    const hash = window.location.hash.substring(1);
    if (hash === "terms") {
      return "terms";
    }
  }
  return "privacy";
};

export default function Legal() {
  const [activeSection, setActiveSection] = useState(getInitialActiveSection);
  const privacyRef = useRef(null);
  const termsRef = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash === "terms" && termsRef.current) {
      termsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "privacy" && privacyRef.current) {
      privacyRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash === "terms") {
        setActiveSection("terms");
      } else if (newHash === "privacy") {
        setActiveSection("privacy");
      } else {
        setActiveSection("privacy");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabClick = (section) => {
    setActiveSection(section);
    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <>
      <Navbar />

      <main className="relative isolate pt-20 bg-[#010614] min-h-screen overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute bottom-1/3 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-24">
          
          {/* Header Judul Rata Kiri */}
          <div className="text-center lg:text-left mb-16 flex flex-col items-center lg:items-start">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-500">Legal Dokumen</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl leading-tight">Syarat & Ketentuan</h1>
            <p className="mt-4 text-base sm:text-lg text-slate-400 font-light max-w-2xl">
              Transparansi dan kejelasan adalah prioritas utama kami di PT QUICKNET NUSANTARA TEKNOLOGI.
            </p>
          </div>

          {/* Tab/Menu Navigasi */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-12 border-b border-slate-900">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("privacy");
                privacyRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-3 px-2 text-sm sm:text-base font-bold uppercase tracking-wider transition duration-150 ${
                activeSection === "privacy" 
                  ? "border-b-2 border-blue-500 text-blue-400" 
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Kebijakan Privasi
            </a>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("terms");
                termsRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-3 px-2 text-sm sm:text-base font-bold uppercase tracking-wider transition duration-150 ${
                activeSection === "terms" 
                  ? "border-b-2 border-blue-500 text-blue-400" 
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Syarat & Ketentuan
            </a>
          </div>

          {/* 🛠️ WADAH DOKUMEN: Menghapus class 'prose' agar tidak bentrok dengan kustom komponen kita */}
          <div className="bg-[#030e2f]/20 border border-slate-800/80 p-6 sm:p-12 rounded-2xl shadow-2xl backdrop-blur-md max-w-none">
            
            {/* Bagian Kebijakan Privasi */}
            <div id="privacy" ref={privacyRef} className="pt-12 -mt-12">
              <ReactMarkdown components={components}>{PrivacyPolicyContent}</ReactMarkdown>
            </div>

            <hr className="my-16 border-slate-800/60" />

            {/* Bagian Syarat & Ketentuan */}
            <div id="terms" ref={termsRef} className="pt-12 -mt-12">
              <ReactMarkdown components={components}>{TermsAndConditionsContent}</ReactMarkdown>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </>
  );
}