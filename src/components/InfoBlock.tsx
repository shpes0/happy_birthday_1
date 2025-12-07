export function InfoBlock() {
  return (
    <section 
      id="info-block"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24"
    >
      {/* Gradient background continuation */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600"></div>
      
      {/* Glowing clouds */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-pink-600/80 via-purple-600/60 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 right-8 w-64 h-64 bg-yellow-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-8 w-72 h-72 bg-blue-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Decorative elements */}
      <div className="absolute top-24 right-12 text-6xl opacity-20 animate-spin" style={{ animationDuration: '15s' }}>🎁</div>
      <div className="absolute bottom-32 left-12 text-7xl opacity-15 animate-bounce">🎈</div>

      <div className="max-w-[390px] w-full px-6 space-y-12 relative z-10">
        {/* Main message card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-pink-200/15 to-blue-200/15 rounded-[45px] blur-xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[45px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.3)]">
            <h3 className="text-white text-5xl leading-tight text-center mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
              Будет ярко, весело и незабываемо! ❄️
            </h3>
            
            <p className="text-white/90 text-xl text-center leading-relaxed drop-shadow-lg">
              Приглашаю тебя на праздник, который запомнится надолго! Будем танцевать, смеяться и создавать незабываемые воспоминания в атмосфере зимнего волшебства.
            </p>
          </div>
        </div>

        {/* Details cards */}
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-white/30 rounded-[35px] p-6 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-[25px] flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.6)]">
                <span className="text-4xl">⏰</span>
              </div>
              <div>
                <p className="text-white/70 text-sm drop-shadow-md">Начало</p>
                <p className="text-white text-2xl drop-shadow-lg">18:00</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 backdrop-blur-xl border-2 border-white/30 rounded-[35px] p-6 shadow-[0_0_40px_rgba(147,51,234,0.4)]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-[25px] flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.6)]">
                <span className="text-4xl">📍</span>
              </div>
              <div className="flex-1">
                <p className="text-white/70 text-sm drop-shadow-md">Адрес</p>
                <p className="text-white text-xl drop-shadow-lg">ул. Праздничная, 25</p>
                <p className="text-white/80 text-sm drop-shadow-md">Банкетный зал, 2 этаж</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress code */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 rounded-[30px] blur-xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[30px] p-6 text-center">
            <p className="text-white text-xl drop-shadow-lg">
              <span className="text-3xl mr-2">✨</span>
              Дресс-код: яркие праздничные наряды
              <span className="text-3xl ml-2">🎄</span>
            </p>
          </div>
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-indigo-700/60 via-purple-700/40 to-transparent pointer-events-none"></div>
    </section>
  );
}
