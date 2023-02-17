import TodoList from '@/components/todoList'
import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <TodoList />
      </main>
    </>
  )
}

export default Home
