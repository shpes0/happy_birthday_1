import { useState } from 'react';

interface GuestData {
  id: number;
  name: string;
  gender: 'male' | 'female' | null;
  food: string;
  alcohol: string;
}

export function SurveySection() {
  const [guests, setGuests] = useState<GuestData[]>([
    { id: 1, name: '', gender: null, food: '', alcohol: '' }
  ]);

  const [showFoodFor, setShowFoodFor] = useState<number | null>(null);
  const [showAlcoholFor, setShowAlcoholFor] = useState<number | null>(null);

  const detectGender = (name: string): 'male' | 'female' => {
    const lastChar = name.trim().toLowerCase().slice(-1);
    return (lastChar === 'а' || lastChar === 'я') ? 'female' : 'male';
  };

  const updateGuestName = (id: number, name: string) => {
    setGuests(guests.map(g => {
      if (g.id === id) {
        const gender = name ? detectGender(name) : null;
        return { ...g, name, gender };
      }
      return g;
    }));
  };

  const selectFood = (guestId: number, food: string) => {
    setGuests(guests.map(g => g.id === guestId ? { ...g, food } : g));
    setShowFoodFor(null);
  };

  const selectAlcohol = (guestId: number, alcohol: string) => {
    setGuests(guests.map(g => g.id === guestId ? { ...g, alcohol } : g));
    setShowAlcoholFor(null);
  };

  const addGuest = () => {
    setGuests([...guests, {
      id: Date.now(),
      name: '',
      gender: null,
      food: '',
      alcohol: ''
    }]);
  };

  const removeGuest = (id: number) => {
    if (guests.length > 1) {
      setGuests(guests.filter(g => g.id !== id));
    }
  };

  const handleSubmit = () => {
    console.log('Guest data:', guests);
    alert('🎉 Спасибо! Ждём тебя на празднике!\n\n(Данные будут отправлены в Telegram-бот)');
  };

  const foodOptions = [
    { id: 'hot', label: 'Горячее', emoji: '🍗', gradient: 'from-orange-500 to-red-500' },
    { id: 'cold', label: 'Холодное', emoji: '🥗', gradient: 'from-cyan-500 to-blue-500' },
    { id: 'salads', label: 'Салаты', emoji: '🥒', gradient: 'from-green-500 to-emerald-500' }
  ];

  const alcoholLevels = [
    { 
      id: 'none', 
      label: 'Не пью',
      emoji: '😇',
      gradient: 'from-green-400 to-emerald-500'
    },
    { 
      id: 'moderate', 
      label: 'Пью немного',
      emoji: '😊',
      gradient: 'from-yellow-400 to-orange-500'
    },
    { 
      id: 'party', 
      label: 'Пью много',
      emoji: '🥳',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-700"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[390px] mx-auto px-6 space-y-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[30px] px-8 py-4 shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-3">
            <h2 className="text-white text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Твои данные 📝
            </h2>
          </div>
          <p className="text-white/90 text-lg drop-shadow-lg">Помоги организовать идеальный вечер</p>
        </div>

        {/* Guest cards */}
        {guests.map((guest, index) => (
          <div 
            key={guest.id}
            className="bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-[35px] p-7 shadow-[0_0_50px_rgba(255,255,255,0.2)] space-y-6"
          >
            {/* Guest header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                  <span className="text-white text-xl drop-shadow-md">{index + 1}</span>
                </div>
                <h3 className="text-white text-xl drop-shadow-md">Гость {index + 1}</h3>
              </div>
              {guests.length > 1 && (
                <button
                  onClick={() => removeGuest(guest.id)}
                  className="text-white/60 hover:text-white transition-colors text-xl"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Name input */}
            <div className="space-y-3">
              <label className="block text-white/90 text-sm drop-shadow-md">
                Твоё имя
              </label>
              <input
                type="text"
                value={guest.name}
                onChange={(e) => updateGuestName(guest.id, e.target.value)}
                placeholder="Введи своё имя"
                className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-[20px] px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-lg"
              />
            </div>

            {/* Show food & alcohol sections after name is entered */}
            {guest.name && (
              <>
                {/* Food selection */}
                <div className="space-y-3">
                  <label className="block text-white/90 text-sm drop-shadow-md">
                    Выбери еду
                  </label>
                  
                  {!guest.food ? (
                    <button
                      onClick={() => setShowFoodFor(showFoodFor === guest.id ? null : guest.id)}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-[20px] px-6 py-4 transition-all shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] text-lg"
                    >
                      {showFoodFor === guest.id ? 'Закрыть ▲' : 'Выбрать еду ▼'}
                    </button>
                  ) : (
                    <div className="bg-white/25 backdrop-blur-sm border-2 border-white/40 rounded-[20px] px-6 py-4 flex items-center justify-between shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      <span className="text-white text-lg drop-shadow-md">
                        {foodOptions.find(f => f.id === guest.food)?.emoji}{' '}
                        {foodOptions.find(f => f.id === guest.food)?.label}
                      </span>
                      <button
                        onClick={() => {
                          setGuests(guests.map(g => g.id === guest.id ? { ...g, food: '' } : g));
                        }}
                        className="text-white/70 hover:text-white text-sm"
                      >
                        Изменить
                      </button>
                    </div>
                  )}

                  {/* Food options */}
                  {showFoodFor === guest.id && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      {foodOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => selectFood(guest.id, option.id)}
                          className={`w-full group relative overflow-hidden rounded-[25px] shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02]`}
                        >
                          <div className={`bg-gradient-to-r ${option.gradient} p-5 flex items-center gap-4`}>
                            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-[20px] flex items-center justify-center shadow-lg">
                              <span className="text-4xl">{option.emoji}</span>
                            </div>
                            <span className="text-white text-xl flex-1 text-left drop-shadow-md">
                              {option.label}
                            </span>
                            <span className="text-white text-2xl">→</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Alcohol selection */}
                {guest.food && (
                  <div className="space-y-3">
                    <label className="block text-white/90 text-sm drop-shadow-md">
                      Уровень алкоголя
                    </label>
                    
                    {!guest.alcohol ? (
                      <button
                        onClick={() => setShowAlcoholFor(showAlcoholFor === guest.id ? null : guest.id)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-[20px] px-6 py-4 transition-all shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] text-lg"
                      >
                        {showAlcoholFor === guest.id ? 'Закрыть ▲' : 'Выбрать уровень ▼'}
                      </button>
                    ) : (
                      <div className="bg-white/25 backdrop-blur-sm border-2 border-white/40 rounded-[20px] px-6 py-4 flex items-center justify-between shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <span className="text-white text-lg drop-shadow-md">
                          {alcoholLevels.find(a => a.id === guest.alcohol)?.emoji}{' '}
                          {alcoholLevels.find(a => a.id === guest.alcohol)?.label}
                        </span>
                        <button
                          onClick={() => {
                            setGuests(guests.map(g => g.id === guest.id ? { ...g, alcohol: '' } : g));
                          }}
                          className="text-white/70 hover:text-white text-sm"
                        >
                          Изменить
                        </button>
                      </div>
                    )}

                    {/* Alcohol options */}
                    {showAlcoholFor === guest.id && (
                      <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        {alcoholLevels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => selectAlcohol(guest.id, level.id)}
                            className="w-full group relative overflow-hidden rounded-[25px] shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02]"
                          >
                            <div className={`bg-gradient-to-r ${level.gradient} p-6 flex items-center justify-between`}>
                              {/* Character placeholder (left) */}
                              <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-4xl">{level.emoji}</span>
                              </div>
                              
                              <span className="text-white text-xl drop-shadow-md">
                                {level.label}
                              </span>
                              
                              {/* Character placeholder (right) */}
                              <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        {/* Action buttons */}
        <div className="space-y-4 pt-4">
          <button
            onClick={addGuest}
            className="w-full bg-white/20 backdrop-blur-lg border-2 border-white/40 hover:bg-white/30 text-white rounded-[25px] px-6 py-5 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 text-lg"
          >
            <span className="text-2xl">➕</span>
            <span className="drop-shadow-md">Добавить ещё гостя</span>
          </button>

          <button
            onClick={handleSubmit}
            className="w-full relative overflow-hidden rounded-[25px] shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] transition-all group"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-5 flex items-center justify-center gap-3 transition-all">
              <span className="text-2xl">📤</span>
              <span className="text-white text-xl drop-shadow-md">Отправить ответы</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Telegram notice */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[20px] p-5 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <p className="text-white/80 text-sm drop-shadow-md">
            💬 Данные будут отправлены в Telegram-бот
          </p>
        </div>
      </div>
    </section>
  );
}
