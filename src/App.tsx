import { useEffect, useState } from 'react';
import { HeroScreen } from './components/HeroScreen';
import { EventInfoScreen } from './components/EventInfoScreen';
import { PhotoCarouselScreen } from './components/PhotoCarouselScreen';
import { GuestSurveyScreen } from './components/GuestSurveyScreen';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  }, []);

  const videoSrc = isMobile ? '/bg-mobile.mp4' : '/bg-desktop.mp4';

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Видео-фон */}
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Лёгкое затемнение поверх видео (если нужно можно ослабить/убрать) */}
      <div className="fixed inset-0 bg-black/25 z-10" />

      {/* Контент поверх видео */}
      <div className="relative z-20">
        <HeroScreen />
        <EventInfoScreen />
        <PhotoCarouselScreen />
        <GuestSurveyScreen />
      </div>
    </div>
  );
}
``` :contentReference[oaicite:0]{index=0} 