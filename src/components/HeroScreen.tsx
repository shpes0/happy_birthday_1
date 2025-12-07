export function HeroScreen() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col items-center relative overflow-hidden py-8 px-6">
      <div className="max-w-[390px] w-full flex flex-col items-center relative z-10 pt-8">
        {/* Title - positioned at very top with small margin */}
        <div className="text-center mb-12">
          <h1 
            className="text-6xl leading-tight"
            style={{
              fontFamily: "'Righteous', cursive",
              background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))',
              letterSpacing: '0.02em'
            }}
          >
            Приглашение на<br />
            День Рождения
          </h1>
        </div>
      </div>

      {/* Scroll hint - positioned at bottom of section */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-3"
        >
          <span 
            className="text-xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6)) drop-shadow(0 4px 16px rgba(0, 0, 0, 0.4))'
            }}
          >
            Листай вниз 👇
          </span>
          <div className="w-9 h-12 border-3 border-pink-500 rounded-full flex items-start justify-center p-1.5 shadow-[0_4px_20px_rgba(236,72,153,0.5)] bg-black/20 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gradient-to-b from-pink-400 to-orange-500 rounded-full animate-bounce shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
          </div>
        </button>
      </div>
    </section>
  );
}