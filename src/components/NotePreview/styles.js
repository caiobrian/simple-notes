import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  position: relative;
  margin: 0 10px;
  padding: 10px;
  min-width: 200px;
  height: 130px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const Title = styled.h1`
  font-size: ${theme.font.sizes.medium};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Content = styled.p`
  font-size: ${theme.font.sizes.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CreatedAt = styled.p`
  margin-top: ${theme.spacings.xsmall};
  font-size: ${theme.font.sizes.xxsmall};
  font-style: italic;
`

export const WrapperActions = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 55px;
  top: -12px;
  right: 0;
`
export const WrapperIcon = styled.div`
  border: 1px solid black;
  display: flex;
  place-content: center;
  padding: 3px;
  border-radius: 50%;
  background-color: white;

  &:hover {
    background-color: ${theme.colors.mainBg};

    > svg {
      color: ${theme.colors.white};
    }
  }
`
