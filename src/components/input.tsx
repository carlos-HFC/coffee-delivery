import { ComponentProps } from "react"

import { cn } from "../utils/cn"

interface InputProps extends ComponentProps<"input"> {
  label: string
}

export function Input(props: Readonly<InputProps>) {
  return (
    <div className={cn("relative flex items-center", props.className)}>
      <input
        {...props}
        className="p-3 outline-0 rounded w-full bg-base-input border border-base-button focus:border-yellow-dark placeholder:text-base-label text-base-text font-roboto text-sm flex-1 peer"
        placeholder={props.label}
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
}
