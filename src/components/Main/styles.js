import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eef0f1;
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  width: 95%;
  max-width: 900px;
  max-height: 800px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff;
  color: #08090a;
  box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);
  overflow: auto;
`
export const WrapperButton = styled.div`
  width: 95%;
  max-width: 900px;
  display: flex;

  > button {
    margin-right: 15px;
  }
`
