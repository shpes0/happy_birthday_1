import { useState } from 'react';

interface Guest {
  id: number;
  name: string;
  selectedCategory: string;
  selectedDish: string;
}

export function FoodSelectionBlock() {
  const [guests, setGuests] = useState<Guest[]>([
    { id: 1, name: '', selectedCategory: '', selectedDish: '' }
  ]);

  const [expandedCategory, setExpandedCategory] = useState<{ guestId: number; category: string } | null>(null);

  const updateGuestName = (id: number, name: string) => {
    setGuests(guests.map(g => g.id === id ? { ...g, name } : g));
  };

  const selectCategory = (guestId: number, category: string) => {
    setExpandedCategory({ guestId, category });
  };

  const selectDish = (guestId: number, category: string, dish: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, selectedCategory: category, selectedDish: dish } : g
    ));
    setExpandedCategory(null);
  };

  const foodCategories = [
    { 
      id: 'hot', 
      label: 'Горячее', 
      emoji: '🍽️',
      gradient: 'from-orange-500 to-red-500',
      dishes: ['Паста', 'Стейк', 'Курица', 'Не хочу']
    },
    { 
      id: 'cold', 
      label: 'Холодное', 
      emoji: '❄️',
      gradient: 'from-cyan-500 to-blue-500',
      dishes: ['Закуски', 'Сырная тарелка', 'Не хочу']
    },
    { 
      id: 'salads', 
      label: 'Салаты', 
      emoji: '🥗',
      gradient: 'from-green-500 to-emerald-500',
      dishes: ['Цезарь', 'Овощной', 'Греческий', 'Не хочу']
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600"></div>
      
      {/* Transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-indigo-700/80 via-purple-700/60 to-transparent pointer-events-none"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-blue-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-[390px] mx-auto px-6 space-y-8 relative z-10">
        {/* Title */}
        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[35px] px-8 py-5 shadow-[0_0_50px_rgba(255,255,255,0.3)] mb-4">
            <h2 className="text-white text-5xl drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              Выбери еду 🍴
            </h2>
          </div>
        </div>

        {guests.map((guest, index) => (
          <div key={guest.id} className="space-y-6">
            {/* Guest card */}
            <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[40px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.25)]">
              {/* Guest header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.6)]">
                  <span className="text-white text-xl drop-shadow-md">{index + 1}</span>
                </div>
                <h3 className="text-white text-2xl drop-shadow-md">Гость {index + 1}</h3>
              </div>

              {/* Name input */}
              <div className="space-y-3 mb-6">
                <label className="block text-white/90 text-sm drop-shadow-md">Твоё имя</label>
                <input
                  type="text"
                  value={guest.name}
                  onChange={(e) => updateGuestName(guest.id, e.target.value)}
                  placeholder="Введи своё имя"
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-[25px] px-6 py-4 text-white text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                />
              </div>

              {/* Show food categories only if name is entered */}
              {guest.name && (
                <div className="space-y-4">
                  {/* Selected dish display */}
                  {guest.selectedDish && (
                    <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-white/40 rounded-[25px] p-5 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">
                            {foodCategories.find(c => c.id === guest.selectedCategory)?.emoji}
                          </span>
                          <div>
                            <p className="text-white/70 text-xs">Выбрано:</p>
                            <p className="text-white text-lg drop-shadow-md">{guest.selectedDish}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setGuests(guests.map(g => 
                              g.id === guest.id ? { ...g, selectedCategory: '', selectedDish: '' } : g
                            ));
                          }}
                          className="text-white/70 hover:text-white text-sm"
                        >
                          Изменить
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Category buttons */}
                  {!guest.selectedDish && (
                    <div className="space-y-3">
                      {foodCategories.map((category) => (
                        <div key={category.id}>
                          <button
                            onClick={() => selectCategory(guest.id, category.id)}
                            className={`w-full relative overflow-hidden rounded-[30px] shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02] ${
                              expandedCategory?.guestId === guest.id && expandedCategory?.category === category.id
                                ? 'ring-2 ring-white/50'
                                : ''
                            }`}
                          >
                            <div className={`bg-gradient-to-r ${category.gradient} p-6 flex items-center gap-4`}>
                              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-[22px] flex items-center justify-center shadow-lg">
                                <span className="text-4xl">{category.emoji}</span>
                              </div>
                              <span className="text-white text-2xl flex-1 text-left drop-shadow-md">
                                {category.label}
                              </span>
                              <span className="text-white text-xl">
                                {expandedCategory?.guestId === guest.id && expandedCategory?.category === category.id ? '▲' : '▼'}
                              </span>
                            </div>
                          </button>

                          {/* Expanded dish list */}
                          {expandedCategory?.guestId === guest.id && expandedCategory?.category === category.id && (
                            <div className="mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                              <div className="bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[25px] p-4 space-y-2">
                                {category.dishes.map((dish) => (
                                  <button
                                    key={dish}
                                    onClick={() => selectDish(guest.id, category.id, dish)}
                                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-[20px] px-5 py-4 text-white text-lg transition-all hover:scale-[1.02] text-left"
                                  >
                                    {dish}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-800/60 via-indigo-700/40 to-transparent pointer-events-none"></div>
    </section>
  );
}
