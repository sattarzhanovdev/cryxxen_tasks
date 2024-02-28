import React from 'react'
import { api } from '../../api'
import c from './workers.module.scss'

const Workers = () => {
  const [ workers,setWorkers ] = React.useState(null)

  React.useEffect(() => {
    api.getWorkers()
      .then(res => setWorkers(res.data))
  }, [])
  return (
    <div className={c.workers}>
      <table>
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
              <td>{item.name}</td>
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