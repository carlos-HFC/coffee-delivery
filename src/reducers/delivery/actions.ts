export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
}

interface AddCoffeeToCart {
  id: number
  name: string
  image: string
  price: number
  qty: number
}

export function addCoffeeToCart(coffee: AddCoffeeToCart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function removeCoffeeToCart(id: number) {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: {
      id,
    },
  }
}
