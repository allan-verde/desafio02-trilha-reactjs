import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 1120px;
  margin: 0 auto 9rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  h1 {
    font: 600 1.125rem 'Baloo 2', cursive;
    line-height: 130%;
  }
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    background-color: ${({ theme }) => theme['gray-800']};
    
    > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: start;

  h2 {
    font: 400 1rem 'Roboto', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-200']};
  }

  p {
    font: 400 0.875rem 'Roboto', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-300']};
  }
`

export const PaymentMethod = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    flex: 1;
  }

  input[placeholder="CEP"], input[placeholder="Número"], input[placeholder="Bairro"] {
    max-width: 200px;
  }

  input[placeholder="UF"] {
    max-width: 60px;
  }

  input[placeholder="CEP"]::after {
    content: "optional";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.75rem;
    color: ${({ theme }) => theme['gray-400']};
    font-size: 0.875rem;
    font-style: italic;
  }

  .group {
    display: flex;
    gap: 0.75rem;
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    border-radius: 6px 44px;
    background-color: ${({ theme }) => theme['gray-800']};
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .list > .item {
    display: flex;
    gap: 3.125rem;

    > div {
      display: flex;
      gap: 1.25rem;
      align-items: start;

      img {
        width: 64px;
        height: 64px;
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        > p {
          font: 400 1rem 'Roboto', sans-serif;
          line-height: 130%;
          color: ${({ theme }) => theme['gray-200']};
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }
      }
    }

    .price {
      font: 600 1rem 'Roboto', sans-serif;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-300']};
    }
  }
  
  .quantity {
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme['gray-600']};
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;

    > span {
      width: 1rem;
      text-align: center;
    }

    p {
      color: ${({ theme }) => theme['gray-100']};
      font: 400 1rem 'Roboto', sans-serif;
      line-height: 130%;
    }

    button {
      background-color: transparent;
      border: none;
    }
  }

  .separator {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme['gray-600']};
  }
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-300']};

    p {
      font-size: 0.875rem;
    }
  }

  > div:last-child {
    p, span {
      font: 600 1.25rem 'Roboto', sans-serif;
    }
  }
`
