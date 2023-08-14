import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 1120px;
  margin: 0 auto 9rem;
  min-height: 100vh;
`

export const Intro = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;

    gap: 4.125rem;
  }

  
  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font: 700 3rem 'Baloo 2', cursive;
      line-height: 130%;
    }

    p {
      font: 400 1.25rem 'Roboto', sans-serif;
      line-height: 130%;
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    
    & > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-basis: calc(50% - 1.25rem);

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 999px;
      }
    }
    
    :nth-child(1) {
      > div {
        background-color: ${({ theme }) => theme['yellow-dark']};
      }
    }

    :nth-child(2) {
      > div {
        background-color: ${({ theme }) => theme['gray-300']};
      }
    }
    :nth-child(3) {
      > div {
        background-color: ${({ theme }) => theme['yellow']};
      }
    }

    :nth-child(4) {
      > div {
        background-color: ${({ theme }) => theme.purple};
      }
    }
  }

  & > img {
    width: 476px;
    height: 360px;
  }
`

export const CoffeeList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  align-items: start;

  h2 {
    font: 700 2rem 'Baloo 2', cursive;
    line-height: 130%;
  }

  .list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
    justify-content: center;
  }

  .list > .item {
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

    .tags > div {
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

    .buy {
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

        > button {
          display: flex;
          padding: 0.5rem;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          border: none;
          background-color: ${({ theme }) => theme['purple']};
        }
      }
    }
  }
`