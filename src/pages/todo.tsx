import React from 'react'

import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import { ListItem } from '@/components/commons'
import { TodoListTemplate } from '@/templates'

const SamplePage: NextPage = () => {
  return (
    <section>
      <TodoListTemplate />
    </section>
  )
}

export default SamplePage
