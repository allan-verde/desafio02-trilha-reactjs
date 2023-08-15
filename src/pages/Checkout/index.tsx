import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Cart, Container, Content, Form, Info, Payment, PaymentMethod, Prices } from './styles'
import { useTheme } from 'styled-components'
import { coffeeList } from '../../utils/listCoffe'
import { Fragment } from 'react'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { Input } from '../../components/Input'

export function Checkout() {
  const theme = useTheme()

  return (
    <Container>
      <Header />

      <Content>
        <Payment>
          <h1>Complete seu pedido</h1>
          <div>
            <div>
              <Info>
                <MapPin size={22} color={theme['yellow-dark']} />
                <div>
                  <h2>Endereço de Entrega</h2>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </Info>
              <Form>
                <Input placeholder="CEP" />
                <Input placeholder="Rua" optional fullWidth />
                <div className="group">
                  <Input placeholder="Número" />
                  <Input placeholder="Complemento" fullWidth />
                </div>
                <div className="group">
                  <Input placeholder="Bairro" />
                  <Input placeholder="Cidade" fullWidth />
                  <Input placeholder="UF" />
                </div>
              </Form>
            </div>
            <div>
              <Info>
                <CurrencyDollar size={22} color={theme['purple']} />
                <div>
                  <h2>Pagamento</h2>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </Info>
              <PaymentMethod>
                <Select>
                  <CreditCard size={16} color={theme.purple} />
                  <p>CARTÂO DE CRÉDITO</p>
                </Select>
                <Select>
                  <Bank size={16} color={theme.purple} />
                  <p>CARTÃO DE DÉBITO</p>
                </Select>
                <Select selected>
                  <Money size={16} color={theme.purple} />
                  <p>DINHEIRO</p>
                </Select>
              </PaymentMethod>
            </div>
          </div>
        </Payment>

        <Cart>
          <h1>Cafés selecionados</h1>
          <div>
            <div className="list">
              {coffeeList.splice(0, 2).map((item, i, arr) => (
                <Fragment key={item.id}>
                  <div className="item">
                    <div>
                      <img src={item.image} alt="" />
                      <div className="details">
                        <p>{item.name}</p>
                        <div className="actions">
                          <div className="quantity">
                            <button>
                              <Minus size={14} color={theme.purple} weight="bold" />
                            </button>
                            <span>1</span>
                            <button>
                              <Plus size={14} color={theme.purple} weight="bold" />
                            </button>
                          </div>
                          <Button variant="SECONDARY">
                            <Trash size={16} color={theme.purple} />
                            <p>Remover</p>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <span className="price">R$ 9,90</span>
                  </div>
                  {i !== arr.length - 1 && <div className="separator" />}
                </Fragment>
              ))}
            </div>

            <div className="separator" />

            <Prices>
              <div>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <p>Total</p>
                <span>R$ 24,80</span>
              </div>
            </Prices>

            <Button>Confirmar pedido</Button>
          </div>
        </Cart>
      </Content>
    </Container>
  )
}
