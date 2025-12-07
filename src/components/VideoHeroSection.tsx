export function VideoHeroSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-12">
      {/* Decorative sparkles */}
      <div className="absolute top-24 right-12 text-5xl animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute top-1/3 left-8 text-4xl animate-bounce opacity-60" style={{ animationDelay: '1.2s' }}>🎉</div>
      <div className="absolute bottom-1/4 right-16 text-6xl animate-bounce opacity-50" style={{ animationDelay: '0.8s' }}>🎊</div>

      <div className="max-w-[390px] w-full space-y-8 relative z-10">
        {/* Video placeholder - 60% of screen */}
        <div className="relative w-full aspect-[9/16] max-h-[60vh]">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 via-purple-300/20 to-blue-300/30 rounded-[40px] blur-2xl"></div>
          
          {/* Video container */}
          <div className="relative bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.3)] h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative text-center space-y-4">
              <div className="text-white/40 text-8xl">▶️</div>
              <p className="text-white/60 text-2xl drop-shadow-lg">Видео</p>
            </div>
          </div>

          {/* Decorative particles around video */}
          <div className="absolute -top-4 -right-4 text-3xl animate-spin" style={{ animationDuration: '6s' }}>⭐</div>
          <div className="absolute -bottom-4 -left-4 text-3xl animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>⭐</div>
        </div>

        {/* Title below video */}
        <div className="text-center space-y-6 pt-8">
          <h1 className="text-white text-6xl leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]">
            Приглашение на День Рождения ✨
          </h1>

          {/* Scroll hint */}
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-4 mx-auto pt-6"
          >
            <span className="text-white/90 text-xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              Листай вниз 🎉
            </span>
            <div className="w-9 h-14 border-3 border-white/60 rounded-full flex items-start justify-center p-2 shadow-[0_0_25px_rgba(255,255,255,0.5)]">
              <div className="w-2 h-4 bg-white/90 rounded-full animate-bounce shadow-[0_0_15px_rgba(255,255,255,0.9)]"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
