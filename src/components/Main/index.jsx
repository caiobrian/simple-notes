import { useReducer } from 'react'
import { ToastContainer } from 'react-toastify'

import { StateProvider } from '../../contexts/state'
import { initialTextState, textReducer } from '../../reducer/textReducer'

import 'react-toastify/dist/ReactToastify.css'

import Button from '../Button'
import Divider from '../Divider'
import PostTitle from '../PostTitle'
import PostBody from '../PostBody'
import WordCounter from '../WordCounter'

import * as S from './styles'
import { initialToastState, toastReducer } from '../../reducer/toastReducer'

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useReducer(toastReducer, initialToastState)

  const test = () => dispatch({ type: 'SUCCESS' })

  return (
    <>
      <StateProvider initialState={initialTextState} reducer={textReducer}>
        <S.Container>
          <S.Main>
            <PostTitle />
            <Divider />
            <PostBody />
          </S.Main>

          <WordCounter />

          <S.WrapperButton>
            <Button handleClick={test}>Salvar</Button>
          </S.WrapperButton>

          <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </S.Container>
      </StateProvider>
    </>
  )
}

export default Main
