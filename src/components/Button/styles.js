import styled, { css } from 'styled-components'

const wrapperModifier = {
  primary: (theme) => css`
    background-color: ${theme.colors.primary};
  `,
  alert: (theme) => css`
    background-color: ${theme.colors.alert};
  `
}

export const Container = styled.button`
  ${({ theme, color }) => css`
    ${!!color && wrapperModifier[color](theme)}
    padding: 12px 28px;
    color: #fff;
    font-size: 1.4rem;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover:enabled {
      opacity: 0.8;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: ${theme.colors.gray};
      cursor: not-allowed;
    }
  `}
`
