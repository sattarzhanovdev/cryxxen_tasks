import React from 'react'
import c from './course.module.scss'
import lesson1 from './1lesson.mp4'
import lesson2 from './1080p.mp4'
import lesson1Sound from './1lessonSound.mp4'
import lesson2Sound from './2lessonSound.mp4'
import { Link } from 'react-router-dom'
import data from './lms.json'
import lesson5data from './5.json'

const MetodologiiUpravleniyaProektami = () => { 
  const [ module, setModule ] = React.useState(1)

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
            <source src={module === 1 ? lesson1 : lesson2} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson1Sound}/>
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами СКБ Контур
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/14G--8eHbq3Kq7A6Tn1bfytDHfUtkKEjd/view?usp=sharing'}>по ссылке</Link>
          </p>

          <h3>
            О чём вы узнаете:
          </h3>

          <ul>
            <li>
              В чём разница между «водопадной» методологией (Waterfall) и гибкой (Agile)
            </li>
            <li>
              Какую методологию выбрать для своего проекта, и как степень неопределённости на проекте влияет на этот выбор
            </li>
            <li>
              Подойдёт ли моей команде Scrum или лучше начать с Kanban
            </li>
          </ul>

          {
            module > 1 ? 
            <button
              onClick={() => {
                setModule(module-1)
              }}
            >
              Предыдущий урок
            </button> : 
            ''
          }

          <button
            onClick={() => {
              setModule(module+1)
            }}
          >
            Следующий урок
          </button>
        </div> :
        module === 2 ? 
        <div className={c.course}>
          <h2>2/6 Waterfall и Agile</h2>
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
            <source src={module === 1 ? lesson1 : lesson2} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson2Sound}/>
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами СКБ Контур
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1IJZEIv1h8T97oIjNw2RaWWVCpP5kNQUM/view?usp=sharing'}>по ссылке</Link>
          </p>

          <h3>
            Водопад и Agile
          </h3>

          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.1.png" alt="" />

          <ul>
            <li>
              Водопад — PMI, IPMA, Prince2, ITIL
            </li>
            <li>
              Agile — Kanban, FDD, Scrum, Crystal, XP, DSDM
            </li>
          </ul>

          <h3>Этапы проекта</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.2.png" alt="" />

          <h3>Тип проекта Waterfall</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.3.png" alt="" />

          <h3>Этапы проекта</h3>

          <ol>
            <li>
              Старт
            </li> 
            <li>
              Планирование
            </li>
            <li>
              Реализация
            </li>
            <li>
              Завершение
            </li>
          </ol>

          <h3>Водопад</h3>
          <ul>
            <li>
              Каскадная модель, водопад
            </li>
            <li>
              Последовательная реализация этапов проекта
            </li>
            <li>
              Вертикаль управления — заказчик, куратор (спонсор), руководитель проекта
            </li>
            <li>
              Планирование сразу на всю длительность проекта
            </li>
            <li>
              План проекта
            </li>
            <li>
              Готовый продукт полностью передаётся заказчику один раз в конце проекта
            </li>
          </ul>

          <h3>
            PMI
          </h3>

          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.4.png" alt="" />

          <h3>Роли в проекте</h3>

          <h4>Управляющий комитет проекта</h4>
          <p>
            Коллегиальный орган, в состав которого входят заказчик проекта, эксперты и заинтересованные лица. Источник экспертизы для руководителя проекта в процессе принятия решений по операционному руководству.
          </p>

          <h4>Заказчик проекта</h4>
          <p>Руководитель направления, подразделения или компании, на развитие деятельности которых направлен проект.</p>
          <p>
            Несёт ответственность за постановку целей проекта. Обеспечивает поддержку принимаемых решений на уровне генерального директора    или совета директоров компании.
          </p>

          <h4>
            Руководитель проекта
          </h4>
          <p>
            Не является постоянной должностью, имеет права и обязанности исключительно в рамках проекта. Организует работу команды проекта,   взаимодействует с функциональными подразделениями и другими командами, с директором по инвестициям, инвестиционным комитетом, иными уполномоченными органами компании в соответствии с их полномочиями.
          </p>
          
          <h4>Команда проекта</h4>
          <p>
            Сотрудники компании, несущие ответственность за выполнение проектных работ.
          </p>

          {
            module > 1 ? 
            <button
              onClick={() => {
                setModule(module-1)
              }}
            >
              Предыдущий урок
            </button> : 
            ''
          }

          <button
            onClick={() => {
              setModule(module+1)
            }}
          >
            Следующий урок
          </button>
        </div> :
        module === 3 ? 
        <div className={c.course}>
          <h2>3/6 Типы проектов</h2>
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
            <source src={lesson2} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson2Sound}/>
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами СКБ Контур
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1IJZEIv1h8T97oIjNw2RaWWVCpP5kNQUM/view?usp=sharing'}>по ссылке</Link>
          </p>

          <h3>
            Тип проекта Agile
          </h3>

          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.6.png" alt="" />

          <h3>Agile</h3>

          <ul>
            <li>
              Короткими спринтами поставлять заказчику продукт, который уже имеет для него ценность, пусть и ограниченную
            </li>
            <li>
              Быстро получать обратную связь для корректировки направления работы
            </li>
            <li>
              Кросс-функциональная самоорганизующаяся команда, ограниченная по размеру
            </li>
            <li>
              Продакт-оунер
            </li>
            <li>
              Скрам-мастер
            </li>
            <li>
              Манифест гибкой разработки ПО, февраль, 2001
            </li>
          </ul>

          <h3>Ценности Agile и Waterfall</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.7.png" alt="" />

          <h3>Итеративно-инкрементальный подход</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.8.png" alt="" />

          <h3>Минимальный ценный продукт</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.9.png" alt="" />

          <h3>Итеративно-инкрементальный подход</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.10.png" alt="" />

          <ul>
            <li>
              Повышенная гибкость и адаптивность к изменениям
            </li>
            <li>
              Увеличение производительности
            </li>
            <li>
              Повышенная прозрачность
            </li>
            <li>
              Снижение риска пропущенных целей
            </li>
            <li>
              Увеличение участия и удовлетворения заинтересованных сторон
            </li>
            <li>
              Более быстрый выпуск продуктов и услуг на рынок
            </li>
            <li>
              Сокращение отходов
            </li>
            <li>
              Более быстрое обнаружение проблем и дефектов
            </li>
            <li>
              Повышенное внимание к конкретным потребностям клиентов
            </li>
            <li>
              Увеличение частоты сотрудничества и обратной связи
            </li>
          </ul>

          <h3>Скрам</h3>
          <img src="https://lms.skillfactory.ru/asset-v1:Skillfactory+PMMINI+25DEC2020+type@asset+block@m3.11.jpg" alt="" />

          <h3>Это только для ИТ?</h3>
          <p>Подход Fast fashion</p>

          <ul>
            <li>
              Ультрамодные тенденции по умеренным ценам
            </li>
            <li>
              Быстрая реакция на тенденции в моде:
            </li>
            <li>
              частая смена коллекций — ~40 раз, ~10 тыс. дизайнов в год, а не раз в сезон, как у всех
            </li>
            <li>
              быстрые поставки малыми порциями — 2 недели от разработки дизайна до поступления новой линии в продажу, а не 6 месяцев, как у всех
            </li>
            <li>
              Размещение производства рядом в Европе — нет времени перевозить товары из Китая или Гонконга
            </li>
            <li>
              «Сарафанное радио» и повторные покупки вместо массированной медиа-рекламы
            </li>
          </ul>

          {
            module > 1 ? 
            <button
              onClick={() => {
                setModule(module-1)
              }}
            >
              Предыдущий урок
            </button> : 
            ''
          }

          <button
            onClick={() => {
              setModule(module+1)
            }}
          >
            Следующий урок
          </button>
        </div>:
        module === 4 ? 
        <div className={c.course}>
          <h2>4/6 Разница между водопадным и гибким подходом</h2>
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
            <source src={lesson2} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson2Sound}/>
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами СКБ Контур
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1IJZEIv1h8T97oIjNw2RaWWVCpP5kNQUM/view?usp=sharing'}>по ссылке</Link>
          </p>

          {
            data['https://lms.skillfactory.ru/xbl'].map(item => (
              <div style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={Object.keys(item).length === 1 ? {color: 'green'} : {fontSize: '16px'}}>{item.Column1}</h3>
                <p>{item['websitescraper-selected-row']}</p>
              </div>
            ))
          }

         
          {
            module > 1 ? 
            <button
              onClick={() => {
                setModule(module-1)
              }}
            >
              Предыдущий урок
            </button> : 
            ''
          }

          <button
            onClick={() => {
              setModule(module+1)
            }}
          >
            Следующий урок
          </button>
        </div>:
        module === 5 ? 
        <div className={c.course}>
          <h2>5/6 Kanban</h2>
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
            <source src={lesson2} />
          </video>

          <audio ref={audioRef}>
            <source src={lesson2Sound}/>
          </audio>

          <p>
            <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами СКБ Контур
          </p>
          <p>
            Презентация доступна <Link to={'https://drive.google.com/file/d/1IJZEIv1h8T97oIjNw2RaWWVCpP5kNQUM/view?usp=sharing'}>по ссылке</Link>
          </p>

          {
            lesson5data['https://lms.skillfactory.ru/xbl'].map(item => (
              <div>
                <h3 style={{ color: 'green' }}>{item.Column1}</h3>
                {
                  Object.keys(item).map((key, index) => (
                    key.startsWith('websitescraper-selected-row') && (
                      <p key={index}>{item[key]}</p>
                    )
                  ))
                }
              </div>
            ))
          }


         
          {
            module > 1 ? 
            <button
              onClick={() => {
                setModule(module-1)
              }}
            >
              Предыдущий урок
            </button> : 
            ''
          }

          <button
            onClick={() => {
              setModule(module+1)
            }}
          >
            Следующий урок
          </button>
        </div>:
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
           <source src={module === 1 ? lesson1 : lesson2} />
         </video>

         <audio ref={audioRef}>
           <source src={lesson1Sound}/>
         </audio>

         <p>
           <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами СКБ Контур
         </p>
         <p>
           Презентация доступна <Link to={'https://drive.google.com/file/d/14G--8eHbq3Kq7A6Tn1bfytDHfUtkKEjd/view?usp=sharing'}>по ссылке</Link>
         </p>


         {
           module > 1 ? 
           <button
             onClick={() => {
               setModule(module-1)
             }}
           >
             Предыдущий урок
           </button> : 
           ''
         }

         <button
           onClick={() => {
             setModule(module+1)
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

export default MetodologiiUpravleniyaProektami