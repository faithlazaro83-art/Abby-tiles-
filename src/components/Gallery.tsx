import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      url: '/IMG-20260907-WA0009.jpg',
      caption: 'Kazi iliyokamilika — Sakafu ya ndani yenye tiles za marble zenye kung\'aa'
    },
    {
      url: '/IMG-20260907-WA0018.jpg',
      caption: 'Fundi akiendelea na ufungaji wa tiles za nje (outdoor tiles)'
    },
    {
      url: '/IMG-20260907-WA0013.jpg',
      caption: 'Ufungaji wa tiles za marble kwenye ngazi kwa ustadi mkubwa'
    },
    {
      url: '/IMG-20260907-WA0011.jpg',
      caption: 'Hatua za ufungaji wa tiles na maandalizi ya usawa wa sakafu'
    },
    {
      url: '/IMG-20260907-WA0008.jpg',
      caption: 'Ufungaji wa tiles za marble ukutani kwa muundo wa kisasa'
    },
    {
      url: '/IMG-20260907-WA0006.jpg',
      caption: 'Maandalizi na vifaa vya kazi eneo la mradi kabla ya kuanza'
    },
    {
      url: '/IMG-20260907-WA0017.jpg',
      caption: 'Muonekano wa karibu wa tiles za marble zilizofungwa kwa usahihi'
    },
    {
      url: '/IMG-20260907-WA0016.jpg',
      caption: 'Mchakato wa ufungaji wa tiles za ngazi za nje'
    },
    {
      url: '/IMG-20260907-WA0010.jpg',
      caption: 'Fundi akikagua ufungaji wa tiles kwenye sakafu ya nje'
    },
    {
      url: '/IMG-20260907-WA0007.jpg',
      caption: 'Eneo la kazi likiwa tayari kwa hatua ya kumalizia'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Kazi Zetu</div>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 uppercase tracking-tight">Matunzio ya Kazi</h2>
          <p className="text-lg text-stone-600 leading-relaxed font-medium">
            Tazama baadhi ya miradi tuliyoitekeleza kwa weledi na ubora wa hali ya juu kote Tanzania.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group break-inside-avoid overflow-hidden rounded-3xl"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-bold leading-snug">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
