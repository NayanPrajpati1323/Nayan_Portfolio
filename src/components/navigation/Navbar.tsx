import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = ['Home', 'About', 'Services', 'Skills', 'Experience', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm shadow-lg shadow-[#FFD700]/20 border-b border-[#FFD700]/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold text-[#FFD700]">Nayan Prajapati</span>
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-[#FFD700] hover:bg-[#FFD700]/10"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-[#FFD700]" />
          </button>

          <div className={`absolute md:static top-full left-0 w-full md:w-auto bg-black/95 md:bg-transparent ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-white hover:text-[#FFD700] transition-colors uppercase text-sm tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}