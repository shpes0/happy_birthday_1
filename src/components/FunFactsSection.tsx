export function FunFactsSection() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 text-9xl animate-spin" style={{ animationDuration: '10s' }}>🎪</div>
        <div className="absolute bottom-1/4 left-10 text-7xl animate-bounce" style={{ animationDuration: '3s' }}>🎭</div>
        <div className="absolute top-1/2 right-10 text-8xl animate-pulse">🎸</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl text-center text-white mb-6 drop-shadow-lg">
            Готовься! 🚀
          </h2>
          <p className="text-2xl text-center text-white/90 mb-16">
            Вот что тебя ждёт...
          </p>

          <div className="space-y-6">
            <div className="group bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-yellow-300 to-orange-500 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center w-20 h-20">
                  <span className="text-4xl">🎊</span>
                </div>
                <div className="flex-1">
                  <p className="text-3xl md:text-4xl text-white">
                    Будем веселиться до упаду! 🎉
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-red-400 to-pink-500 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center w-20 h-20">
                  <span className="text-4xl">🔥</span>
                </div>
                <div className="flex-1">
                  <p className="text-3xl md:text-4xl text-white">
                    Горячая еда, холодные напитки! 🍕🥤
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform flex items-center justify-center w-20 h-20">
                  <span className="text-4xl">❄️</span>
                </div>
                <div className="flex-1">
                  <p className="text-3xl md:text-4xl text-white">
                    Атмосфера будет ещё теплее, чем батареи в декабре! 🔥
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl px-8 py-6 shadow-2xl animate-bounce">
              <p className="text-3xl md:text-4xl text-yellow-300">
                Приготовься к незабываемой ночи! ⭐
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
