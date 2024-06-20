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
import lesson5 from './lesson5.mp4';
import lesson5sound from './lesson5sound.mp4';
import lesson6 from './lesson6.mp4';
import lesson6sound from './lesson6sound.mp4';
import lesson7 from './lesson7.mp4';
import lesson7sound from './lesson7sound.mp4';
import { Link } from 'react-router-dom';

const UpravlenieRiskami = () => {
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
      <h2>{moduleNumber}/7 {title}</h2>
      <div className={c.lines}>
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className={module === index + 1 ? c.active : ''}
            onClick={() => setModule(index + 1)}
          >{module === index+1 ? 'Текущий урок' : ''}</div>
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

      {module < 7 && (
        <button onClick={() => setModule(module + 1)}>
          Следующий урок
        </button>
      )}
    </div>
  );

  return (
    <>
      {module === 1 && renderModule(
        1,
        'О чем этот модуль',
        lesson1,
        lesson1sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
      {module === 2 && renderModule(
        2,
        'Определение риска проекта',
        lesson2,
        lesson2sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
      {module === 3 && renderModule(
        3,
        'Идентификация рисков',
        lesson3,
        lesson3sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
      {module === 4 && renderModule(
        4,
        'Оценка рисков',
        lesson4,
        lesson4sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
      {module === 5 && renderModule(
        5,
        'Управление рисками',
        lesson5,
        lesson5sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
      {module === 6 && renderModule(
        6,
        'Управление рисками в Agile',
        lesson6,
        lesson6sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
      {module === 7 && renderModule(
        7,
        'Результаты модуля',
        lesson7,
        lesson7sound,
        'Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)',
        'https://drive.google.com/file/d/1mrNdrcNuSjpoeqHFV-QPInSE2m3dYgra/view'
      )}
    </>
  );
};

export default UpravlenieRiskami;
