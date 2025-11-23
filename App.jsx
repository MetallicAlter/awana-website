import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, ExternalLink, Play, Music, MapPin, Mail, ChevronDown, Menu, X } from 'lucide-react';

// --- CONFIGURATION ---
// These match the filenames you uploaded exactly.
const ASSETS = {
  hero: "Copy of 2025-04-04 13.08.43.jpeg", 
  bio: "Copy of IMG_4457.jpeg", 
  gallery: [
    "Copy of 2025-04-04 13.48.13.jpeg",
    "Copy of 2025-04-04 13.56.21.jpeg",
    "Copy of 2025-04-04 14.10.10.jpeg",
    "Copy of 2025-04-04 16.12.08.jpeg",
    "Copy of 2025-04-04 16.31.41.jpeg",
    "Copy of IMG_4917.jpeg",
    "Copy of IMG_4856.jpeg",
    "Copy of 2025-04-04 16.28.28.jpeg"
  ]
};

const SOCIALS = {
  instagram: "https://www.instagram.com/awanamusicc/",
  spotify: "https://open.spotify.com/artist/6BhAozySxYP3OGRFCcRQmu",
  youtube: "https://www.youtube.com/@AWANAMUSICC"
};

const VENUES = [
  "Thanks & Beyond", "Dirty Good", "Habibi", "Buen", "Chica", 
  "Playboy Club", "Danza Jardin", "Selah", "Norman, JW Marriott", 
  "Brown Cortile", "Shishi", "Blaq", "Slique", "Yalla", "Loca", "The Coach"
];

const SHARED_STAGE = [
  { name: "Fred Lenix", venue: "Habibi, Delhi" },
  { name: "Zafrir", venue: "Slique, Delhi" },
  { name: "Sistek", venue: "Chica, Delhi" }
];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-[0.2em] uppercase z-50 relative cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Awana
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase text-gray-300">
            {['Bio', 'Music', 'Tour', 'Gallery', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-xl tracking-widest uppercase animate-fade-in">
            {['Bio', 'Music', 'Tour', 'Gallery', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-gray-400">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Fallback */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 z-10" />
          <img 
            src={ASSETS.hero} 
            alt="AWANA DJ Set" 
            className="w-full h-full object-cover object-top opacity-90"
            onError={(e) => {
              e.target.onerror = null; 
              // High-quality techno/club atmosphere fallback
              e.target.src = "https://images.unsplash.com/photo-1571266028243-371695039989?auto=format&fit=crop&q=80"; 
            }}
          />
        </div>

        <div className="relative z-20 text-center px-4 animate-fade-in-up">
          <h2 className="text-sm md:text-lg tracking-[0.5em] mb-4 text-gray-300 uppercase">New Delhi Based</h2>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-2 mix-blend-overlay">
            AWANA
          </h1>
          <h3 className="text-xl md:text-2xl tracking-[0.3em] font-light text-gray-200">
            DJ / PRODUCER
          </h3>
          
          <div className="mt-12 flex justify-center gap-6">
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="p-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href={SOCIALS.spotify} target="_blank" rel="noreferrer" className="p-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-110">
              <Music size={20} />
            </a>
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="p-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-110">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={() => scrollToSection('bio')}>
          <ChevronDown className="text-white/50 hover:text-white transition-colors" size={32} />
        </div>
      </header>

      {/* --- BIOGRAPHY --- */}
      <section id="bio" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gray-800/30 rotate-2 group-hover:rotate-0 transition-transform duration-500 rounded-sm"></div>
              <img 
                src={ASSETS.bio} 
                alt="Eshan Awana" 
                className="relative w-full h-auto object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80";
                }}
              />
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-white"></span>
                <span className="text-sm tracking-[0.3em] uppercase text-gray-400">Biography</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Seamless blends of <span className="font-bold text-white">Melodic Techno</span> & House.
              </h2>
              
              <div className="text-gray-400 leading-relaxed space-y-6 text-lg font-light">
                <p>
                  Eshan Awana, known as <strong className="text-white font-medium">AWANA</strong>, is a Delhi-based DJ and producer known for his hypnotic rhythms, deep basslines, and masterful crowd control. AWANA crafts unforgettable sets that keep dance floors moving all night.
                </p>
                <p>
                  His performances are immersive journeys, driven by passion and precision. Off the decks, AWANA is approachable and professional, committed to creating lasting memories for every audience.
                </p>
                <p>
                  He has played at top venues across Delhi NCR and shared stages with respected international names.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GENRE & SOUND --- */}
      <section id="music" className="py-20 border-y border-white/10 bg-neutral-900/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Genre Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Genre</h3>
                <div className="flex flex-wrap gap-3">
                  {['Melodic Techno', 'House Music', 'Progressive'].map(tag => (
                    <span key={tag} className="px-4 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Signature Sound</h3>
                <p className="text-2xl font-light text-white leading-relaxed italic">
                  "Electrifying, melodic, seamless transitions, heavy bass lines, hypnotic textures and soulful journey."
                </p>
              </div>
            </div>

            {/* Spotify Embed Placeholder */}
            <div className="bg-black border border-white/10 p-8 flex flex-col justify-center items-center relative overflow-hidden group rounded-lg hover:border-green-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-black pointer-events-none"></div>
              <Music size={48} className="text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 z-10">Listen on Spotify</h3>
              <p className="text-gray-400 text-center mb-6 text-sm z-10">Stream the latest releases and mixes.</p>
              <a 
                href={SOCIALS.spotify} 
                target="_blank" 
                rel="noreferrer"
                className="z-10 px-8 py-3 bg-[#1DB954] text-black font-bold rounded-full uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(29,185,84,0.4)] transition-all flex items-center gap-2"
              >
                <Play size={16} fill="black" /> Listen Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIVE PERFORMANCES --- */}
      <section id="tour" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
             <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Touring</span>
             <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Live Performances</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Venues List */}
            <div className="bg-neutral-900/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-xl border-b border-white/20 pb-4 mb-6 font-light uppercase tracking-widest text-gray-300 flex items-center gap-2">
                <MapPin size={18} /> Top Venues
              </h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-2">
                {VENUES.map((venue, i) => (
                  <li key={i} className="flex items-center text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full mr-3"></span>
                    {venue}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shared Stage */}
            <div className="bg-neutral-900/20 p-8 rounded-lg border border-white/5">
              <h3 className="text-xl border-b border-white/20 pb-4 mb-6 font-light uppercase tracking-widest text-gray-300">Shared Stage With</h3>
              <div className="space-y-8">
                {SHARED_STAGE.map((artist, i) => (
                  <div key={i} className="group flex items-start pl-2 border-l-2 border-white/10 hover:border-purple-500 transition-colors">
                    <div className="ml-4">
                      <h4 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">{artist.name}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{artist.venue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
             <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Visuals</span>
             <h2 className="text-4xl font-bold uppercase tracking-tight">Gallery</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {ASSETS.gallery.map((src, index) => (
              <div key={index} className="break-inside-avoid relative group overflow-hidden cursor-pointer rounded-sm" onClick={() => setActiveImage(src)}>
                <img 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    // Cycling through a few fallback images for variety if local ones fail
                    const fallbacks = [
                        '1574169208507-843761948716',
                        '1598387993441-a364f854c3e1',
                        '1470225620780-dba8ba36b745',
                        '1514525253440-b393452e8770'
                    ];
                    e.target.src = `https://images.unsplash.com/photo-${fallbacks[index % fallbacks.length]}?auto=format&fit=crop&q=80`;
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="border border-white/50 px-4 py-2 uppercase text-xs tracking-widest text-white hover:bg-white hover:text-black transition-colors">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <footer id="contact" className="bg-black py-24 border-t border-white/10 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            BOOKINGS
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto font-light">
            For bookings, remixes, and collaboration inquiries.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
             <a href="mailto:info@awanamusic.com" className="group flex items-center justify-center gap-3 text-xl border border-white/10 py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all">
               <Mail size={20} className="text-gray-400 group-hover:text-black transition-colors"/> info@awanamusic.com
             </a>
             <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 text-xl border border-white/10 py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all">
               <Instagram size={20} className="text-gray-400 group-hover:text-black transition-colors"/> @awanamusicc
             </a>
          </div>

          <div className="flex justify-center gap-6 mb-12 text-gray-500">
              <a href={SOCIALS.instagram} className="hover:text-white transition-colors"><Instagram size={20}/></a>
              <a href={SOCIALS.spotify} className="hover:text-white transition-colors"><Music size={20}/></a>
              <a href={SOCIALS.youtube} className="hover:text-white transition-colors"><Youtube size={20}/></a>
          </div>

          <div className="text-xs text-gray-700 uppercase tracking-widest">
            © {new Date().getFullYear()} AWANA Music. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={() => setActiveImage(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={40} />
          </button>
          <img 
            src={activeImage} 
            alt="Fullscreen" 
            className="max-h-[85vh] max-w-full object-contain shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
          <div className="absolute bottom-6 left-0 w-full text-center text-white/50 text-sm tracking-widest uppercase pointer-events-none">
              Tap anywhere to close
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        html {
            scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
