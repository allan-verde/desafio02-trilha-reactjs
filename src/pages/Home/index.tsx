import { Header } from '../../components/Header'
import { CoffeeList, Container, Intro } from './styles'

import coffeeImg from '../../assets/coffee.png'
import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from 'phosphor-react'
import { coffeeList } from '../../utils/listCoffe'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Button'
import { InputNumber } from '../../components/InputNumber'

export function Home() {
  const theme = useTheme()

  return (
    <Container>
      <Header />

      <Intro>
        <div>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você receberá seu café onde estiver, a qualquer hora</p>
          </div>

          <div className="items">
            <div>
              <div>
                <ShoppingCart size={16} color={theme.white} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <div>
                <Package size={16} color={theme.white} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <div>
                <Timer size={16} color={theme.white} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <div>
                <Coffee size={16} color={theme.white} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img src={coffeeImg} alt="" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div className="list">
          {coffeeList.map((coffee) => (
            <div className="item" key={coffee.id}>
              <img src={coffee.image} alt="" />
              <div className="tags">
                {coffee.tags.map(tag => (
                  <div key={tag}><p>{tag}</p></div>
                ))}
              </div>
              <div className="info">
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
              </div>
              <div className="buy">
                <p>R${' '}<span>{(9.9).toFixed(2).split('.').join(',')}</span></p>
                <div className="actions">
                  <InputNumber onDecrement={() => null} onIncrement={() => null} value={1} />
                  <Button variant="TERTIARY">
                    <ShoppingCartSimple size={22} color={theme.white} weight="fill" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CoffeeList>
    </Container>
  )
}
