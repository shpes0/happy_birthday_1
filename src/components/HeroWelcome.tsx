export function HeroWelcome() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('info-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-shift"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Sparkles */}
      <div className="absolute top-10 right-20 text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute top-1/3 left-10 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>🎉</div>
      <div className="absolute bottom-1/4 right-1/4 text-7xl animate-bounce" style={{ animationDelay: '1.5s' }}>🎊</div>

      <div className="max-w-[390px] w-full px-6 text-center space-y-8 relative z-10">
        {/* Main content card */}
        <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[40px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.3)] relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[40px] pointer-events-none"></div>
          
          <div className="relative space-y-6">
            {/* Star decoration */}
            <div className="flex justify-center gap-4 text-4xl mb-4">
              <span className="animate-spin" style={{ animationDuration: '3s' }}>⭐</span>
              <span className="animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>⭐</span>
            </div>

            <h1 className="text-white text-5xl leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Приглашение на
            </h1>
            <h2 className="text-yellow-300 text-6xl leading-tight drop-shadow-[0_0_30px_rgba(253,224,71,0.8)] animate-pulse">
              День Рождения!
            </h2>
            
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-8 py-3 shadow-[0_0_30px_rgba(236,72,153,0.6)]">
              <p className="text-white text-lg">
                15 декабря 2025 🎄
              </p>
            </div>

            <div className="pt-4">
              <p className="text-white/90 text-xl">
                Будет ярко, весело и незабываемо! ❄️
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-3 mx-auto"
        >
          <span className="text-white/80 text-lg drop-shadow-lg">Листай вниз 🎉</span>
          <div className="w-8 h-12 border-3 border-white/60 rounded-full flex items-start justify-center p-2 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            <div className="w-2 h-3 bg-white/90 rounded-full animate-bounce shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
        </button>
      </div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-700/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
