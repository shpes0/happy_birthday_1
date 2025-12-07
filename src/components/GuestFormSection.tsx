import { useState } from 'react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface Guest {
  id: number;
  name: string;
  gender: 'male' | 'female' | null;
  selectedFoodCategory: string;
  selectedFood: string;
  selectedAlcoholLevel: string;
  selectedDrink: string;
}

export function GuestFormSection() {
  const [guests, setGuests] = useState<Guest[]>([
    { 
      id: 1, 
      name: '', 
      gender: null, 
      selectedFoodCategory: '', 
      selectedFood: '', 
      selectedAlcoholLevel: '', 
      selectedDrink: '' 
    }
  ]);

  const [expandedFoodMenu, setExpandedFoodMenu] = useState<{ guestId: number; category: string } | null>(null);
  const [showAlcoholMenu, setShowAlcoholMenu] = useState<number | null>(null);
  const [showDrinksMenu, setShowDrinksMenu] = useState<number | null>(null);

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

  const selectFoodCategory = (guestId: number, category: string) => {
    setExpandedFoodMenu({ guestId, category });
  };

  const selectFood = (guestId: number, category: string, food: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, selectedFoodCategory: category, selectedFood: food } : g
    ));
    setExpandedFoodMenu(null);
  };

  const selectAlcoholLevel = (guestId: number, level: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, selectedAlcoholLevel: level, selectedDrink: '' } : g
    ));
    setShowAlcoholMenu(null);
    
    if (level === 'moderate' || level === 'party') {
      setShowDrinksMenu(guestId);
    } else {
      setShowDrinksMenu(null);
    }
  };

  const selectDrink = (guestId: number, drink: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, selectedDrink: drink } : g
    ));
    setShowDrinksMenu(null);
  };

  const addGuest = () => {
    const newGuest = {
      id: Date.now(),
      name: '',
      gender: null,
      selectedFoodCategory: '',
      selectedFood: '',
      selectedAlcoholLevel: '',
      selectedDrink: ''
    };
    setGuests([...guests, newGuest]);
  };

  const foodCategories = [
    {
      id: 'hot',
      label: 'Горячее',
      emoji: '🍽️',
      gradient: 'from-orange-500 to-red-500',
      items: ['Паста', 'Стейк', 'Курица', 'Рыба', 'Не хочу']
    },
    {
      id: 'cold',
      label: 'Холодное',
      emoji: '❄️',
      gradient: 'from-cyan-500 to-blue-500',
      items: ['Закуски', 'Сырная тарелка', 'Фрукты', 'Не хочу']
    },
    {
      id: 'salads',
      label: 'Салаты',
      emoji: '🥗',
      gradient: 'from-green-500 to-emerald-500',
      items: ['Цезарь', 'Овощной', 'Греческий', 'Оливье', 'Не хочу']
    }
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
      emoji: '🙂',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'party',
      label: 'Пью много',
      emoji: '🤪',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const drinks = [
    { id: 'wine', label: 'Вино', emoji: '🍷' },
    { id: 'champagne', label: 'Шампанское', emoji: '🥂' },
    { id: 'cocktails', label: 'Коктейли', emoji: '🍹' },
    { id: 'beer', label: 'Пиво', emoji: '🍺' },
    { id: 'whiskey', label: 'Виски', emoji: '🥃' },
    { id: 'none', label: 'Не хочу', emoji: '🚫' }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700"></div>
      
      {/* Top transition blend */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-700/80 via-purple-700/60 to-transparent pointer-events-none"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-12 w-80 h-80 bg-pink-400/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-12 w-72 h-72 bg-blue-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-[390px] mx-auto px-6 space-y-8 relative z-10">
        {/* Photo placeholder at top */}
        <div className="flex justify-center">
          <PhotoPlaceholder size="wide" />
        </div>

        {guests.map((guest, index) => (
          <div key={guest.id} className="space-y-6">
            {/* Guest card */}
            <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[40px] p-8 shadow-[0_0_70px_rgba(255,255,255,0.3)]">
              {/* Guest header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.7)]">
                  <span className="text-white text-2xl drop-shadow-md">{index + 1}</span>
                </div>
                <h3 className="text-white text-3xl drop-shadow-md">Гость #{index + 1}</h3>
              </div>

              {/* Name input */}
              <div className="space-y-3 mb-8">
                <input
                  type="text"
                  value={guest.name}
                  onChange={(e) => updateGuestName(guest.id, e.target.value)}
                  placeholder="Твоё имя"
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-[25px] px-7 py-5 text-white text-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                />
              </div>

              {guest.name && (
                <>
                  {/* Food selection */}
                  <div className="space-y-5 mb-8">
                    <h4 className="text-white text-xl drop-shadow-md">🍽️ Выбор еды</h4>
                    
                    {guest.selectedFood && (
                      <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-white/40 rounded-[25px] p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">
                              {foodCategories.find(c => c.id === guest.selectedFoodCategory)?.emoji}
                            </span>
                            <div>
                              <p className="text-white/70 text-xs">Выбрано:</p>
                              <p className="text-white text-lg drop-shadow-md">{guest.selectedFood}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setGuests(guests.map(g => 
                                g.id === guest.id ? { ...g, selectedFoodCategory: '', selectedFood: '' } : g
                              ));
                            }}
                            className="text-white/70 hover:text-white text-sm"
                          >
                            Изменить
                          </button>
                        </div>
                      </div>
                    )}

                    {!guest.selectedFood && (
                      <div className="space-y-3">
                        {foodCategories.map((category) => (
                          <div key={category.id}>
                            <button
                              onClick={() => selectFoodCategory(guest.id, category.id)}
                              className="w-full relative overflow-hidden rounded-[30px] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:scale-[1.02]"
                            >
                              <div className={`bg-gradient-to-r ${category.gradient} p-6 flex items-center gap-4`}>
                                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-[22px] flex items-center justify-center shadow-lg">
                                  <span className="text-4xl">{category.emoji}</span>
                                </div>
                                <span className="text-white text-2xl flex-1 text-left drop-shadow-md">
                                  {category.label}
                                </span>
                                <span className="text-white text-xl">
                                  {expandedFoodMenu?.guestId === guest.id && expandedFoodMenu?.category === category.id ? '▲' : '▼'}
                                </span>
                              </div>
                            </button>

                            {expandedFoodMenu?.guestId === guest.id && expandedFoodMenu?.category === category.id && (
                              <div className="mt-3 bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[25px] p-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                {category.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => selectFood(guest.id, category.id, item)}
                                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-[20px] px-6 py-4 text-white text-lg transition-all hover:scale-[1.02] text-left"
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Alcohol selection */}
                  {guest.selectedFood && (
                    <div className="space-y-5">
                      <h4 className="text-white text-xl drop-shadow-md">🍷 Выбор алкоголя</h4>

                      {guest.selectedAlcoholLevel && guest.selectedDrink && (
                        <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-white/40 rounded-[25px] p-5">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white/70 text-xs mb-1">Выбрано:</p>
                              <p className="text-white text-lg drop-shadow-md">
                                {alcoholLevels.find(l => l.id === guest.selectedAlcoholLevel)?.emoji}{' '}
                                {alcoholLevels.find(l => l.id === guest.selectedAlcoholLevel)?.label}
                              </p>
                              {guest.selectedDrink !== 'confirmed' && (
                                <p className="text-white/90 text-md mt-1">
                                  {drinks.find(d => d.id === guest.selectedDrink)?.emoji}{' '}
                                  {drinks.find(d => d.id === guest.selectedDrink)?.label}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => {
                                setGuests(guests.map(g => 
                                  g.id === guest.id ? { ...g, selectedAlcoholLevel: '', selectedDrink: '' } : g
                                ));
                              }}
                              className="text-white/70 hover:text-white text-sm"
                            >
                              Изменить
                            </button>
                          </div>
                        </div>
                      )}

                      {!guest.selectedAlcoholLevel && (
                        <div className="space-y-3">
                          {alcoholLevels.map((level) => (
                            <button
                              key={level.id}
                              onClick={() => selectAlcoholLevel(guest.id, level.id)}
                              className="w-full relative overflow-hidden rounded-[35px] shadow-[0_0_45px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.5)] transition-all hover:scale-[1.02]"
                            >
                              <div className={`bg-gradient-to-r ${level.gradient} p-8 flex items-center justify-between`}>
                                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                  <span className="text-5xl">{level.emoji}</span>
                                </div>
                                <span className="text-white text-2xl drop-shadow-md">
                                  {level.label}
                                </span>
                                <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {showDrinksMenu === guest.id && !guest.selectedDrink && (
                        <div className="bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[30px] p-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                          <p className="text-white/90 text-lg text-center drop-shadow-md mb-4">
                            Какой напиток предпочитаешь?
                          </p>
                          {drinks.map((drink) => (
                            <button
                              key={drink.id}
                              onClick={() => selectDrink(guest.id, drink.id)}
                              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-[22px] px-6 py-5 transition-all hover:scale-[1.02] flex items-center gap-4"
                            >
                              <div className="w-14 h-14 bg-white/20 rounded-[18px] flex items-center justify-center">
                                <span className="text-3xl">{drink.emoji}</span>
                              </div>
                              <span className="text-white text-xl flex-1 text-left drop-shadow-md">
                                {drink.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {guest.selectedAlcoholLevel === 'none' && !guest.selectedDrink && (
                        <div className="text-center">
                          {setTimeout(() => {
                            setGuests(guests.map(g => 
                              g.id === guest.id && !g.selectedDrink ? { ...g, selectedDrink: 'confirmed' } : g
                            ));
                          }, 100) && null}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Photo placeholder between guests */}
            {index === 0 && (
              <div className="flex justify-end">
                <PhotoPlaceholder size="medium" />
              </div>
            )}
          </div>
        ))}

        {/* Add guest button */}
        <button
          onClick={addGuest}
          className="w-full bg-white/15 backdrop-blur-xl border-2 border-white/40 hover:bg-white/25 text-white rounded-[30px] px-8 py-6 transition-all shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center justify-center gap-4 text-2xl"
        >
          <span className="text-3xl">➕</span>
          <span className="drop-shadow-md">Добавить гостя</span>
        </button>

        {/* Photo placeholders at bottom */}
        <div className="flex gap-4 justify-center pt-8">
          <PhotoPlaceholder size="small" />
          <PhotoPlaceholder size="medium" />
        </div>
      </div>

      {/* Bottom decorative blur */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/50 via-pink-800/30 to-transparent pointer-events-none"></div>
    </section>
  );
}
