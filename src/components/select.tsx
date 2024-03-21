import { Bank, CreditCard, Money } from "@phosphor-icons/react"
import { PropsWithChildren } from "react"

interface SelectProps extends PropsWithChildren {
  icon?: "card" | "money" | "bank"
  checked?: boolean
  name: string
}

export function Select(props: Readonly<SelectProps>) {
  let icon

  switch (props.icon) {
    case "money":
      icon = (
        <Money
          size={16}
          color="#8047f8"
        />
      )
      break
    case "bank":
      icon = (
        <Bank
          size={16}
          color="#8047f8"
        />
      )
      break
    case "card":
    default:
      icon = (
        <CreditCard
          size={16}
          color="#8047f8"
        />
      )
      break
  }

  return (
    <label className="rounded-md border border-transparent has-[:checked]:border-purple p-4 flex items-center bg-base-button hover:bg-base-hover has-[:checked]:bg-purple-light cursor-pointer relative group">
      <input
        name={props.name}
        type="radio"
        checked={props.checked}
        className="absolute inset-0 invisible"
      />

      <span className="gap-3 flex items-center justify-center uppercase text-base-text group-hover:text-base-subtitle text-xs font-roboto">
        {icon}
        {props.children}
      </span>
    </label>
  )
}
