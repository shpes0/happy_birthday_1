import { PhotoPlaceholder } from './PhotoPlaceholder';

export function InfoSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      {/* Gradient background - smooth continuation */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600"></div>
      
      {/* Top transition blend */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-pink-600/80 via-purple-600/60 to-transparent pointer-events-none"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-12 w-72 h-72 bg-yellow-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-12 w-80 h-80 bg-blue-400/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-16 text-7xl opacity-20 animate-spin" style={{ animationDuration: '20s' }}>🎁</div>
      <div className="absolute bottom-40 left-16 text-8xl opacity-15 animate-bounce">🎈</div>

      <div className="max-w-[390px] w-full px-6 space-y-12 relative z-10">
        {/* Main message */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-pink-200/15 to-blue-200/15 rounded-[50px] blur-2xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[50px] p-10 shadow-[0_0_80px_rgba(255,255,255,0.35)]">
            <h2 className="text-white text-6xl leading-tight text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
              Будет ярко, весело и незабываемо! ❄️✨
            </h2>
          </div>
        </div>

        {/* Photo placeholders */}
        <div className="flex gap-4 items-center justify-between">
          <PhotoPlaceholder size="large" />
          <PhotoPlaceholder size="medium" />
        </div>

        {/* Decorative sparkle text */}
        <div className="text-center space-y-4">
          <div className="inline-block bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-white/30 rounded-[35px] px-8 py-5 shadow-[0_0_40px_rgba(236,72,153,0.5)]">
            <p className="text-white text-2xl drop-shadow-lg">
              Готовься к незабываемому вечеру! 🎊
            </p>
          </div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-700/70 via-purple-700/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
