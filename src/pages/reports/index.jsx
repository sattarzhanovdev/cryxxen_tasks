import React from 'react'
import c from './reports.module.scss'
import { api } from '../../api'

const Reports = () => {
  const [ workers, setWorkers ] = React.useState(null)
  const [ tasks, setTasks ] = React.useState(null)
  const [ type, setType ] = React.useState('Anvar Baratov')
  const [ status, setStatus ] = React.useState(null)
  const [ dep, setDep ] = React.useState(null)
  const [ sum, setSum ] = React.useState(0)

  React.useEffect(() => {
    api.getWorkers()
      .then(res => setWorkers(res.data))

    api.getTasks()
      .then(res => {
        const result = res.data.filter(item => item.customFields?.find(item => item.name === 'Assignee')?.value?.name === type && status !== 'Все' ? item.customFields?.find(item => item.name === 'State')?.value?.name === status : item.customFields?.find(item => item.name === 'Assignee')?.value?.name === type)
        setTasks(result)
      })

    console.log(tasks);
  }, [dep])

   const convertToDate = (timestamp) => {
    if(timestamp){
      const date = new Date(timestamp)
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date);
      return formatted
    }else{
      return 'Нету срока!'
    }
  }

  const minutes = []

  function convertTimeToMinutes(timeString) {
    const timeComponents = timeString ? timeString.split(' ') : ''

    let totalMinutes = 0;

    for (const component of timeComponents) {
      if (component.includes('н')) {
        // Извлекаем число недель и умножаем на 10080 минут
        const weeks = parseInt(component);
        totalMinutes += weeks * 10080;
    } else if (component.includes('д')) {
        const days = parseInt(component);
        totalMinutes += days * 1440;
      } else if (component.includes('ч')) {
        const hours = parseInt(component);
        totalMinutes += hours * 60;
      } else if (component.includes('м')) {
        const minutes = parseInt(component);
        totalMinutes += minutes;
      }
    }

    minutes.push(totalMinutes)
    return totalMinutes;
  }

  return (
    <div className={c.reports}>
      <div className={c.filteration}>
        <div>
          <p>
            Отчетность по сотрудникам
          </p>
          <select 
            onChange={e => {
              setStatus('Все')
              setType(e.target.value)
              setDep(Math.random())
            }} 
          >
            {
              workers?.map((item, i) => (
                <option key={i}>{item.name}</option>
              ))
            }
          </select> 
          <select 
            value={status}
            onChange={e => {
              setStatus(e.target.value)
              setDep(Math.random())
            }} 
          >
            <option selected>Все</option>
            <option>В ожидании</option>
            <option>Новая</option>
            <option>На аналитику</option>
            <option>Analitycs</option>
            <option>К работе</option>
            <option>В работе</option>
            <option>code review</option>
            <option>На тестирование</option>
            <option>Тестирование</option>
            <option>На доработку</option>
            <option>Приемка</option>
            <option>Релиз</option>
            <option>Закрыто</option>
          </select> 
        </div>
      </div>
      <table>
        <tr>
          <th>№</th>
          <th>Проект</th>
          <th>Название</th>
          <th>Дата начала</th>
          <th>Срок</th>
          <th>Статус</th>
          <th>Вид задачи</th>
          <th>Исполнитель</th>
          <th>Трудозатраты</th>
        </tr>
        {
          tasks?.map((item, i) => (
            <tr key={i}>
              <td>
                {i+1}
              </td>
              <td>
                {item.project.name}
              </td>
              <td>
                {item.summary}
              </td>
              <td>
                {convertToDate(item.customFields?.find(item => item.name === 'Дата начала')?.value)}  
              </td>
              <td>
                {convertToDate(item.customFields?.find(item => item.name === 'Due Date')?.value)}  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'State')?.value?.name }  
              </td>
              <td 
                className={
                  item.customFields?.find(item => item.name === 'Вид задачи')?.value?.name === 'Frontend' ? 
                  c.frontend : 
                  item.customFields?.find(item => item.name === 'Вид задачи')?.value?.name === 'Backend' ? 
                  c.backend :
                  item.customFields?.find(item => item.name === 'Вид задачи')?.value?.name === 'Design' ?
                  c.design : 
                  item.customFields?.find(item => item.name === 'Вид задачи')?.value?.name === 'Analytics' ? 
                  c.analytics :
                  item.customFields?.find(item => item.name === 'Вид задачи')?.value?.name === 'Testing' ? 
                  c.testing :
                  ''
                }
              >
                {item.customFields?.find(item => item.name === 'Вид задачи')?.value?.name }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Assignee')?.value?.name }  
              </td>
              <td>
                {convertTimeToMinutes(item.customFields?.find(item => item.name === 'Затраченное время')?.value?.presentation)} м
              </td>
            </tr>
          ))
        }
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th className={c.right}>Итого:</th>
          <th className={c.left}>{minutes?.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} м</th>
        </tr>
      </table>
    </div>
  )
}

export default Reports