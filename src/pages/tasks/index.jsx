import React from 'react'
import { api } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import c from './tasks.module.scss'
import {useDownloadExcel} from 'react-export-table-to-excel'

const Tasks = () => {
  const [ tasks,setTasks ] = React.useState(null)
  const [ filterState,setFilterState ] = React.useState(false)
  const [ status,setStatus ] = React.useState('Все')
  const [ type,setType ] = React.useState('Все')
  const [ dep,setDep ] = React.useState(0)
  const {name} = useParams()

  let params = {
    status: status,
    type: type
  }

  const Navigate = useNavigate()

  React.useEffect(() => {
    const auth = localStorage.getItem('projectAuth')

    if(auth !== name){
      Navigate('/auth/')
    }else{
      api.getTasks()
        .then(res => {
          const projectsTasks = res.data.filter(item => item.project?.name === name)
          setTasks(projectsTasks)
          api.getActivities(res.data[0].id) 
            .then(res => console.log(res.data))
          if(params.status === 'Все'){
            if(params.type !== "Все"){
              const filteredTasks = projectsTasks?.filter(item => item.customFields.find(val => val.name === 'Вид задачи')?.value?.name === params.type)
              setTasks(filteredTasks)
            }else{
              setTasks(projectsTasks)
            }
          }else if(params.type === 'Все'){
            if(params.status !== "Все"){
              const filteredTasks = projectsTasks?.filter(item => item.customFields.find(val => val.name === 'State')?.value?.name === params.status)
              setTasks(filteredTasks)
            }else{
              setTasks(projectsTasks)
            }
          }else{
            const filteredTasks = projectsTasks?.filter(item => item.customFields.find(val => val.name === 'State')?.value?.name === params.status && item.customFields.find(val => val.name === 'Вид задачи')?.value?.name === params.type)
            setTasks(filteredTasks)
          }
        })
    }

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

  const tableRef = React.useRef(null)

  const {onDownload} = useDownloadExcel({
    currentTableRef:tableRef.current,
    filename: name,
    sheet: 'UserData'
  })

  const toTask = (id) => {
    window.open(`https://cryxxen.youtrack.cloud/issue/${id}`)
  }

  return (
    <div className={c.tasks}>
      <div className={c.head}>
        <h1>Название проекта: {name}</h1>
        <button onClick={onDownload}>Экспорт в таблицы</button>
          <li onClick={() => setFilterState(!filterState)}>
            Фильтрация
          </li>
        <div className={c.filters}>
          <div className={c.filtration}>
            <div 
              className={filterState ? c.active : c.filter}
            >
              <p>
                Фильтрация по статусам
              </p>
              <select 
                onChange={e => {
                  setStatus(e.target.value)
                  setDep(Math.random())
                }} 
              >
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
          </div>
          <div className={c.filtration}>
            <div 
              className={filterState ? c.active : c.filter}
            >
              <p>
                Фильтрация по виду задач
              </p>
              <select 
                onChange={e => {
                  setType(e.target.value)
                  setDep(Math.random())
                }} 
              >
                <option selected>Все</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Design</option>
                <option>Analytics</option>
                <option>HR&Marketing</option>
                <option>API</option>
                <option>Testing</option>
              </select> 
            </div>
          </div>
        </div>
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
          <th>Тип задачи</th>
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
              <td onClick={() => toTask(item.id)}>
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
              <td>
                {item.customFields?.find(item => item.name === 'Type')?.value?.localizedName }  
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
              <td onClick={() => toTask(item.id)}>
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
              <td>
                {item.customFields?.find(item => item.name === 'Type')?.value?.localizedName }  
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