import { ImageWithFallback } from './figma/ImageWithFallback';

export function PhotoGallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0MzkwMTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Last year\'s blast! 🎊'
    },
    {
      url: 'https://images.unsplash.com/photo-1638644074459-9067407b72a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjBmdW58ZW58MXx8fHwxNzY0NDk0MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Good times ahead! 😄'
    },
    {
      url: 'https://images.unsplash.com/photo-1759054788471-dc7815144604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0NDk0MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Ready to party! 🎈'
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-purple-600 mb-4">
            Memories 📸
          </h2>
          <p className="text-2xl text-pink-500">
            Here's what we got up to before!
          </p>
        </div>

        <div className="space-y-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl text-center text-gray-800">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-3xl p-8 shadow-xl text-center">
          <p className="text-3xl text-purple-700 mb-2">
            Can't wait to make more memories! 💫
          </p>
          <p className="text-xl text-gray-600">
            Let's create new moments together!
          </p>
        </div>
      </div>
    </section>
  );
}
