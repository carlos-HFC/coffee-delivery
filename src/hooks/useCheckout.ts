import { TAX } from "../constants"
import { useDelivery } from "../contexts/delivery"

export function useCheckout() {
  const { items } = useDelivery()

  const checkout = items.reduce(
    (accumulator, current) => {
      accumulator.totalItems += current.price * current.qty
      accumulator.total = accumulator.totalItems + accumulator.tax

      return accumulator
    },
    {
      tax: TAX,
      total: 0,
      totalItems: 0,
    },
  )

  return checkout
}
