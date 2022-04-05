import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <img src="/images/logo.png" alt="Star Wars" className={style.logo}/>
  )
}

export default Header