import { useState } from 'react';

type Drink = {
  id: string;
  label: string;
  emoji: string;
};

export function AlcoholSelectionBlock() {
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedDrink, setSelectedDrink] = useState<string>('');
  const [customDrink, setCustomDrink] = useState<string>('');

  const alcoholLevels = [
    {
      id: 'none',
      label: 'Не пью',
      emoji: '😇',
      gradient: 'from-green-400 to-emerald-500',
      hasDrinks: true
    },
    {
      id: 'moderate',
      label: 'Умеренно',
      emoji: '🙂',
      gradient: 'from-yellow-400 to-orange-500',
      hasDrinks: true
    },
    {
      id: 'party',
      label: 'Повеселимся',
      emoji: '🥳',
      gradient: 'from-red-500 to-pink-500',
      hasDrinks: true
    }
  ];

  const drinksByLevel: Record<string, Drink[]> = {
    // 1) Не пью: соки, газировки, лимонады, вода
    none: [
      { id: 'juice', label: 'Сок', emoji: '🧃' },
      { id: 'soda', label: 'Газировка', emoji: '🥤' },
      { id: 'lemonade', label: 'Лимонад', emoji: '🍋' },
      { id: 'water', label: 'Вода', emoji: '💧' }
    ],

    // 2) Умеренно
    moderate: [
      { id: 'whiskey', label: 'Виски', emoji: '🥃' },
      { id: 'gin', label: 'Джин', emoji: '🍸' },
      { id: 'champagne', label: 'Шампанское', emoji: '🍾' },
      { id: 'beer', label: 'Пиво', emoji: '🍺' },
      { id: 'apple_juice', label: 'Яблочный сок', emoji: '🧃' },
      { id: 'cola', label: 'Кола', emoji: '🥤' },
      { id: 'tonic', label: 'Тоник', emoji: '🥤' }
    ],

    // 3) Повеселимся — тот же набор
    party: [
      { id: 'whiskey', label: 'Виски', emoji: '🥃' },
      { id: 'gin', label: 'Джин', emoji: '🍸' },
      { id: 'champagne', label: 'Шампанское', emoji: '🍾' },
      { id: 'beer', label: 'Пиво', emoji: '🍺' },
      { id: 'apple_juice', label: 'Яблочный сок', emoji: '🧃' },
      { id: 'cola', label: 'Кола', emoji: '🥤' },
      { id: 'tonic', label: 'Тоник', emoji: '🥤' }
    ]
  };

  const selectLevel = (levelId: string) => {
    setSelectedLevel(levelId);
    setSelectedDrink('');
    setCustomDrink('');
  };

  const handleDrinkClick = (drinkId: string) => {
    setSelectedDrink(drinkId);
    if (drinkId !== 'custom') {
      setCustomDrink('');
    }
  };

  const handleSubmit = () => {
    const level = selectedLevel;
    const drink =
      selectedDrink === 'custom'
        ? customDrink.trim()
        : (drinksByLevel[selectedLevel] || []).find((d) => d.id === selectedDrink)?.label;

    console.log('Selected level:', level, 'Selected drink:', drink);
    alert('🎉 Спасибо! Данные сохранены!\n\n(Интеграция с Telegram-ботом будет добавлена позже)');
  };

  const currentLevel = selectedLevel
    ? alcoholLevels.find((l) => l.id === selectedLevel)
    : undefined;

  const baseDrinks: Drink[] =
    selectedLevel && currentLevel?.hasDrinks
      ? drinksByLevel[selectedLevel] || []
      : [];

  // Добавляем кнопку "Выбери сам" в конец
  const availableDrinks: Drink[] = [
    ...baseDrinks,
    { id: 'custom', label: 'Выбери сам', emoji: '📝' }
  ];

  const currentDrink =
    selectedLevel && selectedDrink !== 'custom'
      ? baseDrinks.find((d) => d.id === selectedDrink)
      : undefined;

  const displayDrinkLabel =
    selectedDrink === 'custom'
      ? customDrink.trim() || 'Свой напиток'
      : currentDrink?.label;

  const displayDrinkEmoji = selectedDrink === 'custom' ? '📝' : currentDrink?.emoji;

  const canSubmit =
    !!selectedLevel &&
    !!selectedDrink &&
    (selectedDrink !== 'custom' || customDrink.trim().length > 0);

  return (
    <section className="min-h-screen relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-700"></div>

      {/* Transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-purple-800/80 via-indigo-700/60 to-transparent pointer-events-none"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-pink-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="max-w-[390px] mx-auto px-6 space-y-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-block bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-[35px] px-8 py-5 shadow-[0_0_50px_rgba(255,255,255,0.3)] mb-4">
            <h2 className="text-white text-5xl drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              Уровень алкоголя 🍻
            </h2>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-[40px] p-8 shadow-[0_0_60px_rgba(255,255,255,0.25)] space-y-6">
          {/* Selected level display */}
          {currentLevel && selectedDrink && (
            <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border-2 border-white/40 rounded-[25px] p-5 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-xs mb-1">Выбрано:</p>
                  <p className="text-white text-xl drop-shadow-md">
                    {currentLevel.emoji} {currentLevel.label}
                  </p>
                  {displayDrinkLabel && (
                    <p className="text-white/90 text-lg mt-1 drop-shadow-md">
                      {displayDrinkEmoji} {displayDrinkLabel}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedLevel('');
                    setSelectedDrink('');
                    setCustomDrink('');
                  }}
                  className="text-white/70 hover:text-white text-sm"
                >
                  Изменить
                </button>
              </div>
            </div>
          )}

          {/* Alcohol level buttons */}
          {!selectedLevel && (
            <div className="space-y-4">
              {alcoholLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => selectLevel(level.id)}
                  className="w-full relative overflow-hidden rounded-[35px] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02] group"
                >
                  <div className={`bg-gradient-to-r ${level.gradient} p-8 flex items-center justify-between`}>
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-5xl">{level.emoji}</span>
                    </div>
                    <span className="text-white text-2xl drop-shadow-md flex-1 text-center">
                      {level.label}
                    </span>
                    <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Drinks selection */}
          {selectedLevel && !selectedDrink && currentLevel?.hasDrinks && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="text-white/90 text-lg text-center drop-shadow-md mb-4">
                Какой напиток предпочитаешь?
              </p>

              <div className="bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[30px] p-5 space-y-3">
                {availableDrinks.map((drink) => (
                  <button
                    key={drink.id}
                    onClick={() => handleDrinkClick(drink.id)}
                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-[22px] px-6 py-5 transition-all hover:scale-[1.02] flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-[18px] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{drink.emoji}</span>
                    </div>
                    <span className="text-white text-xl flex-1 text-left drop-shadow-md">
                      {drink.label}
                    </span>
                    <span className="text-white/60 group-hover:text-white text-2xl">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Поле для кастомного напитка */}
          {selectedLevel && selectedDrink === 'custom' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="bg-white/10 backdrop-blur-xl border-2 border-white/25 rounded-[30px] p-5 space-y-3">
                <p className="text-white/90 text-lg text-center drop-shadow-md mb-2">
                  Напиши свой вариант напитка ✍️
                </p>
                <input
                  type="text"
                  value={customDrink}
                  onChange={(e) => setCustomDrink(e.target.value)}
                  placeholder="Например: ром с колой"
                  className="w-full rounded-[20px] px-4 py-3 bg-white/80 text-gray-900 text-base outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit button */}
        {canSubmit && (
          <div className="space-y-4 pt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <button
              onClick={handleSubmit}
              className="w-full relative overflow-hidden rounded-[30px] shadow-[0_0_50px_rgba(34,197,94,0.5)] hover:shadow-[0_0_70px_rgba(34,197,94,0.7)] transition-all group"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-6 flex items-center justify-center gap-3 transition-all">
                <span className="text-3xl">📤</span>
                <span className="text-white text-2xl drop-shadow-md">Отправить ответы</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[25px] p-5 text-center">
              <p className="text-white/80 text-sm drop-shadow-md">
                💬 Данные будут отправлены в Telegram-бот
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-9xl opacity-5 animate-spin pointer-events-none"
        style={{ animationDuration: '40s' }}
      >
        🎊
      </div>
    </section>
  );
}
