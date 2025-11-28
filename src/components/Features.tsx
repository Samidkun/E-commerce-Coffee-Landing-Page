import { Leaf, Truck, Award, Coffee } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Leaf,
    title: "100% Organik",
    description: "Semua kopi kami ditanam secara organik tanpa pestisida berbahaya",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description: "Kami memastikan produk sampai dengan cepat dan dalam kondisi terbaik",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description: "Hanya biji kopi berkualitas terbaik yang kami pilih untuk Anda",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Coffee,
    title: "Fresh Roasted",
    description: "Disangrai fresh sesuai pesanan untuk kesegaran maksimal",
    gradient: "from-rose-400 to-pink-500",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-amber-600 tracking-widest text-sm uppercase">Keunggulan Kami</span>
          </div>
          <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl">Mengapa Memilih Kami?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami berkomitmen untuk memberikan pengalaman kopi terbaik dengan standar kualitas tertinggi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Icon with gradient background */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                    <Icon className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent relative z-10`} style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
                  </div>

                  <h3 className="text-gray-900 mb-3 text-xl">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
