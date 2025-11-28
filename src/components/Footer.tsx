import { Coffee, Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Coffee className="w-10 h-10 text-amber-400" />
                <div className="absolute inset-0 blur-lg bg-amber-400/30"></div>
              </div>
              <span className="text-white text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                KopiKita
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Menghadirkan kopi terbaik dari Nusantara untuk pengalaman yang tak terlupakan.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="group w-11 h-11 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 transition-all duration-300 border border-gray-700 hover:border-amber-500"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-11 h-11 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 transition-all duration-300 border border-gray-700 hover:border-amber-500"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group w-11 h-11 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 transition-all duration-300 border border-gray-700 hover:border-amber-500"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white mb-6 text-lg">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Beranda
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Produk
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Kontak
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white mb-6 text-lg">Produk</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Arabica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Robusta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Blend Spesial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Kopi Bubuk
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white mb-6 text-lg">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Jl. Kopi Nusantara No. 123, Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  +62 812-3456-7890
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  info@kopikita.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-3 text-xl">Berlangganan Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Dapatkan update terbaru tentang produk dan promo spesial kami
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 KopiKita. Semua hak dilindungi undang-undang.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
