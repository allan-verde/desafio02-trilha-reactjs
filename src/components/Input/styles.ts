import { css, styled } from 'styled-components'

type Props = {
  isFocused: boolean
  fullWidth: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;

  width: ${({ fullWidth }) => fullWidth ? '100%' : 'fit-content'};

  border: 1px solid ${({ theme }) => theme['gray-600']};
  border-radius: 4px;

  background-color: ${({ theme }) => theme['gray-700']};
  position: relative;

  ${({ isFocused }) => isFocused && css`
    border-color: ${({ theme }) => theme['yellow-dark']};
  `}

  caret-color: ${({ theme }) => theme['gray-400']};

  input {
    padding: 0.75rem;
    flex: 1;

    outline: none;
    box-shadow: none;
    border: none;

    background-color: transparent;
    
    font: 400 0.875rem 'Roboto', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-300']};
    
    ::placeholder {
      font: 400 0.875rem 'Roboto', sans-serif;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-400']};
    }

  }

  span {
    font: 400 0.75rem 'Roboto', sans-serif;
    font-style: italic;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-400']};
    margin-right: 0.75rem;
  }
`