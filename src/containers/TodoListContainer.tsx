import React, { useCallback } from 'react'

import { ListBody, ListHead } from '@/components/presenters'
import { useQuery } from 'react-query'
import SampleUserService from '@/services/SampleUserService'
import { ListItem } from '@/components/commons'
import Context from '@/contexts/todoContext'
import { useState } from '@storybook/addons'

function getData(form) {
  var formData = new FormData(form)

  // iterate through entries...
  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1])
  }

  // ...or output as an object
  console.log(Object.fromEntries(formData))
}

const TodoListContainer = () => {
  // Data fetching
  const { isLoading, data } = useQuery('userInfoProfileData', () => {
    const params = {
      id: 1,
    }

    return SampleUserService.profile(params)
  })

  // const [inputData, setInputData] = useState('')
  // const [inputData, setInputData] = useState('')
  // const [inputData, setInputData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    formData.append('todoInput', e.target[0].value)
    const data = Object.fromEntries(formData.entries())

    console.log(data['todoInput'])
  }

  if (isLoading) return <p>Loading...</p>

  return (
    // 고민1
    <Context.Provider value={{ inputItem: '', todo: [''], done: [''] }}>
      <div>
        <div className='wrapper_head'>
          <ListHead onSubmit={handleSubmit} className='headtest'>
            <div>
              <label htmlFor='todoInput'></label>
              <input type='text' id='todoInput' />
            </div>
            <button type='submit'>추가</button>
          </ListHead>
        </div>

        <div className='wrapper_body'>
          <ListBody todoArray={['할일', '할일', '할일', '할일', '할일']} />
        </div>
      </div>
    </Context.Provider>
  )
}

export default TodoListContainer
