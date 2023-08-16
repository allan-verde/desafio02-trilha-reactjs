import { ShoppingCartSimple } from 'phosphor-react'
import { Button } from '../Button'
import { InputNumber } from '../InputNumber'
import { Buy, Container, Tag } from './styles'
import { useTheme } from 'styled-components'

interface CardCoffeeProps {
  coffee: any
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const theme = useTheme()
  
  return (
    <Container>
      <img src={coffee.image} alt="" />

      <div className="tags">
        {coffee.tags.map((tag: any) => (
          <Tag key={tag}>
            <p>{tag}</p>
          </Tag>
        ))}
      </div>

      <div className="info">
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </div>

      <Buy>
        <p>R${' '}<span>{(9.9).toFixed(2).split('.').join(',')}</span></p>
        <div className="actions">
          <InputNumber onDecrement={() => null} onIncrement={() => null} value={1} />
          <Button variant="TERTIARY">
            <ShoppingCartSimple size={22} color={theme.white} weight="fill" />
          </Button>
        </div>
      </Buy>
    </Container>
  )
}
