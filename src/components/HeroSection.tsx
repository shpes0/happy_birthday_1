import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('event-info');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-3xl p-8 shadow-2xl">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/50 shadow-xl bg-gradient-to-br from-yellow-400 to-orange-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764385827316-c903082e0d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwd2ludGVyfGVufDF8fHx8MTc2NDQ5NDcwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Именинник"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl animate-spin" style={{ animationDuration: '3s' }}>✨</span>
                  <h1 className="text-5xl md:text-7xl text-white drop-shadow-lg">
                    Приглашение на
                  </h1>
                  <span className="text-4xl animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>✨</span>
                </div>
                <h2 className="text-6xl md:text-8xl text-yellow-300 drop-shadow-lg animate-pulse">
                  День Рождения! 🎉
                </h2>
                <p className="text-2xl md:text-3xl text-white/90 mt-6">
                  Будет ярко, весело и очень по-зимнему! ❄️
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToNext}
            className="group mt-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-110 shadow-xl flex items-center gap-3 mx-auto"
          >
            <span className="text-xl">Листай вниз</span>
            <span className="text-2xl animate-bounce group-hover:translate-y-1 transition-transform">⬇️</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </section>
  );
}
