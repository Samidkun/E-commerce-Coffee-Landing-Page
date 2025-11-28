import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "Arabica Gayo",
    origin: "Aceh",
    price: "Rp 85.000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWNhJTIwY29mZmVlfGVufDF8fHx8MTc2NDMxMTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Kopi arabica premium dengan cita rasa yang kaya dan aroma yang menggugah selera",
  },
  {
    id: 2,
    name: "Robusta Lampung",
    origin: "Lampung",
    price: "Rp 65.000",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1663125365447-2ce9b657dab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2J1c3RhJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzY0MzE2NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Robusta pilihan dengan body yang kuat dan kafein tinggi untuk energi ekstra",
  },
  {
    id: 3,
    name: "Specialty Blend",
    origin: "Toraja",
    price: "Rp 95.000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1609050471053-8636409f9f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWV8ZW58MXx8fHwxNzY0MjcyODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Blend spesial dengan kombinasi sempurna untuk pengalaman kopi yang istimewa",
  },
  {
    id: 4,
    name: "Arabica Java",
    origin: "Jawa Barat",
    price: "Rp 78.000",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593034528208-08d7a9eef742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBtb2Rlcm58ZW58MXx8fHwxNzY0MjMxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Kopi arabica klasik dengan keseimbangan rasa yang sempurna",
  },
];

export function Products() {
  return (
    <section id="products" className="py-32 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-amber-600 tracking-widest text-sm uppercase">Koleksi Premium</span>
          </div>
          <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl">Produk Unggulan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Jelajahi koleksi kopi premium kami yang dipilih langsung dari petani lokal terbaik di seluruh Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden h-80">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-gray-900">{product.rating}</span>
                  </div>

                  {/* Quick add button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="p-6">
                  <div className="text-amber-600 mb-2 text-sm tracking-wide uppercase">{product.origin}</div>
                  <h3 className="text-gray-900 mb-3 text-xl">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-900 text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                      {product.price}
                    </span>
                    <button className="text-amber-600 hover:text-amber-700 transition-colors text-sm tracking-wide">
                      Lihat Detail →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Lihat Semua Produk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
