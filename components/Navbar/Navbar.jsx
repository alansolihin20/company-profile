'use client';
// ❌ Hapus: import { useRouter } from 'next/router';
// ❌ Hapus: import Link from 'next/link';

// ✅ Ganti dengan import dari 'next/navigation'
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // <--- Link tetap dari 'next/link' untuk versi 13+

import { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';

// Data Navigasi
const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Area Coverage', href: '/coverage' },
];

export default function Navbar() {
  // ✅ Panggil usePathname dari 'next/navigation'
  const pathname = usePathname();

  // ✅ isCurrent menggunakan pathname
  const isCurrent = (href) => pathname === href;

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo dan Navigasi Utama */}
              <div className="flex items-center">
                {/* Logo Quicknet */}
                <div className="flex-shrink-0">
                  <Link href="/">
                    {/* Ganti dengan logo Quicknet yang kamu simpan di public/images */}
                    <Image
                      className="h-16 w-auto"
                      src="/images/logo.png"
                      alt="Quicknet Nusantara Teknologi Logo"
                      width={43} // Atur lebar asli logo
                      height={60} // Atur tinggi asli logo
                    />
                  </Link>
                </div>

                {/* Menu Desktop */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        // ✅ Logikanya sudah benar
                        className={
                          isCurrent(item.href)
                            ? 'border-b-2 border-green-500 text-gray-900 px-3 py-2 text-sm font-medium' // Class aktif
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 text-sm font-medium transition duration-150' // Class non-aktif
                        }
                        aria-current={isCurrent(item.href) ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol CTA (Hanya Desktop) */}
              <div className="hidden sm:ml-6 sm:block">
                <Link href="/contact" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-150">
                  Minta Penawaran
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  // ✅ Logikanya sudah benar
                  className={isCurrent(item.href) ? 'block rounded-md bg-indigo-50 px-3 py-2 text-base font-medium text-indigo-700' : 'block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {/* CTA di Mobile Menu */}
              <Disclosure.Button as={Link} href="/contact" className="mt-2 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-indigo-500">
                Minta Penawaran
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
