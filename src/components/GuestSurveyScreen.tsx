import { useState } from 'react';
import menuImage from 'figma:asset/bb0c7e9ba42141fdf167fbc8d3add26eaae77ee2.png';

const API_URL = "https://nastya30-backend.onrender.com/telegram";

interface Guest {
  id: number;
  name: string;
  selectedFoods: { [key: string]: string[] };
  alcoholLevel: string;
  selectedDrinks: string[];
  customDrink: string;
}

export function GuestSurveyScreen() {
  const [showMenu, setShowMenu] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([
    {
      id: 1,
      name: '',
      selectedFoods: {},
      alcoholLevel: '',
      selectedDrinks: [],
      customDrink: ''
    }
  ]);

  const [expandedCategory, setExpandedCategory] = useState<{ guestId: number; category: string } | null>(null);

  const updateGuestName = (id: number, name: string) => {
    setGuests(guests.map(g => g.id === id ? { ...g, name } : g));
  };

  const toggleCategory = (guestId: number, category: string) => {
    if (expandedCategory?.guestId === guestId && expandedCategory?.category === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory({ guestId, category });
    }
  };

  const toggleFoodItem = (guestId: number, category: string, item: string) => {
    setGuests(guests.map(g => {
      if (g.id === guestId) {
        const categoryItems = g.selectedFoods[category] || [];
        const newItems = categoryItems.includes(item)
          ? categoryItems.filter(i => i !== item)
          : [...categoryItems, item];
        
        return {
          ...g,
          selectedFoods: {
            ...g.selectedFoods,
            [category]: newItems
          }
        };
      }
      return g;
    }));
  };

  const selectAlcoholLevel = (guestId: number, level: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, alcoholLevel: level } : g
    ));
  };

  const toggleDrink = (guestId: number, drink: string) => {
    setGuests(guests.map(g => {
      if (g.id === guestId) {
        const newDrinks = g.selectedDrinks.includes(drink)
          ? g.selectedDrinks.filter(d => d !== drink)
          : [...g.selectedDrinks, drink];
        return { ...g, selectedDrinks: newDrinks };
      }
      return g;
    }));
  };

  const updateCustomDrink = (guestId: number, customDrink: string) => {
    setGuests(guests.map(g => 
      g.id === guestId ? { ...g, customDrink } : g
    ));
  };

  const addGuest = () => {
    const newGuest = {
      id: Date.now(),
      name: '',
      selectedFoods: {},
      alcoholLevel: '',
      selectedDrinks: [],
      customDrink: ''
    };
    setGuests([...guests, newGuest]);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guests }),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        alert("Спасибо! Данные успешно отправлены 💌");
      } else {
        alert("Ошибка отправки 😢");
      }
    } catch (e) {
      console.error("Submit error:", e);
      alert("Ошибка соединения 😢");
    }
  };

  const foodCategories = [
    {
      id: 'cold',
      label: 'Холодные закуски',
      emoji: '❄️',
      gradient: 'from-cyan-400 to-blue-500',
      items: [
        'Брускетта с лососем',
        'Брускетта с ростбифом',
        'Ассорти солений',
        'Овощное ассорти',
        'Лосось слабосолёный',
        'Ассорти сыров'
      ]
    },
    {
      id: 'salads',
      label: 'Салаты',
      emoji: '🥒',
      gradient: 'from-green-400 to-emerald-500',
      items: [
        'С креветками гриль, страчателлой и соусом гуакамоле',
        'Моцарелла с хрустящими баклажанами и томатами',
        'С ростбифом и острой заправкой «От бабушки»',
        'Цезарь с курицей',
        'Греческий',
        'Капрезе с помидорами, рукколой и соусом песто',
        'Тёплый из куриной печени с грибами в сливочном соусе'
      ]
    },
    {
      id: 'hot',
      label: 'Горячее',
      emoji: '🍗',
      gradient: 'from-orange-400 to-red-500',
      items: [
        'Бефстроганов «На сене»',
        'Цыплёнок чкмерули в чесночном соусе',
        'Хрустящий цыплёнок табака с соусом ткемали',
        'Цыплёнок корнель гриль с соусом ҥяршаб',
        'Дорадо гриль с соусом дзадзики',
        'Филе миньон «Black Angus» гриль',
        'Стейк из вырезки «Black Angus» с соусом из белых грибов',
        'Котлета «Пожарская» с картофелем в «мундире» и грибным соусом',
        'Свиная корейка с баклажанами и соусом демигляс',
        'Стейк лосося со шпинатом и сливочным соусом'
      ]
    },
    {
      id: 'sides',
      label: 'Гарниры',
      emoji: '🍟',
      gradient: 'from-yellow-400 to-amber-500',
      items: [
        'Мини-картофель с розмарином и чесноком',
        'Картофель жареный с грибами',
        'Овощи гриль',
        'Картофель фри',
        'Картофель по-деревенски',
        'Картофельное пюре',
        'Рис басмати'
      ]
    }
  ];

  const alcoholLevels = [
    { id: 'none', label: 'Не пью', emoji: '🚫', gradient: 'from-gray-400 to-gray-500' },
    { id: 'moderate', label: 'Умеренно', emoji: '🥂', gradient: 'from-blue-400 to-indigo-500' },
    { id: 'party', label: 'Повеселимся!', emoji: '🍾', gradient: 'from-purple-400 to-pink-500' }
  ];

  const drinks = [
    { name: 'Вино красное', emoji: '🍷', gradient: 'from-red-500 to-rose-600', isAlcoholic: true },
    { name: 'Вино белое', emoji: '🥂', gradient: 'from-yellow-300 to-amber-400', isAlcoholic: true },
    { name: 'Шампанское', emoji: '🍾', gradient: 'from-amber-300 to-yellow-400', isAlcoholic: true },
    { name: 'Пиво', emoji: '🍺', gradient: 'from-amber-400 to-orange-500', isAlcoholic: true },
    { name: 'Виски', emoji: '🥃', gradient: 'from-amber-600 to-orange-700', isAlcoholic: true },
    { name: 'Коктейли', emoji: '🍹', gradient: 'from-pink-400 to-rose-500', isAlcoholic: true },
    { name: 'Вода', emoji: '💧', gradient: 'from-blue-400 to-cyan-500', isAlcoholic: false },
    { name: 'Сок', emoji: '🧃', gradient: 'from-orange-400 to-red-500', isAlcoholic: false },
    { name: 'Лимонад', emoji: '🍋', gradient: 'from-yellow-400 to-lime-500', isAlcoholic: false },
    { name: 'Чай/Кофе', emoji: '☕', gradient: 'from-amber-700 to-brown-600', isAlcoholic: false }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-24 px-6">
      <div className="max-w-[390px] mx-auto space-y-10 relative z-10">
        {/* Main title */}
        <div className="text-center px-4">
          <div className="inline-block bg-white/90 backdrop-blur-md border-2 border-white rounded-[40px] px-6 py-5 max-w-full shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
            <h2 
              className="text-4xl inline"
              style={{
                fontFamily: "'Lobster', cursive",
                background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Помоги нам подготовиться к вечеру{' '}
            </h2>
            <span className="text-4xl">🍰</span>
          </div>
        </div>

        {guests.map((guest, index) => (
          <div key={guest.id} className="space-y-8">
            {/* Guest card */}
            <div className="bg-white/90 backdrop-blur-md border-2 border-white rounded-[45px] p-9 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              {/* Guest header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(249,115,22,0.4)]">
                  <span 
                    className="text-3xl"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '800',
                      color: 'white'
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3 
                  className="text-4xl"
                  style={{
                    fontFamily: "'Righteous', cursive",
                    background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Гость #{index + 1}
                </h3>
              </div>

              {/* Name input */}
              <input
                type="text"
                value={guest.name}
                onChange={(e) => updateGuestName(guest.id, e.target.value)}
                placeholder="Твоё имя"
                className="w-full bg-white/80 backdrop-blur-sm border-2 border-orange-300 rounded-[28px] px-8 py-6 text-slate-800 text-2xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all mb-8"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '500'
                }}
              />

              {guest.name && (
                <>
                  {/* Friendly food selection hint */}
                  <div className="mb-8 bg-gradient-to-r from-pink-100/80 via-orange-100/80 to-yellow-100/80 backdrop-blur-sm border-2 border-orange-200 rounded-[30px] p-6 shadow-[0_4px_12px_rgba(249,115,22,0.15)]">
                    <p 
                      className="text-slate-700 text-xl text-center leading-relaxed"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '500'
                      }}
                    >
                      Выбери, пожалуйста, свой ужин заранее —<br />
                      так мы всё подготовим вкусно и с заботой ✨🍽️
                    </p>
                  </div>

                  {/* Full Menu Button */}
                  <div className="mb-8">
                    <button
                      onClick={() => setShowMenu(true)}
                      className="w-full rounded-[32px] transition-all hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    >
                      <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500 p-6 rounded-[32px] flex items-center justify-center gap-4">
                        <span className="text-4xl">📋</span>
                        <span 
                          className="text-white text-2xl"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '700',
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                          }}
                        >
                          Посмотреть полное меню
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Food selection */}
                  <div className="space-y-6 mb-10">
                    {/* Selected items summary */}
                    {Object.keys(guest.selectedFoods).length > 0 && (
                      <div className="bg-orange-50/90 backdrop-blur-sm border border-orange-200 rounded-[25px] p-5 space-y-3 shadow-inner">
                        <p 
                          className="text-slate-600 text-sm mb-2"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '600'
                          }}
                        >
                          Выбрано:
                        </p>
                        {Object.entries(guest.selectedFoods).map(([category, items]) => {
                          if (items.length === 0) return null;
                          const cat = foodCategories.find(c => c.id === category);
                          return (
                            <div key={category} className="text-slate-700 text-base">
                              <span className="text-2xl mr-2">{cat?.emoji}</span>
                              <span 
                                className="font-medium"
                                style={{
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: '600'
                                }}
                              >
                                {cat?.label}:
                              </span>
                              <div className="ml-10 mt-1 space-y-1">
                                {items.map(item => (
                                  <div 
                                    key={item} 
                                    className="text-sm"
                                    style={{
                                      fontFamily: "'Poppins', sans-serif",
                                      fontWeight: '400'
                                    }}
                                  >
                                    • {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {foodCategories.map((category) => (
                      <div key={category.id}>
                        <button
                          onClick={() => toggleCategory(guest.id, category.id)}
                          className="w-full rounded-[32px] hover:scale-[1.01] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                        >
                          <div className={`bg-gradient-to-r ${category.gradient} p-7 rounded-[32px] flex items-center gap-4`}>
                            <div className="w-16 h-16 bg-white/40 backdrop-blur-sm rounded-[24px] flex items-center justify-center shadow-md">
                              <span className="text-4xl">{category.emoji}</span>
                            </div>
                            <span 
                              className="text-white text-2xl flex-1 text-left"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: '700',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                              }}
                            >
                              {category.label}
                            </span>
                            <span className="text-white text-xl">
                              {expandedCategory?.guestId === guest.id && expandedCategory?.category === category.id ? '▲' : '▼'}
                            </span>
                          </div>
                        </button>

                        {expandedCategory?.guestId === guest.id && expandedCategory?.category === category.id && (
                          <div className="mt-4 bg-white/80 backdrop-blur-md border border-orange-200 rounded-[28px] p-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300 shadow-inner">
                            {category.items.map((item) => {
                              const isSelected = guest.selectedFoods[category.id]?.includes(item) || false;
                              return (
                                <button
                                  key={item}
                                  onClick={() => toggleFoodItem(guest.id, category.id, item)}
                                  className={`w-full border rounded-[22px] px-6 py-4 text-slate-700 text-lg transition-all hover:scale-[1.01] text-left flex items-center gap-3 ${
                                    isSelected 
                                      ? 'bg-orange-100 border-orange-300' 
                                      : 'bg-white/60 border-orange-200 hover:bg-orange-50'
                                  }`}
                                  style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500'
                                  }}
                                >
                                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                    isSelected ? 'bg-orange-500 border-orange-600' : 'border-orange-300'
                                  }`}>
                                    {isSelected && <span className="text-white text-sm">✓</span>}
                                  </div>
                                  <span className="leading-snug">{item}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Alcohol selection */}
                  <div className="space-y-6">
                    <h4 
                      className="text-3xl"
                      style={{
                        fontFamily: "'Lobster', cursive",
                        background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      🥂 Уровень алкоголя
                    </h4>

                    {guest.alcoholLevel && (
                      <div className="bg-orange-50/90 backdrop-blur-sm border border-orange-200 rounded-[25px] p-5 shadow-inner">
                        <div className="flex items-center justify-between">
                          <div>
                            <p 
                              className="text-slate-600 text-sm mb-1"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: '600'
                              }}
                            >
                              Выбрано:
                            </p>
                            <p 
                              className="text-slate-800 text-xl"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: '600'
                              }}
                            >
                              {alcoholLevels.find(l => l.id === guest.alcoholLevel)?.emoji}{' '}
                              {alcoholLevels.find(l => l.id === guest.alcoholLevel)?.label}
                            </p>
                          </div>
                          <button
                            onClick={() => selectAlcoholLevel(guest.id, '')}
                            className="text-orange-600 hover:text-orange-800 text-sm underline"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: '500'
                            }}
                          >
                            Изменить выбор
                          </button>
                        </div>
                      </div>
                    )}

                    {!guest.alcoholLevel && (
                      <div className="space-y-4">
                        {alcoholLevels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => selectAlcoholLevel(guest.id, level.id)}
                            className="w-full rounded-[36px] hover:scale-[1.01] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                          >
                            <div className={`bg-gradient-to-r ${level.gradient} p-8 rounded-[36px] flex items-center justify-center gap-6`}>
                              <span className="text-6xl">{level.emoji}</span>
                              <span 
                                className="text-white text-3xl"
                                style={{
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: '700',
                                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                                }}
                              >
                                {level.label}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Drinks selection - shown after alcohol level is selected */}
                  {guest.alcoholLevel && (
                    <div className="space-y-6 pt-4">
                      <h4 
                        className="text-3xl"
                        style={{
                          fontFamily: "'Lobster', cursive",
                          background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        🍹 Выбери напитки
                      </h4>

                      {(guest.selectedDrinks.length > 0 || guest.customDrink) && (
                        <div className="bg-orange-50/90 backdrop-blur-sm border border-orange-200 rounded-[25px] p-5 shadow-inner">
                          <p 
                            className="text-slate-600 text-sm mb-2"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: '600'
                            }}
                          >
                            Выбрано:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {guest.selectedDrinks.map(drink => {
                              const drinkData = drinks.find(d => d.name === drink);
                              return (
                                <div 
                                  key={drink} 
                                  className="text-slate-700 text-base flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full border border-orange-200"
                                  style={{
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: '500'
                                  }}
                                >
                                  <span className="text-xl">{drinkData?.emoji}</span>
                                  <span>{drink}</span>
                                </div>
                              );
                            })}
                            {guest.customDrink && (
                              <div 
                                className="text-slate-700 text-base flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full border border-orange-200"
                                style={{
                                  fontFamily: "'Poppins', sans-serif",
                                  fontWeight: '500'
                                }}
                              >
                                <span className="text-xl">✍️</span>
                                <span>{guest.customDrink}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        {drinks
                          .filter(drink => {
                            // Show only non-alcoholic if 'none', show all if moderate/party
                            if (guest.alcoholLevel === 'none') {
                              return !drink.isAlcoholic;
                            }
                            return true;
                          })
                          .map((drink) => {
                            const isSelected = guest.selectedDrinks.includes(drink.name);
                            return (
                              <button
                                key={drink.name}
                                onClick={() => toggleDrink(guest.id, drink.name)}
                                className={`rounded-[24px] transition-all hover:scale-[1.02] shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${
                                  isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
                                }`}
                              >
                                <div className={`bg-gradient-to-br ${drink.gradient} p-6 rounded-[24px] flex flex-col items-center justify-center gap-3 relative`}>
                                  {isSelected && (
                                    <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                                      <span className="text-sm">✓</span>
                                    </div>
                                  )}
                                  <span className="text-5xl">{drink.emoji}</span>
                                  <span 
                                    className="text-white text-base text-center leading-tight"
                                    style={{
                                      fontFamily: "'Poppins', sans-serif",
                                      fontWeight: '600',
                                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                                    }}
                                  >
                                    {drink.name}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        
                        {/* Custom drink card */}
                        <button
                          onClick={() => {
                            if (!guest.selectedDrinks.includes('custom')) {
                              toggleDrink(guest.id, 'custom');
                            }
                          }}
                          className={`rounded-[24px] transition-all hover:scale-[1.02] shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${
                            guest.selectedDrinks.includes('custom') ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
                          }`}
                        >
                          <div className="bg-gradient-to-br from-pink-400 to-orange-500 p-6 rounded-[24px] flex flex-col items-center justify-center gap-3 relative">
                            {guest.selectedDrinks.includes('custom') && (
                              <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                                <span className="text-sm">✓</span>
                              </div>
                            )}
                            <span className="text-5xl">✍️</span>
                            <span 
                              className="text-white text-base text-center leading-tight"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: '600',
                                textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                              }}
                            >
                              Выбери сам
                            </span>
                          </div>
                        </button>
                      </div>

                      {/* Custom drink input - shown when custom card is selected */}
                      {guest.selectedDrinks.includes('custom') && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                          <input
                            type="text"
                            value={guest.customDrink}
                            onChange={(e) => updateCustomDrink(guest.id, e.target.value)}
                            placeholder="Напиши, что ты хочешь"
                            className="w-full bg-white/80 backdrop-blur-sm border-2 border-orange-300 rounded-[24px] px-6 py-5 text-slate-800 text-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: '500'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}

        {/* Add guest button */}
        <button
          onClick={addGuest}
          className="w-full bg-white/90 backdrop-blur-md border-2 border-white hover:bg-white text-slate-700 rounded-[35px] px-10 py-7 transition-all flex items-center justify-center gap-5 shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)]"
        >
          <span className="text-4xl">➕</span>
          <span 
            className="text-3xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '700'
            }}
          >
            Добавить гостя
          </span>
        </button>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full relative overflow-hidden rounded-[35px] transition-all group shadow-[0_6px_24px_rgba(34,197,94,0.4)]"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-10 py-8 flex items-center justify-center gap-4 transition-all">
            <span className="text-4xl">📩</span>
            <span 
              className="text-white text-3xl"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '800',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              Отправить
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>
      </div>

      {/* Menu Modal */}
      {showMenu && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setShowMenu(false)}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-[30px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
            >
              <span className="text-white text-2xl leading-none">✕</span>
            </button>

            {/* Menu Image */}
            <div className="overflow-auto max-h-[80vh] rounded-[20px]">
              <img 
                src={menuImage} 
                alt="Полное меню" 
                className="w-full h-auto rounded-[20px]"
              />
            </div>

            {/* Optional: Menu title */}
            <div className="text-center mt-4">
              <p 
                className="text-slate-600 text-base"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '500'
                }}
              >
                Нажми вне меню, чтобы закрыть
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
