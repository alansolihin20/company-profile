// pages/contact.js
import '../app/globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactFormSection from '../components/ContactFormSection/ContactFormSection';

export default function Contact() {
  return (
    <div>
      <title>Kontak - PT QUICKNET NUSANTARA TEKNOLOGI</title>
      <Navbar />

      <main>
        {/* Konten utama yang berisi formulir, informasi kontak, dan peta */}
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}
