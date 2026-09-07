import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Mwanzo', href: '#' },
    { name: 'Kuhusu Sisi', href: '#about' },
    { name: 'Huduma', href: '#services' },
    { name: 'Kazi Zetu', href: '#gallery' },
    { name: 'Wasiliana Nasi', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/IMG-20260907-WA0021.jpg" 
              alt="Abby Fundi Tiles TZ Logo" 
              className="h-16 w-auto rounded-lg shadow-md border-2 border-red-600/10 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-red-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/255788386198?text=Habari%20Abby%20Fundi%20Tiles%20TZ!%20Naulizia%20kuhusu%20huduma%20za%20ufungaji%20wa%20tiles%20majumbani%20na%20ushauri."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
            >
              <Phone size={18} />
              <span>0788386198</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-stone-200 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-red-600 hover:bg-stone-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/255788386198?text=Habari%20Abby%20Fundi%20Tiles%20TZ!%20Naulizia%20kuhusu%20huduma%20za%20ufungaji%20wa%20tiles%20majumbani%20na%20ushauri."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-red-600 text-white px-4 py-4 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>Wasiliana Nasi WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
