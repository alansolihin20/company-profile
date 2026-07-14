"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { FiPhoneCall } from "react-icons/fi";

// Data Navigasi Utama
const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Layanan", href: "/services" },
  { name: "Area Coverage", href: "/coverage" },
  { name: "Kontak", href: "/contact" },
];

// Data Navigasi Tambahan untuk Mobile
const additionalNavigation = [
  { name: "Tim Kami", href: "/about#team" },
  { name: "Kebijakan Privasi", href: "/legal#privacy" },
  { name: "Syarat & Ketentuan", href: "/legal#terms" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isCurrent = (href) => {
    if (!href.includes("#")) {
      return pathname === href;
    }
    const rootPath = href.split("#")[0];
    return pathname === rootPath;
  };

  // Kelas untuk tautan di Mobile (Tema Terang / Putih)
  const baseMobileClass = "block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition duration-150";
  const activeMobileClass = "block rounded-md bg-blue-50 text-blue-600 px-3 py-2 text-base font-bold border-l-4 border-blue-600";

  return (
    // 🛠️ TEMA BARU: Diubah menjadi putih bersih dengan efek semi-transparan (Glassmorphism Light)
    <Disclosure as="nav" className="bg-white/100 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              
              {/* ================= LEFT SIDE: LOGO & MENU DESKTOP ================= */}
              <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
                {/* Logo Quicknet (Latar putih akan membuat logo putih/warna kontras terlihat tajam) */}
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      className="h-20 w-auto object-contain"
                      src="/images/logo2.jpeg"
                      alt="Quicknet Nusantara Teknologi Logo"
                      width={240}
                      height={75}
                      priority
                    />
                  </Link>
                </div>

                {/* Menu Desktop (Teks disesuaikan ke abu-abu gelap agar kontras) */}
                <div className="hidden sm:ml-12 sm:block">
                  <div className="flex space-x-1 lg:space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          isCurrent(item.href)
                            ? "border-b-2 border-blue-600 text-blue-600 px-3 py-2 text-sm font-bold h-20 flex items-center" 
                            : "text-gray-600 hover:text-blue-600 h-20 flex items-center px-3 py-2 text-sm font-medium transition duration-150 border-b-2 border-transparent hover:border-gray-200"
                        }
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= RIGHT SIDE: CTA BUTTON DESKTOP ================= */}
              <div className="hidden sm:ml-6 sm:block">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 rounded-md bg-[#0a46cb] px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all duration-150 transform hover:-translate-y-0.5"
                >
                  <FiPhoneCall className="w-4 h-4" /> Hubungi Sales
                </Link>
              </div>

              {/* Mobile Menu Button (Warna diubah ke abu-abu gelap) */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>

            </div>
          </div>

          {/* ================= MOBILE MENU CONTENT ================= */}
          <Disclosure.Panel className="sm:hidden bg-white border-b border-gray-200 shadow-xl">
            <div className="space-y-1 px-2 pb-4 pt-2">
              {/* Tautan Utama */}
              {navigation.map((item) => (
                <Disclosure.Button 
                  key={item.name} 
                  as={Link} 
                  href={item.href} 
                  className={isCurrent(item.href) ? activeMobileClass : baseMobileClass} 
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {/* Garis pemisah */}
              <div className="py-2">
                <hr className="border-gray-100" />
              </div>

              {/* Tautan Tambahan */}
              {additionalNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={baseMobileClass}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {/* CTA di Mobile Menu */}
              <div className="px-3 pt-2">
                <Disclosure.Button 
                  as={Link} 
                  href="/contact" 
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0a46cb] px-4 py-2.5 text-center text-base font-semibold text-white hover:bg-blue-600 shadow-md"
                >
                  <FiPhoneCall className="w-4 h-4" /> Hubungi Sales
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}