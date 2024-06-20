import React from 'react';
import c from './course.module.scss';
import lesson1 from './lesson1.mp4';
import lesson1sound from './lesson1sound.mp4';
import lesson2 from './lesson2.mp4';
import lesson2sound from './lesson2sound.mp4';
import lesson3 from './lesson3.mp4';
import lesson3sound from './lesson3sound.mp4';
import lesson4 from './lesson4.mp4';
import lesson4sound from './lesson4sound.mp4';
import { Link } from 'react-router-dom';

const UpravlenieKachestvom = () => {
  const [module, setModule] = React.useState(1);

  const videoRef = React.useRef(null);
  const audioRef = React.useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.currentTime = videoRef.current.currentTime;
    }
  };

  const handleSeeked = () => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.currentTime = videoRef.current.currentTime;
    }
  };

  React.useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('seeked', handleSeeked);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('seeked', handleSeeked);
      };
    }
  }, [module]);

  const renderModule = (moduleNumber, title, videoSrc, audioSrc, speakerInfo, presentationLink) => (
    <div className={c.course}>
      <h2>{moduleNumber}/4 {title}</h2>
      <div className={c.lines}>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={module === index + 1 ? c.active : ''}
            onClick={() => setModule(index + 1)}
          >
            {module === index + 1 ? 'Текущий урок' : ''}
          </div>
        ))}
      </div>

      <video
        ref={videoRef}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={videoSrc} />
      </video>

      <audio ref={audioRef}>
        <source src={audioSrc} />
      </audio>

      <p>
        <b>Спикер:</b> {speakerInfo}
      </p>
      <p>
        Презентация доступна <Link to={presentationLink}>по ссылке</Link>
      </p>

      {module > 1 && (
        <button onClick={() => setModule(module - 1)}>
          Предыдущий урок
        </button>
      )}

      {module < 4 && (
        <button onClick={() => setModule(module + 1)}>
          Следующий урок
        </button>
      )}
    </div>
  );

  return (
    <>
      {module === 1 && renderModule(1, 'О чем этот модуль', lesson1, lesson1sound, 'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)', 'https://drive.google.com/file/d/1NECwzcKSpMlG4GPenBYlAdycW1HwMuC1/view')}
      {module === 2 && renderModule(2, 'Управление качеством в Waterfall', lesson2, lesson2sound, '...', 'https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%92%D1%81%D0%B5%D0%BE%D0%B1%D1%89%D0%B5%D0%B5_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%BC')}
      {module === 3 && renderModule(3, 'Управление качеством в Agile', lesson3, lesson3sound, '...', '#')}
      {module === 4 && renderModule(4, 'Результаты модуля', lesson4, lesson4sound, '...', '#')}
    </>
  );
}

export default UpravlenieKachestvom;
