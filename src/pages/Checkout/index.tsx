import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from 'phosphor-react'
import { Cart, Container, Content, Form, Info, Payment, PaymentMethod, Prices } from './styles'
import { useTheme } from 'styled-components'
import { Fragment, useContext, useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { Input } from '../../components/Input'
import { InputNumber } from '../../components/InputNumber'
import { CartContext } from '../../contexts/cart'
import { formateNumberToReal } from '../../utils/formateNumberToReal'

export function Checkout() {
  const theme = useTheme()
  const { cart, changeCartItem, removeCartItem } = useContext(CartContext)

  const totalItens = cart.reduce((acc, { item, quantity }) => acc + item.price * quantity, 0)
  const delieveryPrice = 3.5
  const totalPrice = totalItens + delieveryPrice

  const [cep, setCep] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY'>('MONEY' as const)
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  })

  function handleChangeAddress(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setAddress({
      ...address,
      [name]: value
    })
  }

  function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
    const numericValue = event.target.value.replace(/\D/g, '')

    if (numericValue.length <= 5) {
      return setCep(numericValue)
    }

    setCep(`${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`)
  }

  async function handleFetchAddress(_cep: string) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${_cep.replace(/\D/g, '')}/json/`)
      const data = await response.json()
      
      setAddress({
        street: data.logradouro,
        number: '',
        complement: data.complemento,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (cep.length === 9) handleFetchAddress(cep)
  }, [cep])

  return (
    <Container>
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
                <Input
                  name="cep"
                  placeholder="CEP"
                  value={cep}
                  onChange={handleCepChange}
                />
                <Input
                  name="street"
                  placeholder="Rua"
                  value={address.street}
                  optional
                  fullWidth
                  onChange={handleChangeAddress}
                />
                <div className="group">
                  <Input
                    name="number"
                    type="number"
                    placeholder="Número"
                    value={address.number}    
                    onChange={handleChangeAddress}
                  />
                  <Input
                    name="complement"
                    placeholder="Complemento"
                    value={address.complement}
                    fullWidth 
                    onChange={handleChangeAddress}
                  />
                </div>
                <div className="group">
                  <Input
                    name="neighborhood"
                    placeholder="Bairro"
                    value={address.neighborhood}
                    onChange={handleChangeAddress}
                  />
                  <Input
                    name="city"
                    placeholder="Cidade"
                    value={address.city}
                    fullWidth 
                    onChange={handleChangeAddress}
                  />
                  <Input
                    name="state"
                    placeholder="UF"
                    value={address.state}
                    onChange={handleChangeAddress}
                    maxLength={2}
                  />
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
                <Select selected={paymentMethod === 'CREDIT_CARD'} onClick={() => setPaymentMethod('CREDIT_CARD')}>
                  <CreditCard size={16} color={theme.purple} />
                  <p>CARTÂO DE CRÉDITO</p>
                </Select>
                <Select selected={paymentMethod === 'DEBIT_CARD'} onClick={() => setPaymentMethod('DEBIT_CARD')}>
                  <Bank size={16} color={theme.purple} />
                  <p>CARTÃO DE DÉBITO</p>
                </Select>
                <Select selected={paymentMethod === 'MONEY'} onClick={() => setPaymentMethod('MONEY')}>
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
              {cart.length > 0
                ? cart.map(({ item, quantity }, i, arr) => (
                  <Fragment key={item.id}>
                    <div className="item">
                      <div>
                        <img src={item.image} alt="" />
                        <div className="details">
                          <p>{item.name}</p>
                          <div className="actions">
                            <InputNumber
                              value={quantity}
                              onDecrement={() => changeCartItem(item.id, quantity - 1)}
                              onIncrement={() => changeCartItem(item.id, quantity + 1)}
                            />
                            <Button variant="SECONDARY" onClick={() => removeCartItem(item.id)}>
                              <Trash size={16} color={theme.purple} />
                              <p>Remover</p>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <span className="price">R${' '}{formateNumberToReal(item.price)}</span>
                    </div>
                    {i !== arr.length - 1 && <div className="separator" />}
                  </Fragment>
                )) : (
                  <div className="item">
                    <p>Nenhum item selecionado</p>
                  </div>
              )}
            </div>

            <div className="separator" />

            <Prices>
              <div>
                <p>Total de itens</p>
                <span>R${' '}{formateNumberToReal(totalItens)}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R${' '}{formateNumberToReal(delieveryPrice)}</span>
              </div>
              <div>
                <p>Total</p>
                <span>R${' '}{formateNumberToReal(totalPrice)}</span>
              </div>
            </Prices>

            <Button disabled={cart.length === 0} >Confirmar pedido</Button>
          </div>
        </Cart>
      </Content>
    </Container>
  )
}
