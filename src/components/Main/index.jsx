import { StateProvider } from '../../contexts/state'
import { initialTextState, textReducer } from '../../reducer/textReducer'

import Button from '../Button'
import Divider from '../Divider'
import PostTitle from '../PostTitle'
import PostBody from '../PostBody'
import WordCounter from '../WordCounter'

import * as S from './styles'

const Main = () => {
  return (
    <StateProvider initialState={initialTextState} reducer={textReducer}>
      <S.Container>
        <S.Main>
          <PostTitle />
          <Divider />
          <PostBody />
        </S.Main>
        <WordCounter />

        <S.WrapperButton>
          <Button>Salvar</Button>
        </S.WrapperButton>
      </S.Container>
    </StateProvider>
  )
}

export default Main
