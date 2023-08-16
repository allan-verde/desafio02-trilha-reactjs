import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    height: 100vh;
  }
  
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme['purple']};
  }

  body {
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }
`
