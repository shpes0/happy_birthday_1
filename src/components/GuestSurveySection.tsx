import { useState } from 'react';

interface Guest {
  id: number;
  name: string;
  selectedFoodCategories: { [key: string]: string[] }; // Multiple categories with multiple items
  selectedAlcoholLevel: string;
  selectedDrink: string;
}

export function GuestSurveySection() {
  const [guests, setGuests] = useState<Guest[]>([
    { 
      id: 1, 
      name: '', 
      selectedFoodCategories: {},
      selectedAlcoholLevel: '', 
      selectedDrink: '' 
    }
  ]);

  const [expandedFoodCategory, setExpandedFoodCategory] = useState<{ guestId: number; category: string } | null>(null);
  const [showDrinksFor, setShowDrinksFor] = useState<number | null>(null);

  const updateGuestName = (id: number, name: string) => {
    setGuests(guests.map(g => g.id === id ? { ...g, name } : g));
  };

  const toggleFoodCategory = (guestId: number, category: string) => {
    if (expandedFoodCategory?.guestId === guestId && expandedFoodCategory?.category === category) {
      setExpandedFoodCategory(null);
    } else {
      setExpandedFoodCategory({ guestId, category });
    }
  };

  const toggleFoodItem = (guestId: number, category: string, item: string) => {
    setGuests(guests.map(g => {
      if (g.id === guestId) {
        const categoryItems = g.selectedFoodCategories[category] || [];
        const newItems = categoryItems.includes(item)
          ? categoryItems.filter(i => i !== item)
          : [...categoryItems, item];
        
        return {
          ...g,
          selectedFoodCategories: {
            ...g.selectedFoodCategories,
            [category]: newItems
          }
        };
      }
      return g;
    }));
  };

  const selectAlcoholLevel = (guestId: number, level: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, selectedAlcoholLevel: level, selectedDrink: '' } : g
    ));
    
    if (level === 'moderate' || level === 'party') {
      setShowDrinksFor(guestId);
    } else {
      setShowDrinksFor(null);
    }
  };

  const selectDrink = (guestId: number, drink: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, selectedDrink: drink } : g
    ));
    setShowDrinksFor(null);
  };

  const addGuest = () => {
    const newGuest = {
      id: Date.now(),
      name: '',
      selectedFoodCategories: {},
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
      gradient: 'from-orange-400 to-red-500',
      items: ['Блюдо №1', 'Блюдо №2', 'Блюдо №3', 'Не хочу']
    },
    {
      id: 'cold',
      label: 'Холодное',
      emoji: '❄️',
      gradient: 'from-cyan-400 to-blue-500',
      items: ['Закуска №1', 'Закуска №2', 'Не хочу']
    },
    {
      id: 'salads',
      label: 'Салаты',
      emoji: '🥗',
      gradient: 'from-green-400 to-emerald-500',
      items: ['Салат №1', 'Салат №2', 'Не хочу']
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
      emoji: '🥳',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const drinks = [
    'Напиток №1',
    'Напиток №2', 
    'Напиток №3',
    'Не хочу'
  ];

  return (
    <section className="min-h-screen relative overflow-hidden px-6 py-20">
      <div className="max-w-[390px] mx-auto space-y-10 relative z-10">
        {/* Main title */}
        <div className="text-center px-4">
          <h2 className="text-white text-3xl drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] inline-block bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[35px] px-5 py-4 shadow-[0_0_50px_rgba(255,255,255,0.2)] max-w-full">
            Помоги нам подготовиться к вечеру 🍰
          </h2>
        </div>

        {guests.map((guest, index) => (
          <div key={guest.id} className="space-y-8">
            {/* Guest card */}
            <div className="bg-white/8 backdrop-blur-2xl border-2 border-white/20 rounded-[40px] p-8 shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              {/* Guest header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.5)]">
                  <span className="text-white text-xl">{index + 1}</span>
                </div>
                <h3 className="text-white text-3xl drop-shadow-md">Гость #{index + 1}</h3>
              </div>

              {/* Photo placeholder for guest */}
              <div className="w-full aspect-video bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-[30px] shadow-[0_0_25px_rgba(255,255,255,0.1)] flex items-center justify-center mb-6">
                <span className="text-white/30 text-6xl">📷</span>
              </div>

              {/* Name input */}
              <input
                type="text"
                value={guest.name}
                onChange={(e) => updateGuestName(guest.id, e.target.value)}
                placeholder="Твоё имя"
                className="w-full bg-white/15 backdrop-blur-sm border-2 border-white/25 rounded-[25px] px-7 py-5 text-white text-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8"
              />

              {guest.name && (
                <>
                  {/* Food selection */}
                  <div className="space-y-5 mb-8">
                    <h4 className="text-white text-2xl drop-shadow-md">🍽️ Выбор еды</h4>
                    <p className="text-white/70 text-sm drop-shadow-sm">Можешь выбрать несколько категорий</p>
                    
                    {/* Show selected items summary */}
                    {Object.keys(guest.selectedFoodCategories).length > 0 && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-4 space-y-2">
                        {Object.entries(guest.selectedFoodCategories).map(([category, items]) => {
                          if (items.length === 0) return null;
                          const cat = foodCategories.find(c => c.id === category);
                          return (
                            <div key={category} className="text-white/90 text-sm">
                              <span className="text-lg mr-2">{cat?.emoji}</span>
                              <span className="font-medium">{cat?.label}:</span> {items.join(', ')}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="space-y-3">
                      {foodCategories.map((category) => (
                        <div key={category.id}>
                          <button
                            onClick={() => toggleFoodCategory(guest.id, category.id)}
                            className="w-full rounded-[28px] shadow-[0_0_35px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.01]"
                          >
                            <div className={`bg-gradient-to-r ${category.gradient} p-6 rounded-[28px] flex items-center gap-4`}>
                              <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-[20px] flex items-center justify-center">
                                <span className="text-4xl">{category.emoji}</span>
                              </div>
                              <span className="text-white text-2xl flex-1 text-left drop-shadow-md">
                                {category.label}
                              </span>
                              <span className="text-white text-lg">
                                {expandedFoodCategory?.guestId === guest.id && expandedFoodCategory?.category === category.id ? '▲' : '▼'}
                              </span>
                            </div>
                          </button>

                          {expandedFoodCategory?.guestId === guest.id && expandedFoodCategory?.category === category.id && (
                            <div className="mt-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[25px] p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                              {category.items.map((item) => {
                                const isSelected = guest.selectedFoodCategories[category.id]?.includes(item) || false;
                                return (
                                  <button
                                    key={item}
                                    onClick={() => toggleFoodItem(guest.id, category.id, item)}
                                    className={`w-full border rounded-[20px] px-5 py-4 text-white text-lg transition-all hover:scale-[1.01] text-left flex items-center gap-3 ${
                                      isSelected 
                                        ? 'bg-white/25 border-white/40' 
                                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                                    }`}
                                  >
                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                      isSelected ? 'bg-white/30 border-white/50' : 'border-white/30'
                                    }`}>
                                      {isSelected && <span className="text-white text-sm">✓</span>}
                                    </div>
                                    <span>{item}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Alcohol selection */}
                  <div className="space-y-5">
                    <h4 className="text-white text-2xl drop-shadow-md">🍷 Выбор алкоголя</h4>

                    {guest.selectedAlcoholLevel && guest.selectedDrink && (
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white/70 text-xs mb-1">Выбрано:</p>
                            <p className="text-white text-lg">
                              {alcoholLevels.find(l => l.id === guest.selectedAlcoholLevel)?.emoji}{' '}
                              {alcoholLevels.find(l => l.id === guest.selectedAlcoholLevel)?.label}
                            </p>
                            {guest.selectedDrink && guest.selectedDrink !== 'confirmed' && (
                              <p className="text-white/90 text-md mt-1">{guest.selectedDrink}</p>
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
                            className="w-full rounded-[32px] shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.01]"
                          >
                            <div className={`bg-gradient-to-r ${level.gradient} p-7 rounded-[32px] flex items-center justify-between`}>
                              <div className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <span className="text-5xl">{level.emoji}</span>
                              </div>
                              <span className="text-white text-2xl drop-shadow-md flex-1 text-center">
                                {level.label}
                              </span>
                              <div className="w-16 h-16"></div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {showDrinksFor === guest.id && !guest.selectedDrink && (
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-white/90 text-lg text-center mb-3">Какой напиток?</p>
                        {drinks.map((drink) => (
                          <button
                            key={drink}
                            onClick={() => selectDrink(guest.id, drink)}
                            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-[20px] px-6 py-4 text-white text-lg transition-all hover:scale-[1.01] text-center"
                          >
                            {drink}
                          </button>
                        ))}
                      </div>
                    )}

                    {guest.selectedAlcoholLevel === 'none' && !guest.selectedDrink && (
                      <div>
                        {setTimeout(() => {
                          setGuests(guests.map(g => 
                            g.id === guest.id && !g.selectedDrink ? { ...g, selectedDrink: 'confirmed' } : g
                          ));
                        }, 100) && null}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Add guest button */}
        <button
          onClick={addGuest}
          className="w-full bg-white/12 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 text-white rounded-[30px] px-8 py-6 transition-all shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.35)] flex items-center justify-center gap-4"
        >
          <span className="text-3xl">➕</span>
          <span className="text-2xl drop-shadow-md">Добавить гостя</span>
        </button>

        {/* Bottom photo placeholders */}
        <div className="grid grid-cols-3 gap-3 pt-8">
          <div className="aspect-square bg-white/10 backdrop-blur-sm border border-white/20 rounded-[25px] shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
            <span className="text-white/30 text-4xl"></span>
          </div>
          <div className="aspect-square bg-white/10 backdrop-blur-sm border border-white/20 rounded-[25px] shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
            <span className="text-white/30 text-4xl">📷</span>
          </div>
          <div className="aspect-square bg-white/10 backdrop-blur-sm border border-white/20 rounded-[25px] shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
            <span className="text-white/30 text-4xl">📷</span>
          </div>
        </div>
      </div>
    </section>
  );
}