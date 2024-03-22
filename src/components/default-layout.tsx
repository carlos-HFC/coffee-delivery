import { Outlet } from "react-router-dom"

import { Header } from "./header"

export function DefaultLayout() {
  return (
    <>
      <Header />

      <main className="pt-28">
        <Outlet />
      </main>
    </>
  )
}
