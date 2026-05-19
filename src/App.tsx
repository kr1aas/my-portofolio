import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

export default function App({ onTrigger }: { onTrigger: () => void }) {
  return (
    <div className="min-h-screen bg-portfolio-gray font-nunito">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio onTrigger={onTrigger} />
      <Blog />
      <Contact />
    </div>
  );
}
