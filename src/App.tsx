import Navbar from './components/navigation/Navbar';
import About from './components/sections/About';
import ContactForm from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import WhatsAppIcon from './components/ui/WhatsAppIcon';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <ContactForm />
      </main>
      <WhatsAppIcon />
    </div>
  );
}

export default App;