import { useRecoilState } from 'recoil'
import { noteBodyState } from '../../atoms/notes'

import * as S from './styles'

const NoteBody = () => {
  const [noteTitleEdit, setNoteTitleEdit] = useRecoilState(noteBodyState)

  const handleBody = (e) => setNoteTitleEdit(e.target.value)

  return (
    <S.Container>
      <S.Body
        value={noteTitleEdit}
        onChange={handleBody}
        placeholder="Escreva seu texto aqui..."
        type="text"
        id="article-form-title"
        autoComplete="off"
        aria-label="Post Title"
        autoFocus=""
        autoCorrect="off"
      />
    </S.Container>
  )
}

export default NoteBody
