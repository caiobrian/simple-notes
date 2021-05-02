import React from 'react'
import Button from '../components/Button'
import Divider from '../components/Divider'
import PostBody from '../components/PostBody'
import PostTitle from '../components/PostTitle'
import WordCounter from '../components/WordCounter'
import { StateProvider } from '../contexts/state'
import { initialTextState, textReducer } from '../reducer/textReducer'

const Main = () => {
  return (
    <StateProvider initialState={initialTextState} reducer={textReducer}>
      <div>
        <main>
          <PostTitle />
          <Divider />
          <PostBody />
        </main>
        <WordCounter />

        <div>
          <Button>Salvar</Button>
        </div>
      </div>
    </StateProvider>
  )
}

export default Main
