import React from 'react'
import c from './int.module.scss'
import First from './times/first'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
  React.useEffect(() => {
    localStorage.setItem('time', 1)
  }, [])
  
  const time = Number(localStorage.getItem('time'))
  const Navigate = useNavigate()

  return (
    <div className={c.introduction}>
      <First 
        time={time}
        Navigate={Navigate}
      /> 
    </div>
  )
}

export default Introduction