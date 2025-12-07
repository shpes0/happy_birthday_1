export function InfoScreen() {
  const infoItems = [
    {
      icon: '📅',
      label: 'Дата',
      value: '15 января 2025',
      subtext: 'Суббота'
    },
    {
      icon: '⏰',
      label: 'Время',
      value: '18:00',
      subtext: 'Начало вечера'
    },
    {
      icon: '📍',
      label: 'Адрес',
      value: 'ул. Праздничная, 25',
      subtext: 'Банкетный зал, 2 этаж'
    }
  ];

  return (
    <section 
      id="info-screen" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 relative overflow-hidden px-5 py-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

      <div className="max-w-[390px] w-full space-y-8 relative z-10">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-white text-4xl mb-2">
            Когда и где
          </h2>
          <p className="text-white/80 text-sm">
            Важная информация
          </p>
        </div>

        {/* Info cards */}
        <div className="space-y-4">
          {infoItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-gray-500 text-xs mb-1">{item.label}</div>
                  <div className="text-gray-900 text-lg mb-1">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dress code hint */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 text-center">
          <p className="text-gray-700 text-sm">
            <span className="text-base mr-1">✨</span>
            Дресс-код: яркие зимние наряды
          </p>
        </div>
      </div>
    </section>
  );
}
