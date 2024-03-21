import { MapPin } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { Cart } from "./cart"

import logo from "../assets/logo.svg"

export function Header() {
  return (
    <header className="bg-base-background">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-4 py-8">
        <Link to="/">
          <img
            src={logo}
            alt=""
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-md bg-purple-light p-2">
            <MapPin
              size={22}
              weight="fill"
              className="text-purple"
            />
            <p className="text-purple-dark text-sm font-roboto">São Paulo, SP</p>
          </div>

          <Cart />
        </div>
      </div>
    </header>
  )
}
