import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  
  border-radius: 8px;

  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme.purple};
  font-size: 0.875rem;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme['yellow-light']};

  border-radius: 8px;

  padding: 0.5rem;
  gap: 0.25rem;
`