import React from 'react'
import c from './admin.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [ projects,setProjects ] = React.useState(null)

  React.useEffect(() => {
    api.getProjects()
      .then(res => setProjects(res.data))
  }, [])

  const Navigate = useNavigate()

  return (
    <div className={c.projects}>
      <h1>ADMIN</h1>
      <table>
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Руководитель</th>
        </tr>
        {
          projects?.map((item, i) => (
            <tr key={i}>
              <td>
                {i+1}
              </td>
              <td 
                className={c.click}
                onClick={() => {
                  localStorage.setItem('changeProject', item.name)
                  Navigate('/change/')
                }}
              >
                {item.name}
              </td>
              <td>
                {item.leader.name}
              </td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default Admin