import React from 'react'
import { useStateValue } from '../../contexts/state'

import * as S from './styles'

const PostTitle = () => {
  const [state, dispatch] = useStateValue()

  const handleTitle = (e) => dispatch({
    type: 'WRITE_TITLE',
    payload: e.target.value
  })
  
  return (
    <S.Container>
      <S.TextArea
        value={state.title}
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

export default PostTitle
