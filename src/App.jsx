import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, ExternalLink, Play, Music, MapPin, Mail, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

// --- CONFIGURATION & ASSETS ---
// These paths match the exact filenames you uploaded.
// We assume these images are located in a folder named "assets" in your public directory.
const ASSETS = {
  hero: "/assets/Copy of 2025-04-04 13.08.43.jpeg", 
  bio: "/assets/Copy of IMG_4457.jpeg", 
  gallery: [
    "/assets/Copy of 2025-04-04 13.48.13.jpeg",
    "/assets/Copy of 2025-04-04 13.56.21.jpeg",
    "/assets/Copy of 2025-04-04 14.10.10.jpeg",
    "/assets/Copy of 2025-04-04 16.12.08.jpeg",
    "/assets/Copy of 2025-04-04 16.31.41.jpeg",
    "/assets/Copy of IMG_4917.jpeg",
    "/assets/Copy of IMG_4856.jpeg",
    "/assets/Copy of 2025-04-04 16.28.28.jpeg"
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
  { name: "Sistek", venue: "Chica, Delhi" },
  { name: "Vomee & Ankytrixx", venue: "Playboy, Delhi" },
  { name: "Techpanda & Kenzani", venue: "Selah" }
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-3xl font-bold tracking-[0.2em] uppercase z-50 relative cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            Awana
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">
            {['Bio', 'Music', 'Tour', 'Gallery', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50 text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl tracking-widest uppercase transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {['Bio', 'Music', 'Tour', 'Gallery', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-purple-400 transition-colors">
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-70" />
          <img 
            src={ASSETS.hero} 
            alt="AWANA DJ Set" 
            className="w-full h-full object-cover object-top opacity-80 scale-105 animate-slow-zoom"
            onError={(e) => {
              e.target.onerror = null; 
              // Fallback if local image fails
              e.target.src = "https://images.unsplash.com/photo-1571266028243-371695039989?auto=format&fit=crop&q=80"; 
            }}
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-sm md:text-xl tracking-[0.6em] mb-6 text-gray-300 uppercase animate-fade-in-down">New Delhi Based</h2>
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white mb-4 leading-none mix-blend-overlay animate-fade-in-up">
            AWANA
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 animate-width-expand"></div>
          <h3 className="text-lg md:text-2xl tracking-[0.4em] font-light text-gray-200 uppercase animate-fade-in-up delay-100">
            DJ / Producer
          </h3>
          
          <div className="mt-16 flex justify-center gap-8 animate-fade-in-up delay-200">
            {[
              { icon: Instagram, link: SOCIALS.instagram },
              { icon: Music, link: SOCIALS.spotify },
              { icon: Youtube, link: SOCIALS.youtube }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group"
              >
                <social.icon size={24} className="group-hover:stroke-2" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={() => scrollToSection('bio')}>
          <ChevronDown className="text-white/50 hover:text-white transition-colors" size={32} />
        </div>
      </header>

      {/* --- BIOGRAPHY --- */}
      <section id="bio" className="py-32 bg-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900/10 -skew-x-12 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2 relative group perspective-1000">
              <div className="absolute -inset-4 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <img 
                src={ASSETS.bio} 
                alt="Eshan Awana" 
                className="relative w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80";
                }}
              />
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div className="flex items-center gap-4 text-purple-500">
                <span className="h-[2px] w-16 bg-current"></span>
                <span className="text-sm tracking-[0.4em] uppercase font-bold">Biography</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                Seamless blends of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Melodic Techno</span> & House.
              </h2>
              
              <div className="text-gray-400 leading-loose space-y-6 text-lg font-light text-justify">
                <p>
                  Eshan Awana, known as <strong className="text-white font-medium">AWANA</strong>, is a Delhi-based DJ and producer known for his hypnotic rhythms, deep basslines, and masterful crowd control. AWANA crafts unforgettable sets that keep dance floors moving all night.
                </p>
                <p>
                  His performances are immersive journeys, driven by passion and precision. Off the decks, AWANA is approachable and professional, committed to creating lasting memories for every audience.
                </p>
                <p>
                   From intimate clubs to massive stages, he has played at top venues across Delhi NCR and shared stages with respected international names.
                </p>
              </div>

              <div className="pt-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Pioneer_DJ_logo.svg/2560px-Pioneer_DJ_logo.svg.png" alt="Pioneer DJ" className="h-6 opacity-30 invert" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GENRE & SOUND --- */}
      <section id="music" className="py-32 bg-neutral-900 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Genre Info */}
            <div className="space-y-12 order-2 lg:order-1">
              <div>
                <h3 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6 border-l-2 border-purple-500 pl-4">Genre</h3>
                <div className="flex flex-wrap gap-3">
                  {['Melodic Techno', 'House Music', 'Progressive'].map((tag, i) => (
                    <span key={tag} className="px-6 py-3 border border-white/10 bg-white/5 rounded-none text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all cursor-default backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6 border-l-2 border-purple-500 pl-4">Signature Sound</h3>
                <blockquote className="text-3xl font-light text-white leading-relaxed italic border-l border-white/10 pl-8 py-2">
                  "Electrifying, melodic, seamless transitions, heavy bass lines, hypnotic textures and soulful journey."
                </blockquote>
              </div>
            </div>

            {/* Spotify Card */}
            <div className="order-1 lg:order-2 bg-gradient-to-br from-[#1DB954]/10 to-black p-1 rounded-2xl group">
              <div className="bg-black rounded-xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DB954]/20 blur-[60px] rounded-full"></div>
                
                <Music size={64} className="text-[#1DB954] mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                
                <h3 className="text-3xl font-bold mb-3">Latest Releases</h3>
                <p className="text-gray-400 mb-10 text-sm tracking-wide">Stream the latest mixes and tracks on Spotify.</p>
                
                <a 
                  href={SOCIALS.spotify} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#1DB954] text-black font-bold rounded-full uppercase tracking-widest hover:bg-[#1ed760] hover:scale-105 transition-all shadow-[0_0_20px_rgba(29,185,84,0.3)]"
                >
                  <Play size={18} fill="black" /> Listen Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- LIVE PERFORMANCES --- */}
      <section id="tour" className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
             <span className="text-sm tracking-[0.4em] uppercase text-purple-500 mb-4">Touring & Events</span>
             <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Live History</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Venues List - Styled as a Tech Rider/List */}
            <div className="bg-neutral-900/30 p-10 border border-white/5 hover:border-white/20 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <MapPin className="text-gray-400" />
                <h3 className="text-2xl font-light uppercase tracking-[0.2em] text-white">Top Venues</h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-6 gap-x-4">
                {VENUES.map((venue, i) => (
                  <li key={i} className="flex items-start text-sm md:text-base text-gray-400 group">
                    <ArrowRight size={14} className="mr-3 mt-1 text-purple-900 group-hover:text-purple-500 transition-colors" />
                    <span className="group-hover:text-white transition-colors uppercase tracking-wide">{venue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shared Stage - Styled as a Lineup */}
            <div className="bg-neutral-900/30 p-10 border border-white/5 hover:border-white/20 transition-colors duration-500">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <Music className="text-gray-400" />
                <h3 className="text-2xl font-light uppercase tracking-[0.2em] text-white">Shared Stage</h3>
              </div>
              <div className="space-y-8">
                {SHARED_STAGE.map((artist, i) => (
                  <div key={i} className="group relative pl-6 border-l border-white/10 hover:border-purple-500 transition-colors">
                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">{artist.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-[0.15em] mt-1 group-hover:text-gray-300 transition-colors">{artist.venue}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-32 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16 px-2">
            <div>
               <span className="text-sm tracking-[0.4em] uppercase text-purple-500 mb-2 block">Visuals</span>
               <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">Gallery</h2>
            </div>
            <div className="hidden md:block text-right text-gray-500 text-sm tracking-widest uppercase">
              Selected Shots<br/>2024-2025
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {ASSETS.gallery.map((src, index) => (
              <div 
                key={index} 
                className="break-inside-avoid relative group overflow-hidden cursor-pointer" 
                onClick={() => setActiveImage(src)}
              >
                <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    const fallbacks = [
                        '1574169208507-843761948716',
                        '1598387993441-a364f854c3e1',
                        '1470225620780-dba8ba36b745',
                        '1514525253440-b393452e8770'
                    ];
                    e.target.src = `https://images.unsplash.com/photo-${fallbacks[index % fallbacks.length]}?auto=format&fit=crop&q=80`;
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                   <div className="flex items-center gap-2 text-white text-sm uppercase tracking-widest font-bold">
                      <ExternalLink size={16} /> View Full
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <footer id="contact" className="bg-black py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter opacity-90">
            BOOKINGS
          </h2>
          <p className="text-gray-400 mb-16 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            For bookings, remixes, and collaboration inquiries.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-24">
             <a href="mailto:info@awanamusic.com" className="group flex items-center justify-center gap-4 text-lg border border-white/20 bg-white/5 py-5 px-10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">
               <Mail size={20} className="text-gray-400 group-hover:text-black transition-colors"/> 
               <span className="uppercase tracking-widest font-bold">info@awanamusic.com</span>
             </a>
             <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-4 text-lg border border-white/20 bg-white/5 py-5 px-10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">
               <Instagram size={20} className="text-gray-400 group-hover:text-black transition-colors"/> 
               <span className="uppercase tracking-widest font-bold">@awanamusicc</span>
             </a>
          </div>

          <div className="flex justify-center gap-8 mb-12 text-gray-600">
              <a href={SOCIALS.instagram} className="hover:text-white hover:-translate-y-1 transition-all"><Instagram size={24}/></a>
              <a href={SOCIALS.spotify} className="hover:text-[#1DB954] hover:-translate-y-1 transition-all"><Music size={24}/></a>
              <a href={SOCIALS.youtube} className="hover:text-red-600 hover:-translate-y-1 transition-all"><Youtube size={24}/></a>
          </div>

          <div className="text-xs text-gray-800 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} AWANA Music. New Delhi.
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl animate-fade-in" onClick={() => setActiveImage(null)}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors transform hover:rotate-90 duration-300">
            <X size={48} />
          </button>
          <img 
            src={activeImage} 
            alt="Fullscreen" 
            className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes widthExpand {
          from { width: 0; }
          to { width: 6rem; }
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-width-expand {
          animation: widthExpand 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slow-zoom {
          animation: slowZoom 20s linear infinite alternate;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        
        html { scroll-behavior: smooth; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { bg: #000; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>
    </div>
  );
};

export default App;
