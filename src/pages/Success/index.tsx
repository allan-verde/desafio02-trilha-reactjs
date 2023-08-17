import { Key } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Container } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { Path, useLocation } from 'react-router-dom'

interface StateProps {
  address: {
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
  }
  paymentMethod: 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'
}

interface Location extends Path {
  state: StateProps;
  key: Key;
}

export function Success() {
  const theme = useTheme()
  const { state: { address, paymentMethod } }: Location = useLocation()

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
                  {'Entrega em '}<span>{address.street}</span>{`, ${address.number}`}
                  <br />
                  {`${address.neighborhood} - ${address.city}, ${address.state}`}
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
                <span>
                  {paymentMethod === 'CREDIT_CARD' && 'Cartão de crédito'}
                  {paymentMethod === 'DEBIT_CARD' && 'Cartão de débito'}
                  {paymentMethod === 'MONEY' && 'Dinheiro'}
                </span>
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