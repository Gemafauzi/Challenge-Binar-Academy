import React, { useState } from 'react'

import style from './app.module.css'
import TodoInput from './Components/TodoInput/TodoInput'
import TodoList from './Components/TodoList/TodoList'
import TodoFooter from './Components/TodoFooter/TodoFooter';

function App() {

  const [todo, setTodo] = useState([])

  return (
    <div className={style.app}>
      <TodoInput setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
      <TodoFooter todoLength={todo.length} />
    </div>
  );
}

export default App;
