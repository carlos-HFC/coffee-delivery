import { ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

interface CartProps {
  numberOfItems: number
}

export function Cart(props: Readonly<CartProps>) {
  return (
    <Link
      to="/checkout"
      className="flex items-center justify-center p-2 rounded-md bg-yellow-light relative"
    >
      <ShoppingCart
        weight="fill"
        color="#c47f17"
        size={22}
      />

      {props.numberOfItems > 0 && (
        <div className="rounded-full text-white size-5 flex items-center justify-center font-roboto font-bold text-xs absolute bg-yellow-dark -top-2 -right-2">
          {props.numberOfItems}
        </div>
      )}
    </Link>
  )
}
