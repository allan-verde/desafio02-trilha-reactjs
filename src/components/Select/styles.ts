import { ButtonHTMLAttributes } from 'react'
import { styled } from 'styled-components'

export type SelectProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean
}


export const Container = styled.div<SelectProps>`
  display: flex;
  align-items: center;
  flex: 1;
  
  gap: 0.75rem;
  padding: 1rem;

  border-radius: 6px;
  border: 1px solid transparent;

  border-color: ${({ theme, selected }) => selected ? theme.purple : 'transparent'};
  background-color: ${({ theme, selected }) => selected ? theme['purple-light'] : theme['gray-600']};

  animation: fade 0.5s;

  p {
    font: 400 0.75rem 'Roboto', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-300']};
    text-transform: uppercase;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
    cursor: pointer;
  }
`
