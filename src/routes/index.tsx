import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "../components/default-layout"

import { Checkout } from "../pages/checkout"
import { Confirmed } from "../pages/confirmed"
import { Home } from "../pages/home"

export function Router() {
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
