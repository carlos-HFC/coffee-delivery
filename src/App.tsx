import { BrowserRouter } from "react-router-dom"

import { DeliveryProvider } from "./contexts/delivery"
import { Router } from "./routes"

export function App() {
  return (
    <BrowserRouter>
      <DeliveryProvider>
        <Router />
      </DeliveryProvider>
    </BrowserRouter>
  )
}
