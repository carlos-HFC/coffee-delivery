import { Trash } from "@phosphor-icons/react"
import { useRef } from "react"

import { Button } from "./button"
import { InputNumber } from "./input-number"

import { useDelivery } from "../contexts/delivery"
import { numberFormatter } from "../utils/formatter"

interface ProductCartProps {
  id: number
  name: string
  image: string
  price: number
  qty: number
}

export function ProductCart(props: Readonly<ProductCartProps>) {
  const { addToCart, removeToCart } = useDelivery()

  const inputRef = useRef({} as HTMLInputElement)

  function handleChangeQty(qty: number) {
    if (props.qty === 1) return

    addToCart({
      ...props,
      qty,
    })
  }

  function handleRemoveItem() {
    removeToCart(props.id)
  }

  return (
    <div
      key={props.id}
      className="flex items-start gap-2 flex-wrap sm:flex-nowrap justify-between sm:justify-start pb-6 border-b border-base-button lg:min-w-[350px]"
    >
      <div className="w-1/3 sm:w-auto">
        <img
          src={props.image}
          alt={props.name}
          className="size-16"
        />
      </div>

      <div className="flex flex-col gap-2 order-last sm:order-none w-full sm:w-auto sm:flex-1">
        <span className="w-full leading-snug font-roboto text-base-subtitle">{props.name}</span>

        <div className="flex gap-2 *:w-full sm:*:w-auto">
          <InputNumber
            ref={inputRef}
            value={props.qty}
            onIncrement={() => {
              inputRef.current.stepUp()
              handleChangeQty(+1)
            }}
            onDecrement={() => {
              inputRef.current.stepDown()
              handleChangeQty(-1)
            }}
          />
          <Button
            variant="secondary"
            onClick={handleRemoveItem}
          >
            <Trash
              size={16}
              className="text-purple"
            />
            Remover
          </Button>
        </div>
      </div>

      <div className="w-1/3 sm:w-auto text-right">
        <span className="text-base-text font-roboto font-bold leading-snug">
          R$ {numberFormatter.format(props.price * props.qty)}
        </span>
      </div>
    </div>
  )
}
