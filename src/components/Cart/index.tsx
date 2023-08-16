import { ShoppingCart } from 'phosphor-react'
import { Container } from './styles'
import { useTheme } from 'styled-components'

interface CartProps {
  value?: number
  onClick?: () => void
}

export function Cart({ value=0, onClick }: CartProps) {
  const theme = useTheme()
  
  return (
    <Container onClick={onClick}>

      {value > 0 && (
        <div><span>{value}</span></div>
      )}
      <ShoppingCart size={22} weight="fill" color={theme['yellow-dark']} />
    </Container>
  )
}
