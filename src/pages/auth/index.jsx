import React from 'react'
import c from './auth.module.scss'
import { PAGE_AUTH } from '../../utils'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const { register, handleSubmit, reset } = useForm()
  const [ text, setText ] = React.useState('Введите название проекта и пароль')

  const Navigate = useNavigate()

  const check = (data) => {
    const project = PAGE_AUTH.find(item => item.login === data.name && item.password === data.password)
    console.log(project);
    if(!project){
      setText('Неверный пароль, или нету проекта с таким названием!')
    }else{
      setText('Успешно!')
      localStorage.setItem('projectAuth', project.name)
      Navigate(project.path)
    }
  }


  return (
    <form 
      className={c.auth}
      onSubmit={handleSubmit(data => check(data))}
    >
      <h1>Авторизация</h1>
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
          placeholder='Пароль'
          {...register('password')}
        />
      </div>
      <p>{text}</p>
      <button type='submit'>
        Login
      </button>
    </form>
  )
}

export default Auth