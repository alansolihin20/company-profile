"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Andi Pratama",
    role: "CEO & Pendiri",
    imageUrl: "", // Placeholder image
    bio: "Pengalaman lebih dari 20 tahun di industri telekomunikasi, memimpin visi QUICKNET sebagai penyedia konektivitas B2B terpercaya.",
  },
  {
    name: "Dewi Sartika",
    role: "Chief Technology Officer (CTO)",
    imageUrl: "", // Placeholder image
    bio: "Pakar jaringan fiber optik dan infrastruktur, memastikan jaringan kami beroperasi dengan keandalan dan kecepatan maksimum.",
  },
  {
    name: "Budi Santoso",
    role: "Head of Sales & Marketing",
    imageUrl: "", // Placeholder image
    bio: "Bertanggung jawab dalam pengembangan pasar dan strategi kemitraan, membawa solusi QUICKNET ke lebih banyak perusahaan.",
  },
  {
    name: "Sari Wijaya",
    role: "Customer Support Manager",
    imageUrl: "", // Placeholder image
    bio: "Memastikan kepuasan pelanggan dengan standar layanan 24/7 yang responsif dan profesional.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Mengenal Kami</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tim Kepemimpinan Kami</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">QUICKNET didukung oleh para profesional berpengalaman yang berdedikasi untuk memberikan solusi konektivitas terbaik untuk bisnis Anda.</p>
        </div>

        <motion.ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((person) => (
            <motion.li key={person.name} variants={itemVariants}>
              <Image
                className="mx-auto h-56 w-56 rounded-full object-cover shadow-lg"
                src={person.imageUrl}
                alt={`Foto ${person.name}`}
                width={224} // h-56 = 224px
                height={224} // w-56 = 224px
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/224x224/cccccc/444444?text=Foto";
                }}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">{person.name}</h3>
              <p className="text-sm leading-6 text-indigo-600 text-center">{person.role}</p>
              <p className="mt-2 text-sm leading-6 text-gray-500 text-center">{person.bio}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
