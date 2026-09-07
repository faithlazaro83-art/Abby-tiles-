import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Salma Juma',
      role: 'Mwenye Nyumba, Mbezi',
      content: 'Abby Fundi Tiles walifanya kazi nzuri sana kwenye nyumba yangu mpya. Tiles zimepangwa kwa usahihi na muonekano ni wa kipekee. Nawapendekeza sana!',
      rating: 5
    },
    {
      name: 'Kassim Hassan',
      role: 'Mkandarasi, Dar es Salaam',
      content: 'Nimekuwa nikifanya kazi na Abby Fundi kwa miradi yangu mingi ya ujenzi. Ni mafundi wenye nidhamu na wanajua wanachofanya. Bei zao pia ni rafiki sana.',
      rating: 5
    },
    {
      name: 'Dr. Neema',
      role: 'Mteja, Masaki',
      content: 'Walifanya ufungaji wa tiles za marble kwenye ngazi za ofisi yangu. Kazi ilikamilika haraka na umaridadi wake umekuwa kivutio kwa wateja wangu wote.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Maoni ya Wateja</div>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 uppercase tracking-tight">Wanachosema Wateja Wetu</h2>
          <p className="text-lg text-stone-600 leading-relaxed font-medium">
            Tumeridhisha mamia ya wateja kote nchini. Huu hapa ni mchango wao kuhusu huduma zetu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-stone-100 group-hover:text-red-500/10 transition-colors">
                <Quote size={80} />
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 leading-relaxed font-medium relative z-10">
                "{item.content}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-stone-900 uppercase tracking-tight">{item.name}</h4>
                <p className="text-sm text-stone-400 font-bold uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
