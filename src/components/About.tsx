import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check, Award } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const benefits = [
    "Kerjasama langsung dengan petani lokal",
    "Proses roasting yang terkontrol",
    "Sertifikasi kualitas internasional",
    "Kemasan yang menjaga kesegaran",
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593034528208-08d7a9eef742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBtb2Rlcm58ZW58MXx8fHwxNzY0MjMxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee preparation"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6" />
                <div className="text-5xl" style={{ fontFamily: 'var(--font-display)' }}>10+</div>
              </div>
              <div className="text-amber-50 text-sm tracking-wide">Tahun Pengalaman</div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="text-amber-600 tracking-widest text-sm uppercase">Cerita Kami</span>
            </div>
            
            <h2 className="text-gray-900 mb-8 text-4xl md:text-5xl">Tentang KopiKita</h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Sejak 2015, kami telah berdedikasi untuk menghadirkan kopi terbaik dari berbagai daerah di Indonesia. Kami bekerja langsung dengan petani lokal untuk memastikan setiap biji kopi yang kami jual adalah yang terbaik.
            </p>
            
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Dengan proses seleksi yang ketat dan roasting yang sempurna, kami memastikan setiap cangkir kopi memberikan pengalaman yang tak terlupakan.
            </p>

            <div className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Pelajari Lebih Lanjut</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
