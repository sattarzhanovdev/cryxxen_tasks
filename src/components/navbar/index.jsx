import React from 'react'
import c from './navbar.module.scss'
import { navlist } from '../../utils'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={c.navbar}>
      <h1>AtaBase</h1>
      <ul>
        {
          navlist.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>
                {item.title}
              </Link>
            </li> 
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar