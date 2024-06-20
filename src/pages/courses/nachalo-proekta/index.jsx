import React from 'react'
import c from './course.module.scss'
import { Link } from 'react-router-dom'
import lesson1 from './1lesson.mp4'
import lesson1Sound from './1lessonSound.mp4'

const NachaloProekta = () => {
  const [module, setModule] = React.useState(1)

  const videoRef = React.useRef(null)
  const audioRef = React.useRef(null)

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
  }, []);
  return (
    <>
      {
        module === 1 ?
        <div className={c.course}>
          <h2>1/5 О чём этот модуль</h2>
          <div className={c.lines}>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            
          </div>
          
          <video
            ref={videoRef}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={module === 1 ? lesson1 : ''} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1c-Zmt_2RTdUKoBaw-pQwigwUrrdgLvcS/view'}>по ссылке</Link>
          </p>


          {
            module > 1 ?
              <button
                onClick={() => {
                  setModule(module - 1)
                }}
              >
                Предыдущий урок
              </button> :
              ''
          }

          <button
            onClick={() => {
              setModule(module + 1)
            }}
          >
            Следующий урок
          </button>
        </div> :
        module === 2 ?
        <div className={c.course}>
          <h2>2/5 Понятие проекта в ИТ</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            

          </div>

          <video
            ref={videoRef}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={module === 1 ? lesson1 : ''} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1c-Zmt_2RTdUKoBaw-pQwigwUrrdgLvcS/view'}>по ссылке</Link>
          </p>


          {
            module > 1 ?
              <button
                onClick={() => {
                  setModule(module - 1)
                }}
              >
                Предыдущий урок
              </button> :
              ''
          }

          <button
            onClick={() => {
              setModule(module + 1)
            }}
          >
            Следующий урок
          </button>
        </div> :
        module === 3 ?
        <div className={c.course}>
          <h2>3/5 Проектный треугольник</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            

          </div>
          <video
            ref={videoRef}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={module === 1 ? lesson1 : ''} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1c-Zmt_2RTdUKoBaw-pQwigwUrrdgLvcS/view'}>по ссылке</Link>
          </p>


          {
            module > 1 ?
              <button
                onClick={() => {
                  setModule(module - 1)
                }}
              >
                Предыдущий урок
              </button> :
              ''
          }

          <button
            onClick={() => {
              setModule(module + 1)
            }}
          >
            Следующий урок
          </button>
        </div>  :
        module === 4 ?
        <div className={c.course}>
          <h2>4/5 Чек-лист на первую неделю проекта</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(5)}></div>
          </div>
          <video
            ref={videoRef}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={module === 1 ? lesson1 : ''} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1c-Zmt_2RTdUKoBaw-pQwigwUrrdgLvcS/view'}>по ссылке</Link>
          </p>


          {
            module > 1 ?
              <button
                onClick={() => {
                  setModule(module - 1)
                }}
              >
                Предыдущий урок
              </button> :
              ''
          }

          <button
            onClick={() => {
              setModule(module + 1)
            }}
          >
            Следующий урок
          </button>
        </div>  :
        module === 5 ?
        <div className={c.course}>
          <h2>5/5 Результат модуля</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div className={c.active}>Текущий урок</div>

          </div>
          <video
            ref={videoRef}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={module === 1 ? lesson1 : ''} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1c-Zmt_2RTdUKoBaw-pQwigwUrrdgLvcS/view'}>по ссылке</Link>
          </p>


          {
            module > 1 ?
              <button
                onClick={() => {
                  setModule(module - 1)
                }}
              >
                Предыдущий урок
              </button> :
              ''
          }

          <button
            onClick={() => {
              setModule(module + 1)
            }}
          >
            Следующий урок
          </button>
        </div>  :
        module === 6 ?
        <div className={c.course}>
          <h2>1/5 О чём этот модуль</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div className={c.active}>Текущий урок</div>

          </div>
          <video
            ref={videoRef}
            controls
            onPlay={handlePlay}
            onPause={handlePause}
          >
            <source src={module === 1 ? lesson1 : ''} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/14G--8eHbq3Kq7A6Tn1bfytDHfUtkKEjd/view?usp=sharing'}>по ссылке</Link>
          </p>


          {
            module > 1 ?
              <button
                onClick={() => {
                  setModule(module - 1)
                }}
              >
                Предыдущий урок
              </button> :
              ''
          }

          <button
            onClick={() => {
              setModule(module + 1)
            }}
          >
            Следующий урок
          </button>
        </div> :
        null
      }
    </>
  )
}

export default NachaloProekta