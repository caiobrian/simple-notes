import { useResetRecoilState } from 'recoil'
import { noteTitleState, noteBodyState } from '../../atoms/notes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Button from '../Button'
import Divider from '../Divider'
import NoteBody from '../NoteBody'
import NoteTitle from '../NoteTitle'
import WordCounter from '../WordCounter'

import * as S from './styles'

const Main = () => {
  const resetTitle = useResetRecoilState(noteTitleState)
  const resetBody = useResetRecoilState(noteBodyState)

  const handleResetNote = () => {
    resetTitle(), resetBody()
  }

  return (
    <S.Container>
      <S.Main>
        <NoteTitle />
        <Divider />
        <NoteBody />
      </S.Main>

      <WordCounter />

      <S.WrapperButton>
        <Button color="primary" handleClick={() => {}}>
          Salvar Nota
        </Button>
        <Button color="alert" handleClick={handleResetNote}>
          Limpar Nota
        </Button>
      </S.WrapperButton>

      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </S.Container>
  )
}

export default Main
