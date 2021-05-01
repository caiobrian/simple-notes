import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Container = styled.div`
  margin: 40px 40px 0 40px;
  padding: 10px 0;
  height: 100%;
`

export const Body = styled(TextareaAutosize)`
  font-family: 'Cutive', serif;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  width: 100%;
  min-height: 100%;
  box-shadow: none;
  resize: none;
  transition: none;
  font-size: 1.6rem;
  -webkit-appearance: none;

  &::-webkit-scrollbar {
    display: none;
  }
`