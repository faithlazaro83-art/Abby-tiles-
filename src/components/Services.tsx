import { motion } from 'motion/react';
import { ShoppingBag, Layout, Ruler, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Ufungaji wa Tiles Majumbani',
      description: 'Wataalamu wetu wanafunga tiles kwenye sakafu, kuta, na ngazi za nyumba yako kwa umakini mkubwa na muundo wa kisasa.',
      icon: Layout,
      color: 'bg-red-50'
    },
    {
      id: 2,
      title: 'Ushauri wa Muundo',
      description: 'Tunatoa ushauri wa kitaalamu kuhusu muundo na aina ya tiles zinazoendana na nafasi ya nyumba yako (Design Consultation).',
      icon: Ruler,
      color: 'bg-stone-100'
    }
  ];

  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Huduma Zetu</div>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 uppercase tracking-tight">Huduma za Ufungaji na Ushauri</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Tunajikita katika kuleta urembo wa tiles ndani ya nyumba yako kupitia ufungaji wa kitaalamu na ushauri wa kisasa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-3xl border border-stone-200 hover:border-red-500/20 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={service.id === 2 ? 'text-red-600' : 'text-stone-700'} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4 uppercase">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
