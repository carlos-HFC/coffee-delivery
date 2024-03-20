import { Minus, Plus } from "@phosphor-icons/react"
import { ComponentProps, useRef } from "react"

interface InputProps extends ComponentProps<"input"> {}

export function InputNumber(props: Readonly<InputProps>) {
  const inputRef = useRef({} as HTMLInputElement)

  return (
    <div className="relative flex items-center justify-center gap-1 p-2 w-min bg-base-button rounded-md">
      <button
        type="button"
        className="text-purple hover:text-purple-dark"
        onClick={() => inputRef.current.stepDown()}
      >
        <Minus size={14} />
      </button>
      <input
        {...props}
        readOnly
        ref={inputRef}
        className="bg-transparent outline-0 size-5 text-center text-base-title text-base font-roboto [&::-webkit-inner-spin-button]:hidden"
        type="number"
        min={1}
      />
      <button
        type="button"
        className="text-purple hover:text-purple-dark"
        onClick={() => inputRef.current.stepUp()}
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
