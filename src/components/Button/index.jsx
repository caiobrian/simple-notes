import { Container } from './styles'

const Button = ({ handleClick, disabled, color, children, type }) => {
  return (
    <Container
      onClick={handleClick}
      color={color}
      disabled={disabled}
      type={type}
    >
      {children}
    </Container>
  )
}

export default Button
