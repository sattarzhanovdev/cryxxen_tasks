import React from 'react'
import c from './projects.module.scss'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'
import { useDownloadExcel } from 'react-export-table-to-excel'

const Projects = () => {
  const [ projects,setProjects ] = React.useState(null)

  React.useEffect(() => {
    api.getProjects()
      .then(res => setProjects(res.data))
  }, [])

  const Navigate = useNavigate()

  const tableRef = React.useRef(null)

  const {onDownload} = useDownloadExcel({
    currentTableRef:tableRef.current,
    filename: 'Проекты',
    sheet: 'UserData'
  })

  
  return (
    <div className={c.projects}>
      <button onClick={onDownload}>Экспорт в таблицы</button>
      <table ref={tableRef}>
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
                onClick={() => Navigate(`/projects/${item.name}/tasks/`)}
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

export default Projects