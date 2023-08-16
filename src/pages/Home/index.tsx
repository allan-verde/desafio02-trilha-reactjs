import { CoffeeList, Container, Intro } from './styles'

import coffeeImg from '../../assets/coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { coffeeList } from '../../utils/listCoffe'
import { useTheme } from 'styled-components'
import { CardCoffee } from '../../components/CardCoffee'

export function Home() {
  const theme = useTheme()

  return (
    <Container>
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
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </Container>
  )
}
