import { ShoppingCart } from 'phosphor-react'
import { Container } from './styles'
import { useTheme } from 'styled-components'
import { CartContext } from '../../contexts/cart'
import { useContext } from 'react'

interface CartProps {
  onClick?: () => void
}

export function Cart({ onClick }: CartProps) {
  const theme = useTheme()
  const { cart } = useContext(CartContext)
  
  return (
    <Container onClick={onClick}>

      {cart.length > 0 && (
        <div><span>{cart.length}</span></div>
      )}
      <ShoppingCart size={22} weight="fill" color={theme['yellow-dark']} />
    </Container>
  )
}
