import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 90%;
  display: flex;
  border-radius: 4px;
  margin-bottom: ${theme.spacings.xlarge};
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.small};
  overflow-x: auto;

  &::after {
    content: '';
    margin-right: 40px;
  }
`
