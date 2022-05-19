import React from 'react'

import style from './TodoList.module.css'

const TodoList = props => {

    const removeTodoHandler = index => {
        props.setTodo( prevState => {
            const newState = [...prevState]
            newState.splice(index,1)
            return newState
        })
    }

  return (
    <ul className={style.list}>
        { props.todo.map( (item, index) => {
            return (
                <li key={`todo-${index}`} onClick={() => removeTodoHandler(index)}>{ item }</li>
            )
        }) }
    </ul>
  )
}

export default TodoList