export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="space-y-6">
        <div className="text-6xl mb-4">🎉🎂🎈</div>
        <h1 className="text-7xl tracking-tight text-pink-600 mb-4">
          You're Invited!
        </h1>
        <p className="text-4xl text-purple-600 mb-8">
          Let's Celebrate! 🥳
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-4 max-w-md mx-auto">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">📅</span>
              <p className="text-2xl text-gray-800">Saturday, December 14th</p>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">⏰</span>
              <p className="text-2xl text-gray-800">3:00 PM</p>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">📍</span>
              <p className="text-2xl text-gray-800">The Party House</p>
            </div>
            
            <p className="text-xl text-gray-600 mt-4">
              123 Celebration Street
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
