import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 2rem;
    transform: translateY(-3.25rem);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    h1 {
      font: 700 2rem 'Baloo 2', cursive;
      line-height: 130%;
      color: ${({ theme }) => theme['yellow-dark']};
    }

    p {
      font: 400 1.25rem 'Roboto', sans-serif;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-200']};
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, ${({ theme }) => theme.yellow}, ${({ theme }) => theme.purple}) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.75rem;
    }

    .icon {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 999px;

      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    .delivery {
      background-color: ${({ theme }) => theme['purple']};
    }

    .timer {
      background-color: ${({ theme }) => theme['yellow']};
    }

    .dollar {
      background-color: ${({ theme }) => theme['yellow-dark']};
    }

    .item {
      display: flex;
      flex-direction: column;

      p {
        font: 400 1rem 'Roboto', sans-serif;
        line-height: 130%;
        color: ${({ theme }) => theme['gray-300']};
      }

      span {
        font: 600 1rem 'Roboto', sans-serif;
        line-height: 130%;
        color: ${({ theme }) => theme['gray-300']};
      }
    }
  }
`