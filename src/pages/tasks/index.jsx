import React from 'react'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
import c from './tasks.module.scss'

const Tasks = () => {
  const [ tasks,setTasks ] = React.useState(null)
  const {name} = useParams()

  React.useEffect(() => {
    api.getTasks()
      .then(res => {
        const projectsTasks = res.data.filter(item => item.project?.name === name)
        setTasks(projectsTasks)
        console.log(projectsTasks);
      })
  }, [])

  const convertToDate = (timestamp) => {
    if(timestamp){
      const date = new Date(timestamp)
      return `${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}.${date.getFullYear()}`
    }else{
      return 'Нету срока!'
    }
  }
  return (
    <div className={c.tasks}>
      <h1>Название проекта: {name}</h1>
      <table>
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Срок</th>
          <th>Оценка</th>
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
                {convertToDate(item.customFields?.find(item => item.name === 'Due Date')?.value)}  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Оценка')?.value?.minutes }  
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
                {convertToDate(item.customFields?.find(item => item.name === 'Due Date')?.value)}  
              </td>
              <td>
                {item.customFields?.find(item => item.name === 'Оценка')?.value?.minutes }  
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