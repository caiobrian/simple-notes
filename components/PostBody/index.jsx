import { useStateValue } from '../../contexts/state'

import * as S from './styles'

const PostBody = () => {
  const [state, dispatch] = useStateValue()
  const handleBody = (e) => dispatch({
    type: 'WRITE_BODY',
    payload: e.target.value
  })

  return (
    <S.Container>
      <S.Body
        value={state.body}
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

export default PostBody
