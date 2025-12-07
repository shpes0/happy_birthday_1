export function FunScreen() {
  const funFacts = [
    {
      text: 'Будем веселиться до упаду!',
      emoji: '🎉',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      text: 'Горячая еда и холодные напитки!',
      emoji: '🍕',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      text: 'Атмосфера теплее, чем батареи в декабре!',
      emoji: '🔥',
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 relative overflow-hidden px-5 py-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-9xl opacity-10 animate-spin" style={{ animationDuration: '20s' }}>
        🎪
      </div>

      <div className="max-w-[390px] w-full space-y-8 relative z-10">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-white text-4xl mb-2">
            Готовься! 🚀
          </h2>
          <p className="text-white/80 text-sm">
            Вот что тебя ждёт...
          </p>
        </div>

        {/* Fun fact cards */}
        <div className="space-y-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${fact.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-3xl">{fact.emoji}</span>
                </div>
                <p className="text-gray-800 text-lg flex-1">
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">
          <p className="text-white text-xl">
            Приготовься к незабываемой ночи! ⭐
          </p>
        </div>
      </div>
    </section>
  );
}
