export function EventInfoSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Decorative elements */}
      <div className="absolute top-32 right-16 text-6xl opacity-15 animate-spin" style={{ animationDuration: '20s' }}>🎁</div>
      <div className="absolute bottom-40 left-12 text-7xl opacity-10 animate-bounce">🎈</div>

      <div className="max-w-[390px] w-full space-y-10 relative z-10">
        {/* Main info card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-pink-200/10 to-purple-200/10 rounded-[45px] blur-2xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/25 rounded-[45px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.25)]">
            <h2 className="text-white text-5xl text-center mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
              Важно знать 📌
            </h2>

            <div className="space-y-6 text-white/95">
              {/* When */}
              <div className="space-y-2">
                <p className="text-2xl drop-shadow-md">
                  <span className="text-pink-200">Когда:</span> 15 декабря 2025
                </p>
              </div>

              {/* Where */}
              <div className="space-y-2">
                <p className="text-2xl drop-shadow-md">
                  <span className="text-purple-200">Где:</span> адрес укажем позже
                </p>
              </div>

              {/* Program */}
              <div className="space-y-3 pt-4">
                <p className="text-2xl text-blue-200 drop-shadow-md">Программа:</p>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">🍽️</span>
                    <span className="drop-shadow-md">Вкусный ужин</span>
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">🎮</span>
                    <span className="drop-shadow-md">Весёлые активности</span>
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">📸</span>
                    <span className="drop-shadow-md">Фото зона</span>
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">🎵</span>
                    <span className="drop-shadow-md">Музыка</span>
                  </li>
                  <li className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">✨</span>
                    <span className="drop-shadow-md">Сюрпризы</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photo placeholders */}
        <div className="flex gap-4 justify-center pt-4">
          <div className="w-44 h-44 bg-white/10 backdrop-blur-sm border-2 border-white/25 rounded-[35px] shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center">
            <span className="text-white/30 text-5xl">📷</span>
          </div>
          <div className="w-44 h-44 bg-white/10 backdrop-blur-sm border-2 border-white/25 rounded-[35px] shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center">
            <span className="text-white/30 text-5xl">📷</span>
          </div>
        </div>
      </div>
    </section>
  );
}
