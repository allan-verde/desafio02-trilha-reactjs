import { ShoppingCart } from 'phosphor-react'
import { Container } from './styles'
import { useTheme } from 'styled-components'

interface CartProps {
  value?: number
}

export function Cart({ value=0 }: CartProps) {
  const theme = useTheme()
  
  return (
    <Container>

      {value > 0 && (
        <div><span>{value}</span></div>
      )}
      <ShoppingCart size={22} weight="fill" color={theme['yellow-dark']} />
    </Container>
  )
}
