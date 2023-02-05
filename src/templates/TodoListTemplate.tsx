import { ListItem } from '@/components/commons'
import { TodoListContainer } from '@/containers'
import React from 'react'

const TodoListTemplate = () => {
  return (
    <>
      <h1>Todo List</h1>
      <TodoListContainer></TodoListContainer>
      <TodoListContainer />
      <TodoListContainer />
    </>
  )
}

export default TodoListTemplate
