export function StorySection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Decorative snowflakes */}
      <div className="absolute top-24 left-12 text-4xl animate-bounce opacity-40" style={{ animationDelay: '0.6s' }}>❄️</div>
      <div className="absolute top-1/3 right-16 text-5xl animate-bounce opacity-35" style={{ animationDelay: '1.3s' }}>❄️</div>
      <div className="absolute bottom-1/4 left-20 text-4xl animate-bounce opacity-40" style={{ animationDelay: '0.9s' }}>❄️</div>

      <div className="max-w-[390px] w-full space-y-10 relative z-10">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-white text-5xl drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] inline-block bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[35px] px-8 py-5 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            Немного истории 💫
          </h2>
        </div>

        {/* Before/After photos */}
        <div className="flex gap-5 justify-center items-start">
          {/* Then */}
          <div className="flex-1 space-y-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-[35px] blur-xl"></div>
              <div className="relative aspect-square bg-white/10 backdrop-blur-sm border-2 border-white/25 rounded-[35px] shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden">
                <span className="text-white/30 text-6xl">📷</span>
              </div>
            </div>
            <p className="text-white text-xl text-center drop-shadow-md">Тогда</p>
          </div>

          {/* Now */}
          <div className="flex-1 space-y-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-[35px] blur-xl"></div>
              <div className="relative aspect-square bg-white/10 backdrop-blur-sm border-2 border-white/25 rounded-[35px] shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center overflow-hidden">
                <span className="text-white/30 text-6xl">📷</span>
              </div>
            </div>
            <p className="text-white text-xl text-center drop-shadow-md">Сейчас</p>
          </div>
        </div>

        {/* Decorative text */}
        <div className="text-center pt-6">
          <p className="text-white/80 text-xl italic drop-shadow-lg">
            Время летит незаметно... 🕐✨
          </p>
        </div>
      </div>
    </section>
  );
}
