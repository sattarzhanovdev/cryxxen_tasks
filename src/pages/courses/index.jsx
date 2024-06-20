import React from 'react'
import c from './courses.module.scss'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
  const [ num, setNum ] = React.useState(1)

  const Navigate = useNavigate()

  return (
    <div className={c.course}>
      <h1>
        Управление проектами
      </h1>

      <button>
        Перейти к уроку
      </button>

      <div className={c.progress}>
        <div className={c.modules}>
          <button 
            onClick={() => setNum(1)}
            className={num === 1 ? c.active : ''}
          >
            Введение
          </button>
          <button 
            onClick={() => setNum(2)}
            className={num === 2 ? c.active : ''}
          >
            Основы проектного управления
          </button>
          <button 
            onClick={() => setNum(3)}
            className={num === 3 ? c.active : ''}
          >
            Ведение проекта
          </button>
          <button 
            onClick={() => setNum(4)}
            className={num === 4 ? c.active : ''}
          >
            Финальный тест
          </button>
          <button 
            onClick={() => setNum(5)}
            className={num === 5 ? c.active : ''}
          >
            Управление командой разработки
          </button>
        </div>
        <div className={c.courses}>
          {
            num === 1 ?
            <div className={c.module}>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/vvedenie/')}
              >
                <h3>1. Введение</h3>
                <h4>9 уроков</h4>
              </div>
            </div> :
            num === 2 ?
            <div className={c.module}>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/kto-takoi-proektnyi-manager/')}
              >
                <h3>1. Модуль 1. Кто такой проектный менеджер (4 задания)</h3>
                <h4>3 урока</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/intstrumenty-proektnogo-managera/')}
              >
                <h3>2. Модуль 2. Инструменты проектного менеджера (1 задание)</h3>
                <h4>1 урока</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/metodologii-upravleniya-proektami/')}
              >
                <h3>3. Модуль 3. Методологии управления проектами (3 задания)</h3>
                <h4>8 урока</h4>
              </div>
            </div> 
            :
            num === 3 ?
            <div className={c.module}>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/nachalo-proekta/')}
              >
                <h3>1. Модуль 4. Начало (Старт) проекта (3 задания)</h3>
                <h4>9 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/planirovanie-proekta/')}
              >
                <h3>2. Модуль 5. Планирование проекта (2 задания)</h3>
                <h4>12 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/upravlenie-trebovaniyamu-k-programmnomu-obespecheniyu/')}
              >
                <h3>3. Модуль 6. Управление требованиями к программному обеспечению (2 задания)</h3>
                <h4>10 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/komanda-proekta-raspredelenie-rolei-v-komande/')}
              >
                <h3>4. Модуль 7. Команда проекта, распределение ролей в команде (3 задания)</h3>
                <h4>11 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/biudjet-proekta/')}
              >
                <h3>5. Модуль 8. Бюджет проекта (2 задания)</h3>
                <h4>12 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/upravlenie-riskami/')}
              >
                <h3>6. Модуль 9. Управление рисками (2 задания)</h3>
                <h4>9 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/kommunikacii-na-proekte/')}
              >
                <h3>7. Модуль 10. Коммуникации на проекте (2 задания)</h3>
                <h4>7 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/upravlenie-kachestvom/')}
              >
                <h3>8. Модуль 11. Управление качеством (2 задания)</h3>
                <h4>6 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/realizaciya-proekta/')}
              >
                <h3>9. Модуль 12. Реализация проекта. Мониторинг и контроль. Проектная отчетность и создание документации (1 задание)</h3>
                <h4>9 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/realizaciya-proekta/')}
              >
                <h3>10. Модуль 13. Операционный запуск и закрытие проекта (2 задания)</h3>
                <h4>13 уроков</h4>
              </div>
            </div> :
            num === 4 ?
            <div className={c.module}>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/itogi-kursa/')}
              >
                <h3>1. Итоги курса</h3>
                <h4>2 урока</h4>
              </div>
            </div> 
            :
            num === 5 ?
            <div className={c.module}>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/osnovy-biznes-analitiki/')}
              >
                <h3>1. Модуль 16. Основы бизнес-аналитики (6 заданий)</h3>
                <h4>5 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/osnovy-produktovogo-myshleniya/')}
              >
                <h3>2.  Модуль 17. Основы продуктового мышления (1 задание)</h3>
                <h4>14 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/osnovy-ux/')}
              >
                <h3>3. Модуль 18. UX-дизайн. Основы (2 задания)</h3>
                <h4>8 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/osnovy-ui/')}
              >
                <h3>4. Модуль 19. UI-дизайн. Основы (8 задания)</h3>
                <h4>7 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/bazovye-poniatia-v-razrabotke/')}
              >
                <h3>5. Модуль 20. Базовые понятия в разработке (2 задания)</h3>
                <h4>6 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/razrabotka-mobilnyh-prilozheniy/')}
              >
                <h3>6. Модуль 21. Разработка мобильных приложений (2 задания)</h3>
                <h4>6 уроков</h4>
              </div>
              <div 
                className={c.time}
                onClick={() => Navigate('/courses/rabota-s-virtualnoy-komandoi/')}
              >
                <h3>7. Модуль 22. Работа с виртуальной командой (6 заданий)</h3>
                <h4>8 уроков</h4>
              </div>
            </div> 
            :
            null
          }
        </div>
      </div>
    </div>
  )
}

export default Courses