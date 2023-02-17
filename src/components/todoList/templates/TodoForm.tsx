import React, { useRef } from 'react'

type TodoFromProps = {
  handleSubmit: (todoItem: { [key: string]: string | number }) => void
}

const TodoFrom = ({ handleSubmit }: TodoFromProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputRef.current) return
    handleSubmit({ id: Math.floor(Math.random() * 10000), text: inputRef.current?.value })

    inputRef.current.value = ''
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='todo-form' style={{ display: 'block', fontSize: '2rem' }}>
        Todo
      </label>
      <input id='todo-form' type='text' ref={inputRef} />
      <button type='submit'>추가</button>
    </form>
  )
}

export default TodoFrom
