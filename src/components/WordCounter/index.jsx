import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { noteBodyState } from '../../atoms/notes'
import { removeSpacesFromText } from '../../utils/removeWhiteSpaces'

import * as S from './styles'

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0)
  const noteBody = useRecoilValue(noteBodyState)

  const handleCount = useCallback(() => {
    const withoutSpaces = removeSpacesFromText(noteBody)
    const countCharacters = withoutSpaces.split('').length

    return countCharacters
  }, [noteBody])

  useEffect(() => {
    setWordCount(handleCount())
  }, [noteBody, handleCount])

  return (
    <S.Container>
      <S.Counter>
        caracteres: <span>{wordCount}</span>
      </S.Counter>
    </S.Container>
  )
}

export default WordCounter
