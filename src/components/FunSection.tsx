export function FunSection() {
  const funFacts = [
    {
      text: 'Будем отрываться до рассвета!',
      emoji: '🎉',
      gradient: 'from-yellow-400 via-orange-500 to-red-500'
    },
    {
      text: 'Горячая еда и ледяные коктейли!',
      emoji: '🍹',
      gradient: 'from-cyan-400 via-blue-500 to-purple-500'
    },
    {
      text: 'Танцы, смех и куча селфи!',
      emoji: '📸',
      gradient: 'from-pink-400 via-fuchsia-500 to-purple-600'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-700 via-purple-700 to-indigo-700"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Large decorative emoji */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-5 animate-spin pointer-events-none" style={{ animationDuration: '30s' }}>
        🎊
      </div>

      <div className="max-w-[390px] w-full px-6 space-y-8 relative z-10">
        {/* Title */}
        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[30px] px-8 py-4 shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-3">
            <h2 className="text-white text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Готовься! 🚀
            </h2>
          </div>
          <p className="text-white/90 text-xl drop-shadow-lg">Тебя ждёт...</p>
        </div>

        {/* Fun fact cards */}
        <div className="space-y-5">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-[1.03]"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${fact.gradient} opacity-90`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-center gap-5 p-6">
                {/* Emoji container */}
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-[25px] flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-5xl drop-shadow-lg">{fact.emoji}</span>
                </div>

                {/* Text */}
                <p className="flex-1 text-white text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="relative mt-8">
          <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[30px] p-6 text-center shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            <p className="text-white text-3xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] animate-pulse">
              Приготовься к незабываемой ночи! ⭐
            </p>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 rounded-[30px] blur-xl -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-800/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
