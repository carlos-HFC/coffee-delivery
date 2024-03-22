import { ComponentProps, forwardRef } from "react"

import { cn } from "../utils/cn"

interface InputProps extends ComponentProps<"input"> {
  label: string
}

export const Input = forwardRef<HTMLInputElement, Readonly<InputProps>>((props, ref) => {
  return (
    <div className={cn("relative flex items-center", props.className)}>
      <input
        {...props}
        className="p-3 outline-0 rounded w-full bg-base-input border border-base-button focus:border-yellow-dark placeholder:text-base-label text-base-text font-roboto text-sm flex-1 peer disabled:bg-base-hover [&::-webkit-inner-spin-button]:hidden"
        placeholder={props.label}
        ref={ref}
      />
      <p
        className={cn(
          "absolute right-3 italic text-xs text-base-label font-roboto hidden",
          !props.required && "block peer-focus:hidden peer-placeholder-shown:block",
        )}
      >
        Opcional
      </p>
    </div>
  )
})

Input.displayName = "Input"
