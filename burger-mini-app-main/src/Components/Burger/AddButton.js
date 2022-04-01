import React from 'react'
import style from './controller.module.css'

const AddButton = (props) => {
  return (
    <button className={style.add_button} onClick={props.clickHandler}>
        {props.label}
    </button>
  )
}

export default AddButton