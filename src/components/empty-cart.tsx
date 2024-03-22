import { ShoppingCart } from "@phosphor-icons/react"

import { Link } from "react-router-dom"
import { Button } from "./button"

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center">
      <ShoppingCart
        size={120}
        className="text-yellow"
      />

      <h2 className="font-baloo font-bold text-base-text text-5xl leading-snug">Ainda sem pedidos</h2>

      <p className="font-roboto text-base-label text-xl leading-snug">Seu carrinho está vazio. Adicione algo do menu</p>

      <Link
        to="/#menu"
        className="flex justify-center items-center w-full sm:w-1/2 lg:w-1/3"
      >
        <Button className="w-full">Retornar à home</Button>
      </Link>
    </div>
  )
}
