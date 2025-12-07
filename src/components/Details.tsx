export function Details() {
  const schedule = [
    { time: '3:00 PM', activity: 'Arrivals & Welcome Drinks', emoji: '🥤' },
    { time: '3:30 PM', activity: 'Party Games & Activities', emoji: '🎮' },
    { time: '5:00 PM', activity: 'Cake Time!', emoji: '🎂' },
    { time: '5:30 PM', activity: 'Dancing & Music', emoji: '💃' },
    { time: '7:00 PM', activity: 'Dinner & Celebration', emoji: '🍕' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-purple-600 mb-4">
            What to Expect ✨
          </h2>
          <p className="text-2xl text-pink-500">
            Get ready for an amazing day!
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl text-purple-700 mb-6 text-center">
            Party Schedule 📋
          </h3>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="bg-white/90 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1">
                    <p className="text-xl text-pink-600">{item.time}</p>
                    <p className="text-xl text-gray-800">{item.activity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-xl mt-6">
          <h3 className="text-3xl text-purple-700 mb-4 text-center">
            Important Notes 📝
          </h3>
          <ul className="space-y-3 text-xl text-gray-700">
            <li className="flex items-start gap-3">
              <span>🎁</span>
              <span>No gifts necessary - your presence is the present!</span>
            </li>
            <li className="flex items-start gap-3">
              <span>👗</span>
              <span>Dress code: Fun & Colorful!</span>
            </li>
            <li className="flex items-start gap-3">
              <span>🍰</span>
              <span>Food & drinks provided</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
