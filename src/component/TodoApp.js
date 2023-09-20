import React,{useState} from 'react'
import {Wrapper,Header} from './Style'
import TodoList from './TodoList'
import AddList from './AddList'




function TodoApp (){
  const [ todoListItem , setTodoListItem ] = useState([])
  return(
    <>
      <Wrapper>
        <Header>To-Do List</Header>
        <TodoList todoListItem={todoListItem} setTodoListItem={setTodoListItem} />
        <AddList todoListItem={todoListItem} setTodoListItem={setTodoListItem} />
      </Wrapper>
    </>
  )
}

export default TodoApp