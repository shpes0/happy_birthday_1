import { PhotoPlaceholder } from './PhotoPlaceholder';

export function WelcomeSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 animate-gradient-shift"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-8 w-80 h-80 bg-pink-400/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-32 right-8 w-96 h-96 bg-blue-400/40 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* Floating sparkles */}
      <div className="absolute top-20 right-16 text-6xl animate-bounce opacity-80" style={{ animationDelay: '0.3s' }}>✨</div>
      <div className="absolute top-1/3 left-12 text-5xl animate-bounce opacity-70" style={{ animationDelay: '1s' }}>🎉</div>
      <div className="absolute bottom-1/4 right-1/4 text-7xl animate-bounce opacity-60" style={{ animationDelay: '1.7s' }}>🎊</div>

      <div className="max-w-[390px] w-full px-6 relative z-10 space-y-10">
        {/* Main invitation card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-pink-300/20 to-blue-300/20 rounded-[50px] blur-3xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[50px] p-10 shadow-[0_0_100px_rgba(255,255,255,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[50px] pointer-events-none"></div>
            
            <div className="relative space-y-6 text-center">
              <div className="flex justify-center gap-6 mb-4">
                <span className="text-5xl animate-spin" style={{ animationDuration: '4s' }}>⭐</span>
                <span className="text-5xl animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>⭐</span>
              </div>

              <h1 className="text-white text-6xl leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]">
                Приглашение на
              </h1>
              
              <h2 className="text-yellow-300 text-7xl leading-tight drop-shadow-[0_0_50px_rgba(253,224,71,1)] animate-pulse">
                День Рождения!
              </h2>
              
              <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full px-10 py-5 shadow-[0_0_50px_rgba(236,72,153,0.8)]">
                <p className="text-white text-2xl drop-shadow-lg">
                  15 декабря 2025 🎄
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo placeholders */}
        <div className="flex gap-4 justify-center">
          <PhotoPlaceholder size="medium" />
          <PhotoPlaceholder size="small" className="self-end" />
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-4 mx-auto pt-8"
        >
          <span className="text-white text-xl drop-shadow-[0_0_15px_rgba(255,255,255,1)]">
            Листай вниз 🎉
          </span>
          <div className="w-10 h-14 border-3 border-white/70 rounded-full flex items-start justify-center p-2 shadow-[0_0_30px_rgba(255,255,255,0.6)]">
            <div className="w-2 h-4 bg-white rounded-full animate-bounce shadow-[0_0_20px_rgba(255,255,255,1)]"></div>
          </div>
        </button>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-pink-600/70 via-purple-600/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
