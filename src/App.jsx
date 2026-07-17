import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Methodology from './components/Methodology.jsx';
import TechStack from './components/TechStack.jsx';
import SocialProof from './components/SocialProof.jsx';
import Books from './components/Books.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <main className="noise relative min-h-screen overflow-hidden bg-ink text-white">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-electric to-mint"
      />

      <div className="fixed inset-0 -z-10 bg-grid bg-[length:52px_52px] opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_100%)]" />
      <div className="fixed inset-0 -z-10 bg-aurora" />
      <div className="fixed -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-electric/10 blur-[160px]" />
      <div className="fixed -right-40 top-2/3 -z-10 h-[420px] w-[420px] rounded-full bg-mint/10 blur-[160px]" />

      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <div id="contenido">
        <Hero />
        <Projects />
        <Methodology />
        <TechStack />
        <SocialProof />
        <Books />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
