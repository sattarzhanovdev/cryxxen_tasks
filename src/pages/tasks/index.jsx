import React from 'react'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
import c from './tasks.module.scss'
import {useDownloadExcel} from 'react-export-table-to-excel'


const Tasks = () => {
  const [ tasks,setTasks ] = React.useState(null)
  const [ selectValue,setSelectValue ] = React.useState('Все')
  const {name} = useParams()

  React.useEffect(() => {
    api.getTasks()
      .then(res => {
        if(selectValue === 'Все'){
          const projectsTasks = res.data.filter(item => item.project?.name === name)
          setTasks(projectsTasks)
        }else{
          const projectsTasks = res.data.filter(item => item.project?.name === name)
          const filteredTasks = projectsTasks.filter(item => item.customFields.find(val => val.name === 'State')?.value?.name === selectValue)
          setTasks(filteredTasks)
        }
      })
  }, [selectValue])

  const convertToDate = (timestamp) => {
    if(timestamp){
      const date = new Date(timestamp)
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      console.log(date.getMonth());
      const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date);
      // return `${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}.${date.getFullYear()}`
      return formatted
    }else{
      return 'Нету срока!'
    }
  }

  const tableRef = React.useRef(null)

  const {onDownload} = useDownloadExcel({
    currentTableRef:tableRef.current,
    filename: name,
    sheet: 'UserData'
  })

  return (
    <div className={c.tasks}>
      <div className={c.head}>
        <h1>Название проекта: {name}</h1>
        <button onClick={onDownload}>Экспорт в таблицы</button>
        <select onChange={e => setSelectValue(e.target.value)}>
          <option selected>Все</option>
          <option>В ожидании</option>
          <option>Новая</option>
          <option>На аналитику</option>
          <option>Аналитика</option>
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
      <table ref={tableRef}>
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Дата начала</th>
          <th>Срок</th>
          <th>Оценка</th>
          <th>Затраченное время</th>
          <th>Постановщик</th>
          <th>{name !== 'CRYXXEN' ? 'Разработчик' : 'Исполнитель'}</th>
          <th>Вид задачи</th>
          <th>Статус</th>
        </tr>
        {
          name !== 'CRYXXEN' ?
          tasks?.map((item, i) => (
            <tr key={i}>
              <td>
                {i+1}
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
                {item.customFields?.find(item => item.name === 'Оценка')?.value?.minutes }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Затраченное время')?.value?.presentation }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Постановщик')?.value?.name }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Разработчик')?.value?.name }  
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
              <td
                // className={
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'На тестирование' ? 
                //   c.test : 
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Приемка' ? 
                //   c.show :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'В работе' ?
                //   c.design : 
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'К работе' ? 
                //   c.analytics :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Закрыто' ? 
                //   c.testing :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Новая' ? 
                //   c.testing :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Релиз' ? 
                //   c.release :
                //   ''
                // }
              >
                {item.customFields?.find(item => item.name === 'State')?.value?.name }  
              </td>
            </tr>
          )) :
          tasks?.map((item, i) => (
            <tr key={i}>
              <td>
                {i+1}
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
                {item.customFields?.find(item => item.name === 'Оценка')?.value?.minutes }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Затраченное время')?.value?.presentation }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Постановщик')?.value?.name }  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Assignee')?.value?.name }  
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
              <td
                // className={
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'На тестирование' ? 
                //   c.test : 
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Приемка' ? 
                //   c.show :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'В работе' ?
                //   c.design : 
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'К работе' ? 
                //   c.analytics :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Закрыто' ? 
                //   c.testing :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Новая' ? 
                //   c.testing :
                //   item.customFields?.find(item => item.name === 'State')?.value?.name === 'Релиз' ? 
                //   c.release :
                //   ''
                // }
              >
                {item.customFields?.find(item => item.name === 'State')?.value?.name }  
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Tasks