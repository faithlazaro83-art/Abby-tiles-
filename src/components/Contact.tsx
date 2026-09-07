import { motion } from 'motion/react';
import { Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <div className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">Wasiliana Nasi</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">Tuandikie au <span className="text-red-600">Tupigie</span> Simu</h2>
              <p className="text-lg text-stone-400 mb-12 font-medium leading-relaxed">
                Je, una mradi mpya? Unataka ushauri wa tiles? Tupo hapa kusaidia. Wasiliana nasi leo upate huduma bora zaidi.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-red-600 transition-colors">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-widest mb-1">Namba ya Simu / WhatsApp</p>
                    <a href="https://wa.me/255788386198?text=Habari%20Abby%20Fundi%20Tiles%20TZ!%20Naulizia%20kuhusu%20huduma%20za%20ufungaji%20wa%20tiles%20majumbani%20na%20ushauri." className="text-xl font-bold text-white hover:text-yellow-400 transition-colors">0788386198</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-red-600 transition-colors">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-widest mb-1">Eneo Letu</p>
                    <p className="text-xl font-bold text-white">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="https://wa.me/255788386198?text=Habari%20Abby%20Fundi%20Tiles%20TZ!%20Naulizia%20kuhusu%20huduma%20za%20ufungaji%20wa%20tiles%20majumbani%20na%20ushauri."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase hover:bg-red-700 transition-all hover:scale-105 shadow-xl shadow-red-600/20"
                >
                  <MessageCircle size={24} />
                  Anza Mazungumzo WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-12 md:p-20 border-l border-white/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-stone-400 uppercase tracking-widest">Jina Lako</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Jina kamili"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-stone-400 uppercase tracking-widest">Namba ya Simu</label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest">Aina ya Huduma</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-colors appearance-none">
                    <option className="bg-stone-900">Ufungaji wa Tiles</option>
                    <option className="bg-stone-900">Ununuzi wa Tiles</option>
                    <option className="bg-stone-900">Ushauri wa Muundo</option>
                    <option className="bg-stone-900">Nyinginezo</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-400 uppercase tracking-widest">Ujumbe Wako</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Elezea mahitaji yako..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-stone-900 py-5 rounded-2xl font-black uppercase flex items-center justify-center gap-3 hover:bg-stone-200 transition-colors shadow-xl"
                >
                  <Send size={20} />
                  Tuma Ujumbe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
