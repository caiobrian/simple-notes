import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 90%;
  display: flex;
  border-radius: 4px;
  margin-bottom: ${theme.spacings.small};
  padding: ${theme.spacings.small};
  overflow-x: auto;

  :-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
    background-color: #555;
  }
`
