import { PropsWithChildren, createContext, useContext, useReducer } from "react"

import { addCoffeeToCart, removeCoffeeToCart } from "../reducers/delivery/actions"
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
}

export const DeliveryContext = createContext({} as DeliveryContextProps)

export const useDelivery = () => useContext(DeliveryContext)

export function DeliveryProvider(props: PropsWithChildren) {
  const [deliveryState, dispatch] = useReducer(deliveryReducer, {
    items: [],
    numberOfItems: 0,
  })

  const { items, numberOfItems } = deliveryState

  function addToCart(data: Coffee) {
    dispatch(addCoffeeToCart(data))
  }

  function removeToCart(id: number) {
    dispatch(removeCoffeeToCart(id))
  }

  return (
    <DeliveryContext.Provider value={{ items, numberOfItems, addToCart, removeToCart }}>
      {props.children}
    </DeliveryContext.Provider>
  )
}
