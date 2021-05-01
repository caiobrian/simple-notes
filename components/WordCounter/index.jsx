import React, { useCallback, useEffect, useState } from 'react'
import { useStateValue } from '../../contexts/state'
import { removeSpacesFromText } from '../../utils/removeWhiteSpaces'

import * as S from './styles'

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [state, _] = useStateValue()

  const handleCount = useCallback(() => {
    const withoutSpaces = removeSpacesFromText(state.body)
    const countCharacters = withoutSpaces.split('' ,).length
    
    return countCharacters;
  }, [state])

  useEffect(() => { 
    setWordCount(handleCount())
  }, [state, handleCount]);

  return (
    <S.Container>
      <S.Counter>caracteres: <span>{wordCount}</span></S.Counter>
    </S.Container>
  )
}

export default WordCounter;
