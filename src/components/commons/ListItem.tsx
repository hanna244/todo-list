import React from 'react'

export type ListItem = {} & React.ComponentProps<'li'>

const ListItem = ({ children }: ListItem) => {
  return <li>{children}</li>
}

export default ListItem
