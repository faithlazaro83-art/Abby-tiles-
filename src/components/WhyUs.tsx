import { motion } from 'motion/react';
import { Star, ShieldCheck, Zap, DollarSign, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      title: 'Ubora wa Kazi',
      description: 'Tunahakikisha kila tile imefungwa kwa usahihi na muundo unaovutia.',
      icon: ShieldCheck
    },
    {
      title: 'Uzoefu',
      description: 'Timu yetu ina uzoefu wa miaka mingi katika miradi mikubwa na midogo.',
      icon: Star
    },
    {
      title: 'Bei Nafuu',
      description: 'Tunatoa huduma za daraja la kwanza kwa gharama zinazofaa mfuko wako.',
      icon: DollarSign
    },
    {
      title: 'Kasi ya Kazi',
      description: 'Tunajali muda wako, tunamaliza miradi kwa wakati uliokubaliwa.',
      icon: Zap
    },
    {
      title: 'Huduma kwa Wateja',
      description: 'Tupo hapa kukusikiliza na kutoa masuluhisho bora zaidi kwa mahitaji yako.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="grid grid-cols-12 gap-2 h-full w-[200%] -rotate-12 translate-x-[-25%]">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="bg-white/10 h-32 border border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">Kwa Nini Utuchague</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-tight">
              Tunasimamia <span className="text-red-600">Ubora</span> na <span className="text-yellow-400">Uaminifu</span>
            </h2>
            <p className="text-lg text-stone-400 mb-12 leading-relaxed max-w-xl">
              Tunajivunia kuwa chaguo namba moja kwa wateja wanaotafuta umaridadi na uimara katika tiles zao. Kazi yetu ni kioo cha ubunifu wetu.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="bg-red-600 p-3 rounded-xl shrink-0">
                    <reason.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase">{reason.title}</h3>
                    <p className="text-stone-400 font-medium">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl shadow-red-600/10"
            >
              <img
                src="/IMG-20260907-WA0016.jpg"
                alt="Expert at work - Abby Fundi Tiles TZ"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center -rotate-12 border-8 border-stone-900">
              <p className="text-stone-900 font-black text-center leading-tight">
                UBORA<br />TANZANIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
