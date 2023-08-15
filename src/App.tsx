import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Checkout } from './pages/Checkout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Checkout />
      <GlobalStyle />
    </ThemeProvider>
  )
}
