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
`