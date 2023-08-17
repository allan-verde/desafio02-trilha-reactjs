import { createContext, useEffect, useState } from 'react'
import { ICoffee, coffeeList } from '../utils/listCoffe'

interface ICartItem {
  item: ICoffee
  quantity: number
}

interface CartContextType {
  cart: ICartItem[]
  changeCartItem(coffeeId: number, quantity: number): void
  removeCartItem(coffeeId: number): void
  removeAllCartItems(): void
}

const initialState: CartContextType = {
  cart: [],
  changeCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {}
}

export const CartContext = createContext<CartContextType>(initialState)

interface CartContextProviderProps {
  children: React.ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>(() => {
    const cart = localStorage.getItem('@coffee-delivery:cart')

    if (cart) {
      return JSON.parse(cart)
    }

    return []
  })

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

  function removeAllCartItems() {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        changeCartItem,
        removeCartItem,
        removeAllCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}