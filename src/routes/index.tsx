import { Route, Routes } from "react-router-dom"

import { DefaultLayout } from "../components/default-layout"

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
      </Route>
    </Routes>
  )
}
