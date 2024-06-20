import React from 'react'
import c from './course.module.scss'
import lesson1 from './lesson1.mp4'
import lesson1sound from './lesson1sound.mp4'
import lesson2 from './lesson2.mp4'
import lesson2sound from './lesson2sound.mp4'
import lesson3 from './lesson3.mp4'
import lesson3sound from './lesson3sound.mp4'
import { Link } from 'react-router-dom'

const PlanirovanieProekta = () => {
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
          <h2>1/8 О чём этот модуль</h2>
          <div className={c.lines}>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
            <div onClick={() => setModule(7)}></div>
            <div onClick={() => setModule(8)}></div>
            
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
            <source src={lesson1sound} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
          </p>

          <h3>Структура модуля</h3>

          <ul>
            <li>
              Основные этапы проекта
            </li>
            <li>
              Старт проекта — устав проекта, брифование заказчика (клиента)
            </li>
            <li>
              Планирование проекта — задачи, сроки, ресурсы
            </li>
            <li>
              План-график задач
            </li>
            <li>
              Дорожная карта и контрольные точки
            </li>
            <li>
              Assumptions (предположения)
            </li>
            <li>
              Планирование в Agile
            </li>
          </ul>

          <h3>
            О чём вы узнаете
          </h3>

          <ul>
            <li>
              Каждый проект проходит через этапы: Старт, Планирование, Реализация, Завершение
            </li>
            <li>
              На этапе Старта вам необходимо получить всю базовую информацию от заказчика и записать её в Плане Проекта
            </li>
            <li>
              На этапе Планирования важно сделать оценку задач, сроков, и ресурсов и договориться об этом с заказчиком и командой
            </li>
            <li>
              В Agile тоже есть планирование, просто оно очень верхнеуровневое
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
        module === 2 ?
        <div className={c.course}>
          <h2>2/8 Этапы проекта</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
            <div onClick={() => setModule(7)}></div>
            <div onClick={() => setModule(8)}></div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
          </p>

          <h3>Тип проекта</h3>
          <p>Картинка</p>

          <h3>Waterfall</h3>
          <p>Картинка</p>

          <h3>Agile</h3>
          <p>Картинка</p>

          <h3>Этапы проекта</h3>
          <p>Картинка</p>
          <p>Картинка</p>

          <h3>Этап инциирования</h3>
          <p>Задача</p>

          <ul>
            <li>
              Признание необходимости реализации проекта, его обоснование
            </li>
            <li>
              Определение общей цели и границ проекта
            </li>
            <li>
              Определение ожиданий заказчика, руководства, и других участников
            </li>
            <li>
              Определение объёма работ проекта и потребностей в финансах, ресурсах
            </li>
            <li>
              Назначение руководителя проекта и определение основных членов команды 
            </li>
            <li>
              Формирование и утверждение устава проекта
            </li>
          </ul>

          <p>Сложности</p>

          <ul>
            <li>
              Достижение согласованного понимания целей, ограничений и критериев успеха
            </li>
            <li>
              Согласование своих полномочий и ответственности
            </li>
            <li>
              Определение условий реализации проекта, внешних и внутренних ограничений, рисков
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
          <h2>3/8 План и дорожная карта проекта</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
            <div onClick={() => setModule(7)}></div>
            <div onClick={() => setModule(8)}></div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
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
        module === 4 ?
        <div className={c.course}>
          <h2>4/8 Брифование заказчика</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
            <div onClick={() => setModule(7)}></div>
            <div onClick={() => setModule(8)}></div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
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
        module === 5 ?
        <div className={c.course}>
          <h2>5/8 Критерии успеха</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(6)}></div>
            <div onClick={() => setModule(7)}></div>
            <div onClick={() => setModule(8)}></div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
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
        module === 6 ?
        <div className={c.course}>
          <h2>6/8 Планирование в Waterfall-проекте</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(7)}></div>
            <div onClick={() => setModule(8)}></div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
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
        module === 7 ?
        <div className={c.course}>
          <h2>7/8 Планирование в Agile-проекте</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(8)}></div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
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
        module === 8 ?
        <div className={c.course}>
          <h2>8/8 Результаты модуля</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
            <div onClick={() => setModule(7)}></div>
            <div className={c.active}>Текущий урок</div>
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

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/19VlbVa-KD2cupxz_ZGu39v43dQie5L4P/view?usp=sharing'}>по ссылке</Link>
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

export default PlanirovanieProekta