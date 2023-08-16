import { createContext, useState } from 'react'
import { ICoffee, coffeeList } from '../utils/listCoffe'

interface ICartItem {
  item: ICoffee
  quantity: number
}

interface CartContextType {
  cart: ICartItem[]
  changeCartItem(coffeeId: number, quantity: number): void
  removeCartItem(coffeeId: number): void
}

const initialState: CartContextType = {
  cart: [],
  changeCartItem: () => {},
  removeCartItem: () => {}
}

export const CartContext = createContext<CartContextType>(initialState)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>([])

  function changeCartItem(coffeeId: number, quantity: number) {
    setCart((state) => {
      const foundItem = state.find((item) => item.item.id === coffeeId)

      if (foundItem) {
        if (quantity <= 0) {
          return state
        }

        foundItem.quantity = quantity
        return state.map(item => item.item.id === foundItem.item.id ? foundItem : item)
      }

      const foundCoffee = coffeeList.find((item) => item.id === coffeeId)

      if (!foundCoffee || quantity <= 0) {
        return state
      }

      return [
        {
          item: foundCoffee,
          quantity
        },
        ...state
      ]
    })
  }
  
  function removeCartItem(coffeeId: number) {
    setCart((state) => {
      const foundItem = state.find((item) => item.item.id === coffeeId)

      if (foundItem) {
        return state.filter(item => item.item.id !== foundItem.item.id)
      }

      return state
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        changeCartItem,
        removeCartItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}