import React from 'react'
import c from './course.module.scss'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const TrebovaniyaKPO = () => {
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
     case 1: return { video: 'https://edge-msk-8.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/7284e44d-f3bb-433f-8258-2e04232ced11/assets/866bb51e-2866-4899-bf7d-3589d34d95a3/1080p.mp4?expires=1718966443&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=60e4fefcfb972da48ad33cf09a9fe9f4', audio: 'https://edge-msk-8.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/7284e44d-f3bb-433f-8258-2e04232ced11/assets/ae139568-6786-44da-bd63-47015bef4e2a/audio_0.mp4?expires=1718966443&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=d87009b37750c45a5a0cb131bf5d638c' };
      case 2: return { video: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/821b780d-3bbb-4667-9d55-a443c415ab3b/assets/31679ff7-3697-4a39-9c2c-0cb6f86cf65c/0/81348983/1080p.mp4?expires=1718966046&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=2139d7d22dff242fd4fd16541a5c0130', audio: 'https://edge-msk-1.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/821b780d-3bbb-4667-9d55-a443c415ab3b/assets/5e3017c5-5d97-4065-b733-0ab6d375bc74/audio_0.mp4?expires=1718966046&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=c649b578563e54e46478716c2555b1b8' };
      case 3: return { video: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/191f1677-6de2-4fe7-9f3d-dabcb29674a4/assets/1933ed3b-6f63-48e0-b3ee-23533e2691f3/0/80763459/1080p.mp4?expires=1718966322&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=3928bd4aca39016e4af3c648dd2d66c0', audio: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/191f1677-6de2-4fe7-9f3d-dabcb29674a4/assets/6a921244-fc63-421b-a362-b9355857cb39/audio_0.mp4?expires=1718966322&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=591ebe2ae5d9626e07263c0f66c75d33' };
      case 4: return { video: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/05ba3cb0-72c2-46b9-9a48-27b5457e3d99/assets/2b61eec0-b675-4799-a764-b1b02c2f042d/0/79254294/480p.mp4?expires=1718966678&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=19042ecf940d7075358b96a4d453fa7d', audio: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/05ba3cb0-72c2-46b9-9a48-27b5457e3d99/assets/29520b04-d069-484e-935c-f067385d1dee/audio_0.mp4?expires=1718966678&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=ea8d0ec898893333f18d69e44e53d450' };
      case 5: return { video: 'https://edge-msk-3.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/2985ce5b-7cd4-416f-bae9-3275863ccf7a/assets/3b7e38ef-09b5-4bd3-b4ca-a62d477dd536/0/79520293/480p.mp4?expires=1718967800&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=a51becb4c88768db6e6b82cc070c49f4', audio: 'https://edge-msk-3.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/2985ce5b-7cd4-416f-bae9-3275863ccf7a/assets/38e8db19-bd0c-4d2d-9964-9d62bd0c274c/audio_0.mp4?expires=1718967800&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=5d6fe8c03855c481e66e8fca56b6abed' };
      case 6: return { video: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/fffc1393-7119-40f6-a8e2-7d9d69cdceb6/assets/e3a3dce9-0fbd-444d-85bf-17a5d228c8d1/360p.mp4?expires=1718967895&kci=CgdXaW5kb3dzEgdkZXNrdG9wGgZDaHJvbWUhUI2XbhIDEEAqBA5odK8%3D&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=fd103049fa7e3596a25542093cd6ae5d', audio: 'https://edge-msk-7.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/fffc1393-7119-40f6-a8e2-7d9d69cdceb6/assets/bae48c12-f883-4100-9832-ff75e76e0f13/audio_0.mp4?expires=1718967895&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=1daaed37104ad493d958e0afdee677b8' };
      default: return  { video: 'https://edge-msk-8.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/7284e44d-f3bb-433f-8258-2e04232ced11/assets/866bb51e-2866-4899-bf7d-3589d34d95a3/1080p.mp4?expires=1718966443&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=60e4fefcfb972da48ad33cf09a9fe9f4', audio: 'https://edge-msk-8.kinescopecdn.net/e4aac5a1-5ed2-4256-80e8-2ccd78207a2a/videos/7284e44d-f3bb-433f-8258-2e04232ced11/assets/ae139568-6786-44da-bd63-47015bef4e2a/audio_0.mp4?expires=1718966443&kinescope_project_id=c9de32e5-6f63-45bd-9974-6033ae5815ed&sign=d87009b37750c45a5a0cb131bf5d638c' };
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
          <h2>1/6 О чём этот модуль</h2>
          <div className={c.lines}>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
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
            Презентация доступна <Link to={'https://drive.google.com/file/d/1HJswDXrypk40CoXQO4H_oD2SxcZxrmAT/view?usp=sharing'}>по ссылке</Link>
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
          <h2>2/6 Работа с требованиями на проекте</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
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
            Презентация доступна <Link to={'https://drive.google.com/file/d/1HJswDXrypk40CoXQO4H_oD2SxcZxrmAT/view?usp=sharing'}>по ссылке</Link>
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
          <h2>3/6 Требования в Waterfall</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(4)}></div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
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
            Презентация доступна <Link to={'https://drive.google.com/file/d/1HJswDXrypk40CoXQO4H_oD2SxcZxrmAT/view?usp=sharing'}>по ссылке</Link>
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
          <h2>4/6 Требования в Agile</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(5)}></div>
            <div onClick={() => setModule(6)}></div>
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
            Презентация доступна <Link to={'https://drive.google.com/file/d/1HJswDXrypk40CoXQO4H_oD2SxcZxrmAT/view?usp=sharing'}>по ссылке</Link>
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
          <h2>5/6 Бэклог продукта</h2>
          <div className={c.lines}>
            <div onClick={() => setModule(1)}></div>
            <div onClick={() => setModule(2)}></div>
            <div onClick={() => setModule(3)}></div>
            <div onClick={() => setModule(4)}></div>
            <div className={c.active}>Текущий урок</div>
            <div onClick={() => setModule(6)}></div>
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
            Презентация доступна <Link to={'https://drive.google.com/file/d/1HJswDXrypk40CoXQO4H_oD2SxcZxrmAT/view?usp=sharing'}>по ссылке</Link>
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
          <h2>6/6 Результаты модуля</h2>
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
            <source src={lessonSrc.video} />
          </video>

          <audio ref={audioRef}>
            <source src={lessonSrc.audio} />
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1HJswDXrypk40CoXQO4H_oD2SxcZxrmAT/view?usp=sharing'}>по ссылке</Link>
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

export default TrebovaniyaKPO
