import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { Container, Actions, Location, Cart } from './styles'
import { useTheme } from 'styled-components'

export function Header() {
  const theme = useTheme()

  return (
    <Container>
      <img src={logoImg} alt="" />

      <Actions>
        <Location>
          <MapPin size={22} weight="fill" color={theme.purple} />
          <p>Porto Alegre, RS</p>
        </Location>

        <Cart>
          <ShoppingCart size={22} weight="fill" color={theme.yellow} />
        </Cart>
      </Actions>
    </Container>
  )
}