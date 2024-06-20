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
  }, [module]);

  const getLessonSrc = (mod) => {
    switch (mod) {
     case 1: return { video: 'https://edge-msk-6.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/f642a148-a44a-4682-98f7-042ff7b6419f/assets/8e9c8ec6-d85f-4d78-bcea-929100325456/720p.mp4?expires=1718969807&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=6c1fdd744093433ccd8aa997f6e18a6b', audio: 'https://edge-msk-6.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/f642a148-a44a-4682-98f7-042ff7b6419f/assets/a7317588-e307-4652-b8cf-d66986c9c306/audio_0.mp4?expires=1718969807&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=7560026713e04980b3b04e98b59c30b8' };
      case 2: return { video: 'https://edge-msk-5.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/d52d9a14-698e-44aa-8222-cca0e0c40028/assets/f86b882b-ad41-44f0-9fb4-9956c8a09cf2/0/78869116/480p.mp4?expires=1718969851&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=01b2017bb710a433e36710785ace31e5', audio: 'https://edge-msk-5.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/d52d9a14-698e-44aa-8222-cca0e0c40028/assets/2710afab-926f-47c6-ae60-4cc8435e4926/audio_0.mp4?expires=1718969851&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=ee5921d3dcdc746bf7cc9475b43c8597' };
      case 3: return { video: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/a46a9983-4a16-429d-85f8-9ecfd44a0444/assets/146f8928-9f9b-4b8a-81ed-1f54f42a3a0e/0/79102042/480p.mp4?expires=1718969947&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=bef94163403a6a256a2afaf1c5cb38e5', audio: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/a46a9983-4a16-429d-85f8-9ecfd44a0444/assets/fb9da527-6d3e-4ef2-a356-7be426176948/audio_0.mp4?expires=1718969947&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=344d5c20418b8be34c7749d74fc9b659' };
      case 4: return { video: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/aa8c8e88-cedb-40cd-8f06-2b156632ba63/assets/6985446f-5b66-492e-b0ed-c5e0fa0dc1c2/480p.mp4?expires=1718970114&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=939f5e99b21c6a66ffd0578907335f0f', audio: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/aa8c8e88-cedb-40cd-8f06-2b156632ba63/assets/742667a5-87e5-41f5-a038-fcc17251ca36/audio_0.mp4?expires=1718970114&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=6f9468063e55a3c68d86b171cc0f7c05' };
      case 5: return { video: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/ae942140-736d-4bdb-8d36-a6ee47205d35/assets/cb801542-b170-4dc5-bb45-e974947f72b9/480p.mp4?expires=1718970179&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=c39cca5dbc28118d3ba340d7116670fc', audio: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/ae942140-736d-4bdb-8d36-a6ee47205d35/assets/0c0c1a73-2f80-4b47-8594-b66dfc6435cd/audio_0.mp4?expires=1718970179&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=899e02d2cc41744a7f29b04cd1ea08e4' };
      case 6: return { video: 'https://edge-msk-6.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/c49d14a1-1202-4218-81be-7428c3bad112/assets/46f3e1c0-1c04-4940-8967-7ded4e56184c/0/79226214/720p.mp4?expires=1718970257&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=5809409f8bc1d81354548b5fdf76fe05', audio: 'https://edge-msk-6.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/c49d14a1-1202-4218-81be-7428c3bad112/assets/859e65d8-ff07-41bc-b73d-aef1c9ea74f8/audio_0.mp4?expires=1718970257&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=12d12f8c522a3f9edf3b6aebd84495a6' };
      case 7: return  { video: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/cbc51b48-31dc-4e5a-9646-6fd020bd559a/assets/3fa29f28-1f4e-45d2-ac9c-50b4ab1def5b/0/78786248/480p.mp4?expires=1718970415&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=043c7725dff04da74885ebec2ab61b44', audio: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/cbc51b48-31dc-4e5a-9646-6fd020bd559a/assets/2841c62b-9bc0-429a-ba88-a3ca9e89bd5a/audio_0.mp4?expires=1718970415&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=5d4e854eb2bfb819ba32c0a438c58568' };
      case 8: return  { video: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/bca1f426-5a09-472e-9ef3-f0d9d9a73c24/assets/f4f673cb-d34d-402f-8e08-015eda225b2f/480p.mp4?expires=1718970555&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=769697560e2931d7a8c53f0d65e99ec4', audio: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/bca1f426-5a09-472e-9ef3-f0d9d9a73c24/assets/2db70334-c822-4df4-a627-0ebd513d2406/audio_0.mp4?expires=1718970555&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=6c51766a581be66d56ab1591ddc6b10e' };
    }
  };

  const lessonSrc = getLessonSrc(module);

  React.useEffect(() => {
    if (videoRef.current && audioRef.current) {
      videoRef.current.load();
      audioRef.current.load();
    }
  }, [lessonSrc]); 
  
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
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