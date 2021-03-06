import { formatDate } from '../../utils/formatDate'
import { useNotes } from '../../hooks/useNotesQuery'

import NotePreview from '../NotePreview'

import * as S from './styles'

const AllNotesPreview = () => {
  const { allNotes, isLoading } = useNotes()

  if (!allNotes?.length) return <div></div>
  if (isLoading) return <h1>Loading...</h1>

  return (
    <S.Container>
      {allNotes.map(({ id, title, content, created_at: createdAt }) => (
        <NotePreview
          key={id}
          id={id}
          title={title}
          content={content}
          createdAt={formatDate(createdAt)}
        />
      ))}
    </S.Container>
  )
}

export default AllNotesPreview
