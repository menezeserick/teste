import React, { useState } from 'react';
import { Instagram, MessageCircle, User, Mail, MapPin, X } from 'lucide-react';
import cachorro from "../images/cachorro.png";
import minaneotrad from "../images/minaneotrad.png";
import hana from "../images/hana.png";
import leao from "../images/leao.png";
import porco from "../images/porco.png";
import headerImage from '../images/header.png';



function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [cachorro, minaneotrad, hana, porco, leao];


  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <img
          src={headerImage} alt="Header"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
            EDUARDO<br className="sm:hidden" /> MECA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 tracking-wide uppercase">
            Tattoo Artist
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80"
                alt="Tattoo Artist"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sobre Mim</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Colocar aqui o texto que você quer mostrar no seu resumo
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">Curitiba, PR</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <User className="w-6 h-6" />
                <span className="text-lg">25+ Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Trabalhos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((url, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(url)}
              >
                <img
                  src={url}
                  alt={`Tattoo work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ampliar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Entre em Contato</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-xl mx-auto">
            <a
              href="https://wa.me/5541996549105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg font-medium">WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/edumeca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-lg font-medium">Instagram</span>
            </a>
            <a
              href="edumeca@icloud.com"
              className="flex-1 flex items-center justify-center gap-3 bg-zinc-700 hover:bg-zinc-600 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              <span className="text-lg font-medium">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-800/50 text-center text-zinc-400">
        <p className="text-sm">© 2024 Edu Meca Tattoo. Todos os direitos reservados.</p>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Expanded tattoo work"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default App;