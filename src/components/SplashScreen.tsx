import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              opacity: { duration: 0.8 }
            }}
            className="relative"
          >
            {/* Pulsing glow background */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-red-600 rounded-full blur-[100px]"
            />
            
            <img 
              src="/IMG-20260907-WA0021.jpg" 
              alt="Abby Fundi Tiles TZ Logo" 
              className="w-full max-w-md h-auto rounded-3xl shadow-2xl relative z-10 border-4 border-white/50"
              referrerPolicy="no-referrer"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 text-center relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-2">
                Abby Fundi Tiles TZ
              </h2>
              <div className="h-1 w-24 bg-red-600 mx-auto rounded-full mb-4" />
              <p className="text-stone-500 font-bold uppercase tracking-[0.4em] text-xs">
                Ubora wa Hali ya Juu
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
