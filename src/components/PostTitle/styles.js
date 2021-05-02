import styled, { css } from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Container = styled.div`
  margin: 40px 40px 0 40px;
`

export const TextArea = styled(TextareaAutosize)`
  ${({ theme }) => css`
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
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    -webkit-appearance: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`
