import React from 'react'
import { v4 as uuid } from 'uuid'

import { ListItem } from '../commons'

type ListBodyProps = {
  todoArray: string[]
}

const ListBody = ({ todoArray }: ListBodyProps) => {
  return (
    <>
      <ul>
        {todoArray.map((item, index) => (
          <ListItem key={uuid()}>
            <div>
              <div>
                <label htmlFor='todoFinish'></label>
                <input type='checkbox' id='todoFinish' />
              </div>
              <p>{item + (index + 1)}</p>
              <button type='button'>삭제</button>
              <button type='button'>수정</button>
            </div>
          </ListItem>
        ))}
      </ul>
    </>
  )
}

export default ListBody
