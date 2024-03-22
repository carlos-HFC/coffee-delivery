import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { DefaultLayout } from "../components/default-layout"

import { Checkout } from "../pages/checkout"
import { Confirmed } from "../pages/confirmed"
import { Home } from "../pages/home"

export function Router() {
  const location = useLocation()

  useEffect(() => {
    if (location?.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1))
        const elementPosition = Number(element?.getBoundingClientRect().top ?? 0) + window.scrollY

        window.scrollTo({
          top: elementPosition - 100,
          behavior: "smooth",
        })
      }, 100)
    }
  }, [location])

  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
          path="/confirmed"
          element={<Confirmed />}
        />
      </Route>
    </Routes>
  )
}
