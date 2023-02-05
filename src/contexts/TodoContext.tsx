import React, { createContext } from 'react'

export const todoContext = {
  inputItem: '',
  todo: [''],
  done: [''],
}

export default createContext(todoContext)
