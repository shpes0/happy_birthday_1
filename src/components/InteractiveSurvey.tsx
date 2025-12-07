import { useState } from 'react';

interface GuestData {
  id: number;
  name: string;
  gender: 'male' | 'female' | null;
  food: string[];
  alcohol: string;
}

export function InteractiveSurvey() {
  const [guests, setGuests] = useState<GuestData[]>([
    { id: 1, name: '', gender: null, food: [], alcohol: '' }
  ]);

  const [expandedFoodGuest, setExpandedFoodGuest] = useState<number | null>(null);

  const updateGuestName = (id: number, name: string) => {
    setGuests(guests.map(g => {
      if (g.id === id) {
        // Simple gender detection based on name ending
        const gender = name.endsWith('а') || name.endsWith('я') ? 'female' : 'male';
        return { ...g, name, gender };
      }
      return g;
    }));
  };

  const toggleFoodSelection = (guestId: number, foodItem: string) => {
    setGuests(guests.map(g => {
      if (g.id === guestId) {
        const hasItem = g.food.includes(foodItem);
        return {
          ...g,
          food: hasItem 
            ? g.food.filter(f => f !== foodItem)
            : [...g.food, foodItem]
        };
      }
      return g;
    }));
  };

  const updateAlcohol = (id: number, level: string) => {
    setGuests(guests.map(g => g.id === id ? { ...g, alcohol: level } : g));
  };

  const addGuest = () => {
    setGuests([...guests, {
      id: Date.now(),
      name: '',
      gender: null,
      food: [],
      alcohol: ''
    }]);
  };

  const removeGuest = (id: number) => {
    if (guests.length > 1) {
      setGuests(guests.filter(g => g.id !== id));
      if (expandedFoodGuest === id) {
        setExpandedFoodGuest(null);
      }
    }
  };

  const handleSubmit = () => {
    console.log('Guest data:', guests);
    alert('Спасибо! Данные отправлены в Telegram-бот! 🎉');
  };

  const foodCategories = [
    { id: 'hot', label: 'Горячее', emoji: '🍖' },
    { id: 'cold', label: 'Холодное', emoji: '🥗' },
    { id: 'salads', label: 'Салаты', emoji: '🥙' }
  ];

  const alcoholLevels = [
    { 
      id: 'none', 
      label: 'Не пью',
      maleEmoji: '😇',
      femaleEmoji: '😇'
    },
    { 
      id: 'moderate', 
      label: 'Пью немного',
      maleEmoji: '😊',
      femaleEmoji: '😊'
    },
    { 
      id: 'party', 
      label: 'Пью много',
      maleEmoji: '🥳',
      femaleEmoji: '🥳'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-rose-400 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[390px] mx-auto px-5 py-12">
        <div className="space-y-8">
          {guests.map((guest, index) => (
            <div 
              key={guest.id}
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl space-y-6"
            >
              {/* Guest Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-gray-800">Гость {index + 1}</h3>
                </div>
                {guests.length > 1 && (
                  <button
                    onClick={() => removeGuest(guest.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* STEP 1: Name Input */}
              <div className="space-y-3">
                <label className="block text-gray-700 text-sm">
                  Твоё имя
                </label>
                <input
                  type="text"
                  value={guest.name}
                  onChange={(e) => updateGuestName(guest.id, e.target.value)}
                  placeholder="Введи своё имя"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
                />
                
                {/* Avatar Placeholder */}
                {guest.name && (
                  <div className="flex justify-center pt-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">
                        {guest.gender === 'female' ? '👩' : '👨'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* STEP 2 & 3: Show only if name is entered */}
              {guest.name && (
                <>
                  {/* STEP 2: Food Selection */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setExpandedFoodGuest(
                        expandedFoodGuest === guest.id ? null : guest.id
                      )}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-5 py-4 transition-all shadow-lg hover:shadow-xl flex items-center justify-between"
                    >
                      <span>Выбери еду</span>
                      <span className="text-xl">
                        {expandedFoodGuest === guest.id ? '▲' : '▼'}
                      </span>
                    </button>

                    {expandedFoodGuest === guest.id && (
                      <div className="bg-gray-50 rounded-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {foodCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => toggleFoodSelection(guest.id, category.id)}
                            className={`w-full px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                              guest.food.includes(category.id)
                                ? 'bg-purple-100 border-2 border-purple-400 shadow-md'
                                : 'bg-white border border-gray-200 hover:border-purple-200'
                            }`}
                          >
                            <span className="text-2xl">{category.emoji}</span>
                            <span className={`flex-1 text-left ${
                              guest.food.includes(category.id)
                                ? 'text-purple-700'
                                : 'text-gray-700'
                            }`}>
                              {category.label}
                            </span>
                            {guest.food.includes(category.id) && (
                              <span className="text-purple-500">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}

                    {guest.food.length > 0 && (
                      <div className="text-sm text-gray-600 px-2">
                        Выбрано: {guest.food.map(f => 
                          foodCategories.find(c => c.id === f)?.label
                        ).join(', ')}
                      </div>
                    )}
                  </div>

                  {/* STEP 3: Alcohol Level */}
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm">
                      Уровень алкоголя
                    </label>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {alcoholLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => updateAlcohol(guest.id, level.id)}
                          className={`group relative rounded-2xl p-3 transition-all ${
                            guest.alcohol === level.id
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg scale-105'
                              : 'bg-gray-50 border border-gray-200 hover:border-purple-200'
                          }`}
                        >
                          {/* Character Placeholder */}
                          <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center transition-all ${
                            guest.alcohol === level.id
                              ? 'bg-white/30'
                              : 'bg-gray-200'
                          }`}>
                            <span className="text-3xl">
                              {guest.gender === 'female' 
                                ? level.femaleEmoji 
                                : level.maleEmoji
                              }
                            </span>
                          </div>
                          
                          <div className={`text-xs text-center ${
                            guest.alcohol === level.id
                              ? 'text-white'
                              : 'text-gray-700'
                          }`}>
                            {level.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={addGuest}
              className="w-full bg-white/90 backdrop-blur-lg border-2 border-white/50 hover:bg-white text-purple-600 rounded-2xl px-6 py-4 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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

          {/* Telegram Bot Notice */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
            <p className="text-gray-600 text-sm">
              💬 Данные будут отправлены в Telegram-бот
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
