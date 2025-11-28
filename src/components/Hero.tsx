import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzY0MzMzMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Coffee beans background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-amber-900/40"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-100 text-sm tracking-wide">Premium Coffee Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-8 text-5xl md:text-7xl"
          >
            Nikmati Kopi Terbaik dari Nusantara
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 mb-10 text-lg md:text-xl leading-relaxed"
          >
            Kami menghadirkan kopi pilihan dari berbagai daerah di Indonesia. Dari biji kopi berkualitas premium hingga roasted beans yang sempurna, temukan cita rasa kopi yang Anda cintai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
              <span className="relative z-10">Belanja Sekarang</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="group relative bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-12 mt-16 pt-16 border-t border-white/10"
          >
            <div>
              <div className="text-4xl text-amber-400 mb-2" style={{ fontFamily: 'var(--font-display)' }}>10+</div>
              <div className="text-gray-300 text-sm tracking-wide">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl text-amber-400 mb-2" style={{ fontFamily: 'var(--font-display)' }}>50+</div>
              <div className="text-gray-300 text-sm tracking-wide">Varietas Kopi</div>
            </div>
            <div>
              <div className="text-4xl text-amber-400 mb-2" style={{ fontFamily: 'var(--font-display)' }}>10K+</div>
              <div className="text-gray-300 text-sm tracking-wide">Pelanggan Puas</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
