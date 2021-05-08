import React from 'react'

import { FiTrash2, FiEdit2 } from 'react-icons/fi'
import { useNotes } from '../../hooks/useNotesQuery'

import * as S from './styles'

const NotePreview = ({ id, title, content, createdAt }) => {
  const { deleteNote } = useNotes()

  return (
    <S.Container>
      <S.WrapperActions>
        <S.WrapperIcon>
          <FiEdit2 className="edit-icon" />
        </S.WrapperIcon>

        <S.WrapperIcon>
          <FiTrash2 className="delete-icon" onClick={() => deleteNote(id)} />
        </S.WrapperIcon>
      </S.WrapperActions>

      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
    </S.Container>
  )
}

export default NotePreview
