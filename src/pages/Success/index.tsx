import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Container } from './styles'

import IllustrationImg from '../../assets/illustration.png'

export function Success() {
  const theme = useTheme()

  return (
    <Container>
      <div>
        <div className="info">
          <div className="title">
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>
          <div className="details">
            <div>
              <div className="icon delivery">
                <MapPin color={theme.white} weight="fill" />
              </div>
              <div className="item">
                <p>
                  Entrega em
                  {' '}
                  <span>{'Rua João Daniel Martinelli'}</span>
                  {', '}
                  {'102'}
                  {'\n'}
                  {'Farrapos'}
                  {' - '}
                  {'Porto Alegre'}
                  {', '}
                  {'RS'}
                </p>
              </div>
            </div>
            <div>
              <div className="icon timer">
                <Timer color={theme.white} weight="fill" />
              </div>
              <div className="item">
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </div>
            </div>
            <div>
              <div className="icon dollar">
                <CurrencyDollar size={16} color={theme.white} />
              </div>
              <div className="item">
                <p>Pagamento na entrega</p>
                <span>{'Cartão de Crédito'}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={IllustrationImg} alt="" />
        </div>
      </div>
    </Container>
  )
}