import { ActionTypes } from "./actions"

interface Coffee {
  id: number
  name: string
  image: string
  price: number
  qty: number
}

interface DeliveryState {
  numberOfItems: number
  items: Coffee[]
}

interface DeliveryAction {
  type: string
  payload?: any
}

export function deliveryReducer(state: DeliveryState, action: DeliveryAction) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.coffee.id)

      if (itemIndex >= 0) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndex),
            { ...state.items[itemIndex], qty: state.items[itemIndex].qty + action.payload.coffee.qty },
            ...state.items.slice(itemIndex + 1),
          ],
        }
      }

      return {
        items: [...state.items, action.payload.coffee],
        numberOfItems: state.numberOfItems + 1,
      }
    }
    case ActionTypes.REMOVE_TO_CART: {
      const items = state.items.filter(item => item.id !== action.payload.id)

      return {
        items,
        numberOfItems: state.numberOfItems - 1,
      }
    }
    default:
      return state
  }
}
