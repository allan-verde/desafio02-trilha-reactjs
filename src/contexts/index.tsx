import { CartContextProvider } from './cart'

interface AppProviderProps {
  children: React.ReactNode
}


export function AppProvider({ children }: AppProviderProps) {
  return (
    <CartContextProvider>
      {children}
    </CartContextProvider>
  )
}
