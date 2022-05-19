import React from 'react'

import style from './TodoFooter.module.css'

const TodoFooter = props => {
  return (
    <div className={style.todoFooter} data-testid="todo-footer-container">
        { !props.todoLength &&
            <p data-testid="todo-footer-no-item">Awesome!! You have free time!!</p>
        }
        {props.todoLength > 0 &&
            <p data-testid="todo-footer-with-items">You have {props.todoLength} {props.todoLength > 1 ? 'tasks' : 'task' }</p>
        }
    </div>
  )
}

export default TodoFooter