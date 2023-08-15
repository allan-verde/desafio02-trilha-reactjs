import { ButtonHTMLAttributes } from 'react'

import { Container, Props } from './styles'

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, variant='PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest} >
      {children}
    </Container>
  )
}