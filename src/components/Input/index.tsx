import { InputHTMLAttributes, useState } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  fullWidth?: boolean
}

export function Input({ optional=false, fullWidth=false, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Container
      isFocused={isFocused}
      fullWidth={fullWidth}
    >
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        {...rest}
      />

      {(optional && !value) && (
        <span>Optional</span>
      )}
    </Container>
  )
}