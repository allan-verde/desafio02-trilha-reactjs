import { MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { Container, Actions, Location } from './styles'
import { useTheme } from 'styled-components'
import { Cart } from '../Cart'

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

        <Cart value={0} />
      </Actions>
    </Container>
  )
}