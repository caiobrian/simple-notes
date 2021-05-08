import { ToastContainer } from 'react-toastify'

import { useNotes } from '../../hooks/useNotesQuery'

import 'react-toastify/dist/ReactToastify.css'

import Button from '../Button'
import Divider from '../Divider'
import NoteBody from '../NoteBody'
import NoteTitle from '../NoteTitle'
import WordCounter from '../WordCounter'

import * as S from './styles'
import { useNotesState } from '../../hooks/useNotesState'
import AllNotesPreview from '../AllNotesPreview'

const Main = () => {
  const { addNote } = useNotes()
  const { handleResetNote } = useNotesState()

  return (
    <S.Container>
      <AllNotesPreview />

      <S.Main>
        <NoteTitle />
        <Divider />
        <NoteBody />
      </S.Main>

      <WordCounter />

      <S.WrapperButton>
        <Button color="primary" handleClick={addNote}>
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
