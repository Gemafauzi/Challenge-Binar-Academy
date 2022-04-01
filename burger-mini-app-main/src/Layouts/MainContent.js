import React from 'react'
import style from './layout.module.css'

const MainContent = (props) => {
  return (
    <div className={style.main_content}>
        {props.children}
    </div>
  )
}

export default MainContent