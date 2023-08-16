import { Container } from './styles'

import { Minus, Plus } from 'phosphor-react'

interface InputNumberProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

export function InputNumber({ value, onDecrement, onIncrement }: InputNumberProps) {
  return (
    <Container>
      <button onClick={onDecrement}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{value}</span>
      <button onClick={onIncrement}>
        <Plus weight="bold" size={14} />
      </button>
    </Container>
  )
}
