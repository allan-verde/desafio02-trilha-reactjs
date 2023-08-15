import { Container, SelectProps } from './styles'

export function Select({ selected=false, children, ...rest }: SelectProps) {
  return (
    <Container {...rest} selected={selected}>
      {children}
    </Container>
  )
}