import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Container = styled.div`
  margin: 40px 40px 0 40px;
`

export const TextArea = styled(TextareaAutosize)`
  font-family: 'Poppins', sans-serif;
  min-height: 60px;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  width: 100%;
  box-shadow: none;
  resize: none;
  transition: none;
  font-size: 4rem;
  font-weight: 700;
  -webkit-appearance: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
