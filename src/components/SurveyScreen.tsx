import { useState } from 'react';

interface GuestData {
  id: number;
  name: string;
  gender: 'male' | 'female' | null;
  food: string;
  alcohol: string;
}

export function SurveyScreen() {
  const [guests, setGuests] = useState<GuestData[]>([
    { id: 1, name: '', gender: null, food: '', alcohol: '' }
  ]);

  const [showFoodFor, setShowFoodFor] = useState<number | null>(null);
  const [showAlcoholFor, setShowAlcoholFor] = useState<number | null>(null);

  const detectGender = (name: string): 'male' | 'female' => {
    // Simple Russian name gender detection
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
    alert('Спасибо! Данные сохранены! 🎉\n\n(Интеграция с Telegram-ботом будет добавлена позже)');
  };

  const foodOptions = [
    { id: 'hot', label: 'Горячее', emoji: '🍖' },
    { id: 'salads', label: 'Салаты', emoji: '🥗' },
    { id: 'cold', label: 'Холодное', emoji: '❄️' }
  ];

  const alcoholLevels = [
    { id: 'none', label: 'Не пью', gradient: 'from-green-400 to-emerald-500' },
    { id: 'moderate', label: 'Пью немного', gradient: 'from-yellow-400 to-orange-500' },
    { id: 'party', label: 'Пью много', gradient: 'from-red-400 to-pink-500' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden px-5 py-20">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-[390px] mx-auto space-y-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-white text-4xl mb-2">
            Твои данные
          </h2>
          <p className="text-white/80 text-sm">
            Помоги организовать идеальный вечер
          </p>
        </div>

        {/* Guest cards */}
        {guests.map((guest, index) => (
          <div 
            key={guest.id}
            className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl space-y-5"
          >
            {/* Guest header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white">{index + 1}</span>
                </div>
                <h3 className="text-gray-800">Гость {index + 1}</h3>
              </div>
              {guests.length > 1 && (
                <button
                  onClick={() => removeGuest(guest.id)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Step 1: Name */}
            <div className="space-y-2">
              <label className="block text-gray-600 text-sm">
                Твоё имя
              </label>
              <input
                type="text"
                value={guest.name}
                onChange={(e) => updateGuestName(guest.id, e.target.value)}
                placeholder="Введи своё имя"
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              />
            </div>

            {/* Show food & alcohol blocks only if name is entered */}
            {guest.name && (
              <>
                {/* Step 2: Food selection block */}
                <div className="space-y-2">
                  <label className="block text-gray-600 text-sm">
                    Выбери еду
                  </label>
                  
                  {!guest.food ? (
                    <button
                      onClick={() => setShowFoodFor(showFoodFor === guest.id ? null : guest.id)}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-5 py-4 transition-all shadow-lg hover:shadow-xl"
                    >
                      {showFoodFor === guest.id ? 'Закрыть' : 'Открыть варианты'}
                    </button>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 flex items-center justify-between">
                      <span className="text-gray-800">
                        {foodOptions.find(f => f.id === guest.food)?.emoji}{' '}
                        {foodOptions.find(f => f.id === guest.food)?.label}
                      </span>
                      <button
                        onClick={() => {
                          setGuests(guests.map(g => g.id === guest.id ? { ...g, food: '' } : g));
                        }}
                        className="text-gray-400 hover:text-gray-600 text-sm"
                      >
                        Изменить
                      </button>
                    </div>
                  )}

                  {/* Food options popup */}
                  {showFoodFor === guest.id && (
                    <div className="bg-white rounded-2xl border-2 border-purple-200 shadow-xl p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      {foodOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => selectFood(guest.id, option.id)}
                          className="w-full bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 rounded-xl px-5 py-4 transition-all flex items-center gap-3 group"
                        >
                          <span className="text-3xl">{option.emoji}</span>
                          <span className="text-gray-800 group-hover:text-purple-700 flex-1 text-left">
                            {option.label}
                          </span>
                          <span className="text-gray-400 group-hover:text-purple-500">→</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Step 3: Alcohol level block */}
                {guest.food && (
                  <div className="space-y-2">
                    <label className="block text-gray-600 text-sm">
                      Уровень алкоголя
                    </label>
                    
                    {!guest.alcohol ? (
                      <button
                        onClick={() => setShowAlcoholFor(showAlcoholFor === guest.id ? null : guest.id)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-5 py-4 transition-all shadow-lg hover:shadow-xl"
                      >
                        {showAlcoholFor === guest.id ? 'Закрыть' : 'Открыть варианты'}
                      </button>
                    ) : (
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 flex items-center justify-between">
                        <span className="text-gray-800">
                          {alcoholLevels.find(a => a.id === guest.alcohol)?.label}
                        </span>
                        <button
                          onClick={() => {
                            setGuests(guests.map(g => g.id === guest.id ? { ...g, alcohol: '' } : g));
                          }}
                          className="text-gray-400 hover:text-gray-600 text-sm"
                        >
                          Изменить
                        </button>
                      </div>
                    )}

                    {/* Alcohol options popup */}
                    {showAlcoholFor === guest.id && (
                      <div className="bg-white rounded-2xl border-2 border-purple-200 shadow-xl p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        {alcoholLevels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => selectAlcohol(guest.id, level.id)}
                            className="w-full group rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                          >
                            <div className={`bg-gradient-to-r ${level.gradient} p-6 flex items-center justify-between`}>
                              {/* Placeholder for character image */}
                              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/50 rounded-full"></div>
                              </div>
                              <span className="text-white text-lg flex-1 text-center">
                                {level.label}
                              </span>
                              <div className="w-16 h-16"></div>
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
        <div className="space-y-3 pt-4">
          <button
            onClick={addGuest}
            className="w-full bg-white/90 backdrop-blur-lg hover:bg-white border-2 border-white/50 text-purple-600 rounded-2xl px-6 py-4 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span className="text-xl">➕</span>
            <span>Добавить ещё гостя</span>
          </button>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl px-6 py-4 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span className="text-xl">📤</span>
            <span>Отправить ответы</span>
          </button>
        </div>

        {/* Telegram notice */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
          <p className="text-gray-600 text-sm">
            💬 Интеграция с Telegram-ботом
          </p>
        </div>
      </div>
    </section>
  );
}
