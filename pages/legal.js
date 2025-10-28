"use client";

import "../app/globals.css";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
// Anggap komponen ini sudah Anda definisikan
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// --- Konten Dokumen Legal (Ditempatkan Langsung sebagai String untuk menghindari masalah 'Unknown module type') ---

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

// --- Akhir Konten Dokumen Legal ---

// Komponen kustom untuk menerapkan style pada paragraf
const components = {
  p: ({ node, ...props }) => <p style={{ textAlign: "justify", lineHeight: "1.75" }} {...props} />,
  li: ({ node, ...props }) => <li style={{ lineHeight: "1.75" }} {...props} />,
};

// Fungsi untuk menentukan status awal berdasarkan URL hash
const getInitialActiveSection = () => {
  // Pastikan window ada di sisi klien sebelum mengaksesnya
  if (typeof window !== "undefined") {
    const hash = window.location.hash.substring(1);
    if (hash === "terms") {
      return "terms";
    }
  }
  return "privacy";
};

export default function Legal() {
  // Menggunakan fungsi inisialisasi untuk status awal
  const [activeSection, setActiveSection] = useState(getInitialActiveSection);
  const privacyRef = useRef(null);
  const termsRef = useRef(null);

  // Efek untuk mengelola navigasi hash (fragment identifier)
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Ambil hash tanpa '#'

    // Logika scroll, tidak lagi mengatur setActiveSection di sini
    if (hash === "terms" && termsRef.current) {
      termsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "privacy" && privacyRef.current) {
      privacyRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Listener untuk perubahan hash setelah mount (saat user mengklik back/forward)
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash === "terms") {
        setActiveSection("terms");
      } else if (newHash === "privacy") {
        setActiveSection("privacy");
      } else {
        // Default jika hash dihapus atau tidak dikenal
        setActiveSection("privacy");
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Efek hanya berjalan saat mount

  // Fungsi yang dipanggil saat tombol tab diklik
  const handleTabClick = (section) => {
    setActiveSection(section);
    // Tambahkan hash ke URL tanpa memicu reload
    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <>
      {/* Asumsi Navbar dan Footer sudah ada */}
      <Navbar />

      <main className="pt-20 bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Syarat & Ketentuan</h1>
            <p className="mt-4 text-xl text-gray-600">PT QUICKNET NUSANTARA TEKNOLOGI.</p>
            <p className="mt-4 text-xl text-gray-600">Transparansi dan kejelasan adalah prioritas kami.</p>
          </div>

          {/* Tab/Menu Navigasi Internal */}
          <div className="flex justify-center space-x-4 mb-12 border-b border-gray-200">
            <a
              href="#privacy"
              // Mengganti onClick={() => setActiveSection("privacy")}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("privacy");
                privacyRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-3 px-4 text-lg font-medium transition duration-150 ${activeSection === "privacy" ? "border-b-4 border-indigo-600 text-indigo-700" : "text-gray-500 hover:text-gray-700"}`}
            >
              Kebijakan Privasi
            </a>
            <a
              href="#terms"
              // Mengganti onClick={() => setActiveSection("terms")}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("terms");
                termsRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`pb-3 px-4 text-lg font-medium transition duration-150 ${activeSection === "terms" ? "border-b-4 border-indigo-600 text-indigo-700" : "text-gray-500 hover:text-gray-700"}`}
            >
              Syarat & Ketentuan
            </a>
          </div>

          {/* Konten Dokumen */}
          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg prose max-w-none prose-indigo">
            {/* Bagian Kebijakan Privasi */}
            <div id="privacy" ref={privacyRef} className="pt-12 -mt-12">
              <ReactMarkdown components={components}>{PrivacyPolicyContent}</ReactMarkdown>
            </div>

            <hr className="my-16 border-gray-200" />

            {/* Bagian Syarat & Ketentuan */}
            <div id="terms" ref={termsRef} className="pt-12 -mt-12">
              <ReactMarkdown components={components}>{TermsAndConditionsContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>

      {/* Asumsi Footer sudah ada */}
      <Footer />
    </>
  );
}
