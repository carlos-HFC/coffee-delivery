import { ShoppingCartSimple } from "@phosphor-icons/react"
import { ComponentProps } from "react"

import { cn } from "../utils/cn"

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "icon"
}

export function Button(props: Readonly<ButtonProps>) {
  let variant = ""

  switch (props.variant) {
    case "secondary":
      variant = "bg-base-button hover:bg-base-hover text-subtitle text-xs font-roboto p-2"
      break
    case "icon":
      variant = "bg-purple-dark hover:bg-purple p-2"
      break
    case "primary":
    default:
      variant = "bg-yellow hover:bg-yellow-dark text-white font-bold text-sm font-roboto p-3 min-w-32"
      break
  }

  return (
    <button
      {...props}
      className={cn("rounded-md uppercase border-0 flex items-center justify-center gap-1", variant)}
    >
      {props.variant === "icon" ? (
        <ShoppingCartSimple
          weight="fill"
          color="#f3f2f2"
          size={22}
        />
      ) : (
        props.children
      )}
    </button>
  )
}
