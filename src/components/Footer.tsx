import { Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 pt-20 pb-10 border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/IMG-20260907-WA0021.jpg" 
                alt="Abby Fundi Tiles TZ Logo" 
                className="h-16 w-auto rounded-xl shadow-lg border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-black text-white text-2xl leading-tight uppercase tracking-tight">Abby Fundi Tiles TZ</span>
                <span className="text-xs text-stone-500 font-bold tracking-widest uppercase">Ubora wa Tiles kwa Kila Nafasi</span>
              </div>
            </div>
            <p className="text-stone-400 text-lg leading-relaxed max-w-md font-medium">
              Sisi ni wataalamu wa kuleta umaridadi na thamani kwenye nyumba yako kupitia tiles za kisasa na zenye ubora wa hali ya juu. Tunapatikana Dar es Salaam kwa huduma zote za ufungaji na uuzaji.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Kurasa</h4>
            <ul className="space-y-4">
              {['Mwanzo', 'Kuhusu Sisi', 'Huduma', 'Kazi Zetu', 'Wasiliana Nasi'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-500 hover:text-red-600 transition-colors font-bold uppercase text-xs tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Tufuate</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-500">
                <Phone size={16} />
                <span className="font-bold text-sm">0788386198</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.2em]">
            © {currentYear} Abby Fundi Tiles TZ. Haki zote zimehifadhiwa.
          </p>
          <p className="text-stone-700 font-bold uppercase text-[10px] tracking-[0.2em]">
            Imeundwa na Wataalamu kwa Ajili ya Wataalamu
          </p>
        </div>
      </div>
    </footer>
  );
}
