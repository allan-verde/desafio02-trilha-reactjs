import { css, styled } from 'styled-components'

export type Props = {
  variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
}

export const Container = styled.button<Props>`
  border: none;
  border-radius: 6px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  line-height: 160%;
  text-transform: uppercase;

  animation: 0.2s ease-out 0s 1 slideInFromBottom;

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'PRIMARY':
        return css`
          width: 100%;

          padding: 0.75rem 0.5rem;

          font: 600 0.875rem 'Roboto', sans-serif;
          color: ${({ theme }) => theme.white};
          
          background-color: ${({ theme }) => theme.yellow};

          &:hover {
            background-color: ${({ theme }) => theme['yellow-dark']};
          }

          &:disabled {
            background-color: ${({ theme }) => theme['gray-400']};
            cursor: not-allowed;
          }
        `
      
      case 'SECONDARY':
        return css`
          padding: 0 0.5rem;

          font: 400 0.75rem 'Roboto', sans-serif;
          color: ${({ theme }) => theme['gray-300']};
          
          background-color: ${({ theme }) => theme['gray-600']};
          
          &:hover {
            background-color: ${({ theme }) => theme['gray-500']};
          }
        `
      
      case 'TERTIARY':
        return css`
          padding: 0.5rem;

          background-color: ${({ theme }) => theme['purple-dark']};

          &:hover {
            background-color: ${({ theme }) => theme['purple']};
          }
        `
    
      default:
        return css``
    }
  }}
`