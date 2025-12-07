import { ImageWithFallback } from './figma/ImageWithFallback';

export function WelcomeScreen() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('info-screen');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden px-5">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-[390px] w-full text-center space-y-8 relative z-10">
        {/* Birthday person photo */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764385827316-c903082e0d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwd2ludGVyfGVufDF8fHx8MTc2NDQ5NDcwNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Именинник"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-white/80 text-sm tracking-wider uppercase">
              Ты приглашён на
            </div>
            <h1 className="text-white text-5xl leading-tight">
              День Рождения
            </h1>
          </div>
          
          <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2">
            <p className="text-white/90 text-sm">
              15 января 2025 • 18:00
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="group mt-12 inline-flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all"
        >
          <span className="text-sm tracking-wide">Листай вниз</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
}
