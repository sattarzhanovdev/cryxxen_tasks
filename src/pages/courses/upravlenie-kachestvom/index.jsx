import React from 'react'
import c from './course.module.scss'
import lesson1 from './lesson1.mp4'
import lesson1sound from './lesson1sound.mp4'
import lesson2 from './lesson2.mp4'
import lesson2sound from './lesson2sound.mp4'
import lesson3 from './lesson3.mp4'
import lesson3sound from './lesson3sound.mp4'
import lesson4 from './lesson4.mp4'
import lesson4sound from './lesson4sound.mp4'
import { Link } from 'react-router-dom'

const UpravlenieKachestvom = () => {
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

  console.log(module);
  return (
    <>
      {
        module === 1 ?
          <div className={c.course}>
            <h2>1/4 О чем этот модуль</h2>
            <div className={c.lines}>
              <div className={c.active}>Текущий урок</div>
              <div onClick={() => setModule(2)}></div>
              <div onClick={() => setModule(3)}></div>
              <div onClick={() => setModule(4)}></div>
            </div>

            <video
              ref={videoRef}
              controls
              onPlay={handlePlay}
              onPause={handlePause}
            >
              <source src={lesson1} />
            </video>

            <audio ref={audioRef}>
              <source src={lesson1sound} />
            </audio>

            <p>
              <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
            </p>
            <p>
              Презентация доступна <Link to={'https://drive.google.com/file/d/1NECwzcKSpMlG4GPenBYlAdycW1HwMuC1/view'}>по ссылке</Link>
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
              <h2>2/4 Управление качеством в Waterfall</h2>
              <div className={c.lines}>
                <div onClick={() => setModule(1)}></div>
                <div className={c.active}>Текущий урок</div>
                <div onClick={() => setModule(3)}></div>
                <div onClick={() => setModule(4)}></div>
              </div>

              <video
                ref={videoRef}
                controls
                onPlay={handlePlay}
                onPause={handlePause}
              >
                <source src={lesson2} />
              </video>

              <audio ref={audioRef}>
                <source src={lesson2sound} />
              </audio>

              <p>Источники:</p>
              <ul>
                <li>
                  <Link to={'https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%92%D1%81%D0%B5%D0%BE%D0%B1%D1%89%D0%B5%D0%B5_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%BC'}>
                    Всеобщее управление качеством (Total Quality Management, TQM)
                  </Link>
                </li>
                <li>
                  <Link to={'https://pmjournal.ru/articles/obzory/pmbok-pyatoe-izdanie-kratkoe-izlozhenie/'}>
                    PMBoK
                  </Link>
                </li>
                <li>
                  <Link to={'https://docs.cntd.ru/document/1200093424'}>
                    ISO 9000 
                  </Link>
                </li>
              </ul>

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
                <h2>3/4 Управление качеством в Agile</h2>
                <div className={c.lines}>
                  <div onClick={() => setModule(1)}></div>
                  <div onClick={() => setModule(2)}></div>
                  <div className={c.active}>Текущий урок</div>
                  <div onClick={() => setModule(4)}></div>
                </div>

                <video
                  ref={videoRef}
                  controls
                  onPlay={handlePlay}
                  onPause={handlePause}
                >
                  <source src={lesson3} />
                </video>

                <audio ref={audioRef}>
                  <source src={lesson3sound} />
                </audio>

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
              module === 4 ?
                <div className={c.course}>
                  <h2>4/4 Результаты модуля</h2>
                  <div className={c.lines}>
                    <div onClick={() => setModule(1)}></div>
                    <div onClick={() => setModule(2)}></div>
                    <div onClick={() => setModule(3)}></div>
                    <div className={c.active}>Текущий урок</div>
                  </div>

                  <video
                    ref={videoRef}
                    controls
                    onPlay={handlePlay}
                    onPause={handlePause}
                  >
                    <source src={lesson4} />
                  </video>

                  <audio ref={audioRef}>
                    <source src={lesson4sound} />
                  </audio>

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

export default UpravlenieKachestvom