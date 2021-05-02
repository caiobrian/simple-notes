import Head from 'next/head'
import Button from '../components/Button'
import Divider from '../components/Divider'
import PostBody from '../components/PostBody'
import PostTitle from '../components/PostTitle'
import WordCounter from '../components/WordCounter'
import { StateProvider } from '../contexts/state'
import { initialTextState, textReducer } from '../reducer/textReducer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <StateProvider initialState={initialTextState} reducer={textReducer}>
      <div className={styles.container}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cutive&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className={styles.main}>
          <PostTitle />
          <Divider />
          <PostBody />
        </main>
        <WordCounter />

        <div className={styles.buttonContainer}>
          <Button>Salvar</Button>
        </div>
      </div>
    </StateProvider>
  )
}
