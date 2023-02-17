import React, { useState } from 'react'
import TodoForm from './templates/TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState<{ [key: string]: string | number }[]>([])
  console.log('🚀 ~ file: index.tsx:6 ~ TodoList ~ todos1', todos)

  const addTodo = (todoItem: { [key: string]: string | number }) => {
    setTodos([todoItem, ...todos])
  }

  // const deleteTodo = (id: number) => {
  // const currentIndex = todos.findIndex(function (item) {
  //   return item.id === id
  // })
  // if (currentIndex > -1) {
  //   result = todos.splice(currentIndex, 1)
  // }
  // }

  return (
    <>
      <TodoForm handleSubmit={addTodo} />
      <ul style={{ width: '160px', marginTop: '20px' }}>
        {todos.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span style={{ flex: 1 }}>{item.text}</span>
              <button type='button'>
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.5 7H20.5'
                    stroke='#4B465C'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4.5 7H20.5'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10.5 11V17'
                    stroke='#4B465C'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10.5 11V17'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14.5 11V17'
                    stroke='#4B465C'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14.5 11V17'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.5 7L6.5 19C6.5 20.1046 7.39543 21 8.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19L19.5 7'
                    stroke='#4B465C'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.5 7L6.5 19C6.5 20.1046 7.39543 21 8.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19L19.5 7'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.5 7V4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4V7'
                    stroke='#4B465C'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.5 7V4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4V7'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button type='button'>
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.5 12L10.5 17L20.5 7'
                    stroke='#4B465C'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.5 12L10.5 17L20.5 7'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='1.75'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
