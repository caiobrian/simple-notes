import { useRecoilValue, useResetRecoilState } from 'recoil'
import { noteBodyState, noteTitleState } from '../atoms/notes'

export function useNotesState() {
  const noteTitle = useRecoilValue(noteTitleState)
  const noteBody = useRecoilValue(noteBodyState)
  const resetTitle = useResetRecoilState(noteTitleState)
  const resetBody = useResetRecoilState(noteBodyState)

  const handleResetNote = () => {
    resetTitle(), resetBody()
  }

  return {
    noteTitle,
    noteBody,
    handleResetNote
  }
}
