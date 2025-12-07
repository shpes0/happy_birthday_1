import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import photo1 from 'figma:asset/7df4073ec1b0c67603696e8b13b14c03c47d24a0.png';
import photo2 from 'figma:asset/ddf69ccc7a3b30c684a8dc75afb0897bc69fdaf7.png';
import photo3 from 'figma:asset/343906eb3453d194256184641af5fa1190f12b15.png';
import photo4 from 'figma:asset/3fb12cb48ec837b464afd3b1ae759b7e29067f1d.png';
import photo5 from 'figma:asset/2c5382ba4816d4efc1b01052b50d43de7ee2cb8b.png';
import photo6 from 'figma:asset/33ed45e1bd330e48a012ef9a1c20086221b169f2.png';
import photo7 from 'figma:asset/50339a4b3c1e074be0b46f4324c304819ae25bf3.png';
import photo8 from 'figma:asset/5c873a7b309bc784d864cd4c686a694d8de2e668.png';
import photo9 from 'figma:asset/5141c0e1630e7cec5355c287bc28de25d6be03ae.png';
import photo10 from 'figma:asset/72fab85e62bafa40ed7e2d48ec250d843f6669f7.png';
import photo11 from 'figma:asset/ec96cdcd319575a63351b597ddb2a535dbe74cb4.png';
import photo12 from 'figma:asset/3eeb2d155f5523151b3a77a4dff01a5875d98b20.png';
import photo13 from 'figma:asset/de738a9e3385c207c8f5138ec21ee1d0065a353c.png';
import photo14 from 'figma:asset/48bf35776b0317988ddb20e7e7b9379340f955e9.png';

// Компонент для отображения одной фотокарточки с адаптивной рамкой
function PhotoCard({ filename, className }: { filename: string; className?: string }) {
  const [imageError, setImageError] = useState(false);
  const [isVertical, setIsVertical] = useState(true); // по умолчанию вертикальная

  useEffect(() => {
    if (!filename) return;

    // Определяем ориентацию изображения
    const img = new Image();
    img.onload = () => {
      setIsVertical(img.height > img.width);
    };
    img.src = filename;
  }, [filename]);

  // Если filename пустой или произошла ошибка - показываем плейсхолдер
  if (!filename || imageError) {
    return (
      <div className={className}>
        <div className="w-full h-full bg-white/10 rounded-[12px] flex items-center justify-center">
          <span className="text-white/40 text-6xl">📷</span>
        </div>
      </div>
    );
  }

  // Размеры рамки в зависимости от ориентации фото
  const frameClass = isVertical ? 'w-64 h-80' : 'w-80 h-64';

  return (
    <div className={`${className} ${frameClass}`}>
      <img 
        src={filename}
        alt="Настя"
        className="w-full h-full object-cover rounded-[12px]"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export function PhotoCarouselScreen() {
  // Фиксированный порядок из 14 позиций - НЕ МЕНЯТЬ!
  const [photos] = useState([
    { id: 1, rotation: -3, filename: photo1 }, // Позиция №1 ✅
    { id: 2, rotation: 2, filename: photo2 }, // Позиция №2 ✅
    { id: 3, rotation: -4, filename: photo3 }, // Позиция №3 ✅
    { id: 4, rotation: 3, filename: photo4 }, // Позиция №4 ✅
    { id: 5, rotation: -2, filename: photo5 }, // Позиция №5 ✅
    { id: 6, rotation: 4, filename: photo6 }, // Позиция №6 ✅
    { id: 7, rotation: -3, filename: photo7 }, // Позиция №7 ✅
    { id: 8, rotation: 2, filename: photo8 }, // Позиция №8 ✅
    { id: 9, rotation: -4, filename: photo9 }, // Позиция №9 ✅
    { id: 10, rotation: 3, filename: photo10 }, // Позиция №10 ✅
    { id: 11, rotation: -2, filename: photo11 }, // Позиция №11 ✅ НОВОЕ ФОТО (детское фото у елки с фруктами)
    { id: 12, rotation: 4, filename: photo12 }, // Позиция №12 ✅
    { id: 13, rotation: -3, filename: photo13 }, // Позиция №13 ✅
    { id: 14, rotation: 2, filename: photo14 } // Позиция №14 ✅
  ]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-24 px-6">
      <div className="max-w-[390px] w-full space-y-12 relative z-10">
        {/* Main title */}
        <div className="text-center">
          <h2 
            className="text-5xl leading-tight"
            style={{
              fontFamily: "'Satisfy', cursive",
              background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5))',
              letterSpacing: '0.01em'
            }}
          >
            Та самая Настя, которую мы так любим ✨
          </h2>
        </div>

        {/* Photo carousel */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Carousel track */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex gap-6 animate-carousel">
              {/* First set of photos */}
              {photos.map((photo) => (
                <div
                  key={`set1-${photo.id}`}
                  className="flex-shrink-0 relative"
                >
                  <div 
                    className="bg-white/20 backdrop-blur-sm border-4 border-white/50 rounded-[20px] p-4 hover:scale-105 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    style={{ 
                      transform: `rotate(${photo.rotation}deg)`,
                    }}
                  >
                    <PhotoCard filename={photo.filename} />
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {photos.map((photo) => (
                <div
                  key={`set2-${photo.id}`}
                  className="flex-shrink-0 relative"
                >
                  <div 
                    className="bg-white/20 backdrop-blur-sm border-4 border-white/50 rounded-[20px] p-4 hover:scale-105 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    style={{ 
                      transform: `rotate(${photo.rotation}deg)`,
                    }}
                  >
                    <PhotoCard filename={photo.filename} />
                  </div>
                </div>
              ))}
              {/* Third set to ensure smooth transition */}
              {photos.map((photo) => (
                <div
                  key={`set3-${photo.id}`}
                  className="flex-shrink-0 relative"
                >
                  <div 
                    className="bg-white/20 backdrop-blur-sm border-4 border-white/50 rounded-[20px] p-4 hover:scale-105 transition-transform duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    style={{ 
                      transform: `rotate(${photo.rotation}deg)`,
                    }}
                  >
                    <PhotoCard filename={photo.filename} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}