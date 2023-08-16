import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;

  button {
    border: none;
    background-color: transparent;
  }
  
  button:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-dark']};
  }

  span {
    font: 400 1rem 'Roboto', sans-serif;
    color: ${({ theme }) => theme['gray-100']};
    line-height: 130%;
    min-width: 1.25rem;
    text-align: center;
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.purple};

    &:hover {
      color: ${({ theme }) => theme['purple-dark']}; 
    }
  }
`
