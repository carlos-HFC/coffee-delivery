import { Minus, Plus } from "@phosphor-icons/react"
import { ComponentProps, forwardRef } from "react"

interface InputProps extends ComponentProps<"input"> {
  onDecrement(): void
  onIncrement(): void
}

export const InputNumber = forwardRef<HTMLInputElement, Readonly<InputProps>>((props, ref) => {
  return (
    <div className="relative flex items-center justify-center gap-1 p-2 w-min bg-base-button rounded-md">
      <button
        type="button"
        className="text-purple hover:text-purple-dark"
        onClick={props.onDecrement}
      >
        <Minus size={14} />
      </button>
      <input
        {...props}
        ref={ref}
        className="bg-transparent outline-0 size-5 text-center text-base-title text-base font-roboto [&::-webkit-inner-spin-button]:hidden"
        type="number"
        min={1}
        defaultValue={1}
      />
      <button
        type="button"
        className="text-purple hover:text-purple-dark"
        onClick={props.onIncrement}
      >
        <Plus size={14} />
      </button>
    </div>
  )
})

InputNumber.displayName = "InputNumber"
