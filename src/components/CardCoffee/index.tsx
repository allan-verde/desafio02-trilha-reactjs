import { ShoppingCartSimple } from 'phosphor-react'
import { Button } from '../Button'
import { InputNumber } from '../InputNumber'
import { Buy, Container, Tag } from './styles'
import { useTheme } from 'styled-components'
import { useContext, useState } from 'react'
import { ICoffee } from '../../utils/listCoffe'
import { formateNumberToReal } from '../../utils/formateNumberToReal'
import { CartContext } from '../../contexts/cart'

interface CardCoffeeProps {
  coffee: ICoffee
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const { description, image, name, price, tags } = coffee
  const theme = useTheme()
  const { changeCartItem } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if (quantity > 1) setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    changeCartItem(coffee.id, quantity)
  }
  
  return (
    <Container>
      <img src={image} alt="" />

      <div className="tags">
        {tags.map(tag => (
          <Tag key={tag}>
            <p>{tag}</p>
          </Tag>
        ))}
      </div>

      <div className="info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <Buy>
        <p>R${' '}<span>{formateNumberToReal(price)}</span></p>
        <div className="actions">
          <InputNumber
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            value={quantity}
          />
          <Button variant="TERTIARY" onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color={theme.white} weight="fill" />
          </Button>
        </div>
      </Buy>
    </Container>
  )
}
