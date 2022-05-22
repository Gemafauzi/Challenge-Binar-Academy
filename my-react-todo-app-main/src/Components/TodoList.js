import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'
import PaginateList from './PaginateList'

const TodoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title.toUpperCase()} addNewItem={props.addNewItem}/>
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
        {/* Tambahkan komponent Footer dengan props count adalah panjang dari array todo items */}
        <Footer count={props.items.length}></Footer>
    </div>
  )
}

export default TodoList