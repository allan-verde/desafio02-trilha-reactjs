import { styled } from 'styled-components'

export const Container = styled.a`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  background-color: ${({ theme }) => theme['yellow-light']};

  border-radius: 6px;

  cursor: pointer;

  transition: background-color 0.2s;

  > div {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;
    
    padding: 0.25rem 0.5rem;
  
    background-color: ${({ theme }) => theme['yellow-dark']};
    
    span {
      font: 600 0.75rem 'Roboto', sans-serif;
      color: ${({ theme }) => theme.white};
      text-align: center;
      letter-spacing: -6%;
      align-self: flex-end;
    }
  }

`
