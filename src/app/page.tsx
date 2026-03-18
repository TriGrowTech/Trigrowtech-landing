import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Orbitle from '@/components/Orbitle';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Orbitle />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
