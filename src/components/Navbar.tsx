import { Coffee, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Coffee className="w-9 h-9 text-amber-400" />
              <div className="absolute inset-0 blur-md bg-amber-400/30"></div>
            </div>
            <span className="text-2xl text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
              KopiKita
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group">
              <span>Beranda</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#products" className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group">
              <span>Produk</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group">
              <span>Tentang</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-white/90 hover:text-amber-400 transition-all duration-300 relative group">
              <span>Kontak</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 group">
              <ShoppingCart className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col gap-5">
              <a
                href="#home"
                className="text-white/90 hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#products"
                className="text-white/90 hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-amber-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
