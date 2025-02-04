import React, { useState } from 'react';
import { Instagram, MessageCircle, User, Mail, MapPin, X } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1586074299757-dc655f18518c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1612451469466-c01c1a4c1929?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581742988284-8e825c3e2ed9?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542277531356-271d6d49aad4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598371839765-c53ff464428d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598371839597-e48082b76c67?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598371839519-741caf767fc7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598371839873-8f791b0c5ca8?auto=format&fit=crop&q=80",
    "https://imgur.com/a/lEepsfp",
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")'
          }}
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
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg font-medium">WhatsApp</span>
            </a>
            <a 
              href="https://instagram.com/tattooartist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-lg font-medium">Instagram</span>
            </a>
            <a 
              href="mailto:contato@tattooartist.com"
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
        <p className="text-sm">© 2024 João Silva Tattoo. Todos os direitos reservados.</p>
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