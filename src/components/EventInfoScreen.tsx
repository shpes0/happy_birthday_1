export function EventInfoScreen() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 px-6">
      <div className="max-w-[390px] w-full space-y-12 relative z-10">
        {/* Main info card */}
        <div className="relative">
          <div className="relative bg-white/90 backdrop-blur-md border-2 border-white rounded-[50px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="space-y-8">
              {/* Date */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">📅</span>
                  <h3
                    className="text-3xl"
                    style={{
                      fontFamily: "'Lobster', cursive",
                      background:
                        "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter:
                        "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    Дата:
                  </h3>
                </div>
                <p
                  className="text-2xl pl-14"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "700",
                    color: "#1e293b",
                  }}
                >
                  13.12.2025
                </p>
              </div>

              {/* Time */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🕓</span>
                  <h3
                    className="text-3xl"
                    style={{
                      fontFamily: "'Lobster', cursive",
                      background:
                        "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter:
                        "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    Время:
                  </h3>
                </div>
                <p
                  className="text-2xl pl-14"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "700",
                    color: "#1e293b",
                  }}
                >
                  16:00
                </p>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">📍</span>
                  <h3
                    className="text-3xl"
                    style={{
                      fontFamily: "'Lobster', cursive",
                      background:
                        "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter:
                        "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    Локация:
                  </h3>
                </div>
                <a
                  href="https://yandex.ru/maps/-/CLc8Y45N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl pl-14 underline decoration-orange-500/60 hover:decoration-orange-500/100 transition-all"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                    color: "#1e293b",
                  }}
                >
                  Экоотель и экоферма «Бунин Ручей»
                </a>
              </div>

              {/* What awaits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">✨</span>
                  <h3
                    className="text-3xl"
                    style={{
                      fontFamily: "'Lobster', cursive",
                      background:
                        "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter:
                        "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    Что ждёт:
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-xl">
                    <span className="text-2xl mt-1 w-8 text-center">
                      🍽️
                    </span>
                    <span
                      className="leading-relaxed"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      Ужин в уютном ресторане
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-xl">
                    <span className="text-2xl mt-1 w-8 text-center">
                      🐑
                    </span>
                    <span
                      className="leading-relaxed"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      Животные и мини-ферма
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-xl">
                    <span className="text-2xl mt-1 w-8 text-center">
                      ♨️
                    </span>
                    <span
                      className="leading-relaxed"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      Чан под открытым небом
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-xl">
                    <span className="text-2xl mt-1 w-8 text-center">
                      🌲
                    </span>
                    <span
                      className="leading-relaxed"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      Свежий воздух, лес и зимняя атмосфера
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
