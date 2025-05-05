import React from 'react'
import { api } from '../../api'
import c from './workers.module.scss'
import { useDownloadExcel } from 'react-export-table-to-excel'

const Workers = () => {
  const [ workers,setWorkers ] = React.useState(null)

  React.useEffect(() => {
    api.getWorkers()
      .then(res => setWorkers(res.data))
  }, [])

  const tableRef = React.useRef(null)

  const {onDownload} = useDownloadExcel({
    currentTableRef:tableRef.current,
    filename: 'Сотрудники',
    sheet: 'UserData'
  })
  return (
    <div className={c.workers}>
      <button onClick={onDownload}>Экспорт в таблицы</button>
      <table ref={tableRef}>
        <tr>
          <th>
            №
          </th>
          <th>
            Имя
          </th>
          <th>
            Имя пользователя
          </th>
          <th>
            Онлайн
          </th>
        </tr>
        {
          workers?.map((item, i) => (
            <tr key={i}>
              <td>
                {i+1}
              </td>
              <td>
                <img src={item.avatarUrl} alt="" />
                {item.name}
              </td>
              <td>{item.login}</td>
              <td className={item.online === false ? c.no : c.yes}>{item.online === false ? "Не в сети" : "В сети"}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Workers