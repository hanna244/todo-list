import React from 'react'

type ListHeadProps = {} & React.ComponentProps<'form'>

const ListHead = ({ children, ...restProps }: ListHeadProps) => {
  return <form {...restProps}>{children}</form>
}

export default ListHead
