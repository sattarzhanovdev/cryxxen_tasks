import React from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import c from './change.module.scss'
import { api } from '../../api'
import axios from 'axios'

const Change = () => {
  const { register, handleSubmit, reset } = useForm()
  const [ text, setText ] = React.useState('Введите название проекта и пароль')
  const Navigate = useNavigate()
  const [ arr, setArr ] = React.useState(null)

  
  React.useEffect(() => {
    const array = []
    api.getProjectsPasswords()
      .then(res => {
        // const project = res.data.map((item, i) => array.push({id: i, name: item.name, login: item.password, password: item.password}))
        for(let i = 0; i < res.data.length; i++){
          array?.push({index: i, ...res.data[i]})
        }

        setArr(array)
      })
  }, [])

  const change = (data) => {
    const project = arr?.find(item => item.login === data.name && item.password === data.old_password)
    if(project){
      api.changePassword(String(project?.index), {
        name: project?.name,
        login: project?.login,
        password: data.new_password,
        path: project?.path
      })
      localStorage.setItem('projectAuth', null)
      alert('Успешно пароль обновлен!')
      Navigate('/')
    }else{
      setText('Неверный старый пароль, или такого проекта не существует!')
    }
  }

  const projectName = localStorage.getItem('changeProject')

  return (
    <form 
      className={c.auth}
      onSubmit={handleSubmit(data => change(data))}
    >
      <h1>Изменение пароля проекта: {projectName}</h1>
      <div>
        <input
          type="text"
          placeholder='Название проекта'
          {...register('name')}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder='Старый пароль'
          {...register('old_password')}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder='Новый пароль'
          {...register('new_password')}
        />
      </div>
      <p>{text}</p>
      <button type='submit'>
        Login
      </button>
    </form>
  )
}

export default Change