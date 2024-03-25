import { PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react"

import { CART_ITEMS_STORAGE } from "../constants"
import { addCoffeeToCart, cleanAllCart, removeCoffeeToCart } from "../reducers/delivery/actions"
import { deliveryReducer } from "../reducers/delivery/reducer"

interface Coffee {
  id: number
  name: string
  image: string
  price: number
  qty: number
}

interface DeliveryContextProps {
  items: Coffee[]
  numberOfItems: number
  addToCart(data: Coffee): void
  removeToCart(id: number): void
  cleanCart(): void
}

export const DeliveryContext = createContext({} as DeliveryContextProps)

export const useDelivery = () => useContext(DeliveryContext)

export function DeliveryProvider(props: PropsWithChildren) {
  const [deliveryState, dispatch] = useReducer(
    deliveryReducer,
    {
      items: [],
      numberOfItems: 0,
    },
    initialState => {
      const cartItemsStorage = localStorage.getItem(CART_ITEMS_STORAGE)

      if (cartItemsStorage) {
        const parsedCartItems = JSON.parse(cartItemsStorage)

        return parsedCartItems
      }

      return initialState
    },
  )

  const { items, numberOfItems } = deliveryState

  useEffect(() => {
    const cartItemsJSON = JSON.stringify(deliveryState)

    localStorage.setItem(CART_ITEMS_STORAGE, cartItemsJSON)
  }, [deliveryState])

  function addToCart(data: Coffee) {
    dispatch(addCoffeeToCart(data))
  }

  function removeToCart(id: number) {
    dispatch(removeCoffeeToCart(id))
  }

  function cleanCart() {
    dispatch(cleanAllCart())
  }

  return (
    <DeliveryContext.Provider value={{ items, numberOfItems, addToCart, removeToCart, cleanCart }}>
      {props.children}
    </DeliveryContext.Provider>
  )
}
