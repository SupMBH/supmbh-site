import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import VisionDpo from './components/VisionDpo';
import Experience from './components/Experience';
import Formations from './components/Formations';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/components.css';

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Aller au contenu principal
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <VisionDpo />
        <Experience />
        <Formations />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
