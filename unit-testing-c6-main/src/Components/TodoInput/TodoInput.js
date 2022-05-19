import React, { useRef } from 'react'

import style from './TodoInput.module.css'

const TodoInput = props => {

  const todoInputField = useRef()

  const clickButtonHandler = () => {
    if ( todoInputField.current.value ) {
      const newTodo = todoInputField.current.value
      props.setTodo( prevState => [...prevState, newTodo])
      todoInputField.current.value = null
    }
  }

  return (
    <div className={style.container}>
        <div className={style.input_container} >
            <input type="text" ref={todoInputField} data-testid="todo-input-field" />
        </div>
        <div className={style.button_container} >
            <button onClick={clickButtonHandler} data-testid="todo-input-button">Add Todo</button>
        </div>
    </div>
  )
}

export default TodoInput