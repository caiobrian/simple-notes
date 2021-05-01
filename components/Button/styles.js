import styled from 'styled-components';

export const Container = styled.button`
  padding: 12px 28px;
  color: #fff;
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  background-color: #17A9FB;
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
    background-color: #929199;
    cursor: not-allowed;
  }
`