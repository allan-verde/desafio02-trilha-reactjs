import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AppProvider } from './contexts'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AppProvider>
          <Router />
          <GlobalStyle />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
