import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-800']};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 1.25rem;

  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin: -20px auto 0;
  }

  .tags {
    margin: 0.75rem auto 1rem;
    display: flex;
    gap: 0.25rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    margin-bottom: 2rem;

    h3 {
      font: 600 1.25rem 'Baloo 2', cursive;
      line-height: 130%;
    }

    p {
      color: ${({ theme }) => theme['gray-400']};
      font: 400 0.875rem 'Roboto', sans-serif;
      line-height: 130%;
    }
  }
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.5rem;
  
  border-radius: 100px;

  background-color: ${({ theme }) => theme['yellow-light']};
  
  p {
    color: ${({ theme }) => theme['yellow-dark']};
    font: 600 0.625rem 'Roboto', sans-serif;
    text-transform: uppercase;
    line-height: 130%;
  }
`

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1.5rem;

  > p {
    font: 400 0.875rem 'Roboto', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-300']};

    span {
      font: 700 1.5rem 'Baloo 2', cursive;
    }
  }

  .actions {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.5rem;
  }
`
