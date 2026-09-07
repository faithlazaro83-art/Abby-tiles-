import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-12"
              >
                <img
                  src="/IMG-20260907-WA0018.jpg"
                  alt="Ufungaji wa tiles za marble ukutani"
                  className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/IMG-20260907-WA0009.jpg"
                  alt="Ufungaji wa tiles za marble kwenye ngazi"
                  className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            {/* Experience Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-8 rounded-2xl shadow-2xl text-center border-4 border-white">
              <p className="text-4xl font-black mb-1">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Miaka ya Kazi</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Kuhusu Sisi</div>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 uppercase leading-tight">
              Wataalamu wa Tiles <br />
              <span className="text-stone-400">Wenye Uzoefu na Ubunifu</span>
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Abby Fundi Tiles TZ ni kampuni inayoongoza katika kutoa huduma bora za ufungaji na uuzaji wa tiles Tanzania. Tuna uzoefu wa miaka mingi katika kuleta muonekano wa kisasa kwenye majumba, ofisi, na majengo ya kibiashara.
            </p>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Dhamira yetu ni kutoa huduma bora zinazovutia majumbani, kuanzia tiles za ceramic, porcelain, hadi marble, huku tukizingatia usahihi na kasi katika kila mradi tunaochukua Dar es Salaam na kote nchini.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Ufungaji wa Kitaalamu',
                'Ushauri wa bure wa Design',
                'Vifaa vya Kisasa',
                'Bei Nafuu na Kazi Bora',
                'Usafirishaji wa uhakika',
                'Muda wa kumaliza kazi'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-600" size={20} />
                  <span className="font-bold text-stone-700">{item}</span>
                </div>
              ))}
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
