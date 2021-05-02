import { useRecoilState } from 'recoil'
import { noteTitleState } from '../../atoms/notes'

import * as S from './styles'

const NoteTitle = () => {
  const [noteTitleEdit, setNoteTitleEdit] = useRecoilState(noteTitleState)

  const handleTitle = (e) => setNoteTitleEdit(e.target.value)

  return (
    <S.Container>
      <S.TextArea
        value={noteTitleEdit}
        onChange={handleTitle}
        type="text"
        id="article-form-title"
        placeholder="Novo título aqui..."
        autoComplete="off"
        aria-label="Post Title"
        autoFocus=""
        autoCorrect="off"
      />
    </S.Container>
  )
}

export default NoteTitle
