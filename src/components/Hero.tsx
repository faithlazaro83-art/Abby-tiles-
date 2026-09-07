import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -skew-x-12 transform origin-top translate-x-1/4 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-2xl bg-white text-stone-900 text-sm font-bold mb-8 shadow-xl border border-stone-100">
              <img 
                src="/IMG-20260907-WA0021.jpg" 
                alt="Logo" 
                className="h-10 w-auto rounded-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col leading-none">
                <span className="uppercase tracking-tighter text-base">Abby Fundi Tiles TZ</span>
                <span className="text-[10px] text-red-600 uppercase tracking-widest">Ubora wa Hali ya Juu</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-stone-900 leading-tight mb-6 uppercase">
              Abby Fundi <br />
              <span className="text-red-600 italic">Tiles TZ</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
              Ubora wa Tiles kwa Kila Nafasi. Tunauza na kufunga tiles za sakafu, kuta, na ngazi kwa kiwango cha juu cha kitaalamu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/255788386198?text=Habari%20Abby%20Fundi%20Tiles%20TZ!%20Naulizia%20kuhusu%20huduma%20za%20ufungaji%20wa%20tiles%20majumbani%20na%20ushauri."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-stone-800 transition-all hover:scale-105 shadow-xl shadow-stone-900/20"
              >
                <MessageCircle size={24} className="text-yellow-400" />
                <span>Wasiliana Nasi WhatsApp</span>
              </a>
              <a
                href="#gallery"
                className="bg-white border-2 border-stone-200 text-stone-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:border-red-600 hover:text-red-600 transition-all"
              >
                <span>Tazama Kazi Zetu</span>
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-stone-900">10+</div>
                <div className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Miaka ya Uzoefu</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stone-900">500+</div>
                <div className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Miradi Imekamilika</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stone-900">100%</div>
                <div className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Wateja Kuridhika</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img
                src="/IMG-20260907-WA0013.jpg"
                alt="Luxury Marble Tiles by Abby Fundi Tiles TZ"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-2 underline decoration-red-600 underline-offset-4">Premium Quality</p>
                <h3 className="text-2xl font-bold">Umaridadi wa Marble</h3>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone className="text-stone-900" size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-bold uppercase">Piga Simu Sasa</p>
                  <p className="text-lg font-bold text-stone-900">0788386198</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
