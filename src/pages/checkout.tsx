import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react"
import { ChangeEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../components/button"
import { EmptyCart } from "../components/empty-cart"
import { Input } from "../components/input"
import { ProductCart } from "../components/product-cart"
import { Select } from "../components/select"

import { ORDER_INFO_STORAGE } from "../constants"
import { useDelivery } from "../contexts/delivery"
import { useCheckout } from "../hooks/useCheckout"
import { numberFormatter } from "../utils/formatter"

type ResponseCep =
  | { erro: true }
  | {
      logradouro: string
      bairro: string
      localidade: string
      uf: string
    }

const DeliveryAddress = {
  cep: "",
  address: "",
  number: "",
  district: "",
  city: "",
  uf: "",
  complement: "",
} as const

type Form = {
  [key in keyof typeof DeliveryAddress]: HTMLInputElement
}

export function Checkout() {
  const navigate = useNavigate()

  const { items } = useDelivery()
  const { tax, total, totalItems } = useCheckout()

  const formRef = useRef({} as HTMLFormElement & Form)

  const [cep, setCep] = useState("")
  const [payment, setPayment] = useState("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPayment(event.target.value)
  }

  async function searchCep() {
    if (cep.length < 9) return

    const keys = Object.keys(DeliveryAddress)

    for (const key of keys) {
      if (key !== "cep") {
        formRef.current[key].value = ""
      }
    }

    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response = (await res.json()) as ResponseCep

    if ("erro" in response) {
      for (const key of keys) {
        if (key !== "cep") {
          formRef.current[key].setAttribute("disabled", true)
        }
      }

      return
    }

    const { bairro: district, localidade: city, logradouro: address, uf } = response

    formRef.current.district.value = district
    formRef.current.address.value = address
    formRef.current.city.value = city
    formRef.current.uf.value = uf

    for (const key of keys) {
      if (key !== "cep") {
        if (formRef.current[key].value.length <= 0) {
          formRef.current[key].removeAttribute("disabled")
        } else {
          formRef.current[key].setAttribute("disabled", true)
        }
      }
    }
  }

  function handleCompleteOrder() {
    const address = `${formRef.current.address.value}, ${formRef.current.number.value}`

    if (formRef.current.complement.value) address.concat(` - ${formRef.current.complement.value}`)

    const orderInfo = JSON.stringify({
      address,
      district: formRef.current.district.value,
      city: formRef.current.city.value,
      uf: formRef.current.uf.value,
      payment,
    })

    localStorage.setItem(ORDER_INFO_STORAGE, orderInfo)

    navigate("/confirmed", {
      replace: true,
    })
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {items.length <= 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <div className="space-y-3">
              <h3 className="text-base-title text-lg leading-snug font-bold font-baloo">Cafés selecionados</h3>

              <div className="p-5 sm:p-10 rounded-tl-md rounded-br-md rounded-tr-[44px] rounded-bl-[44px] bg-base-card flex flex-col gap-6">
                {items.map(item => (
                  <ProductCart
                    key={item.id}
                    {...item}
                  />
                ))}

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base-text font-roboto text-sm leading-snug">Total de itens</span>
                    <span className="text-base-text font-roboto leading-snug">
                      R$ {numberFormatter.format(totalItems)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base-text font-roboto text-sm leading-snug">Entrega</span>
                    <span className="text-base-text font-roboto leading-snug">R$ {numberFormatter.format(tax)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base-subtitle font-roboto font-bold text-xl leading-snug">Total</span>
                    <span className="text-base-subtitle font-roboto font-bold text-xl leading-snug">
                      R$ {numberFormatter.format(total)}
                    </span>
                  </div>
                </div>

                <footer className="*:w-full">
                  <Button onClick={handleCompleteOrder}>Confirmar pedido</Button>
                </footer>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <h3 className="text-base-title text-lg leading-snug font-bold font-baloo">Complete seu pedido</h3>

              <form
                ref={formRef}
                className="p-5 sm:p-10 rounded-md bg-base-card flex flex-col gap-8"
              >
                <div className="flex gap-2">
                  <MapPinLine
                    size={22}
                    className="text-yellow-dark"
                  />

                  <div>
                    <h4 className="text-base-subtitle font-roboto leading-snug">Endereço de Entrega</h4>
                    <p className="text-base-text font-roboto text-sm leading-snug">
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Input
                    label="CEP"
                    required
                    className="sm:max-w-48"
                    name="cep"
                    value={cep}
                    onChange={event =>
                      setCep(event.target.value.replace(/\D/g, "").replace(/(\d{5})(\d{3})\d?$/, "$1-$2"))
                    }
                    onBlur={searchCep}
                  />
                  <Input
                    label="Rua"
                    required
                    name="address"
                    disabled
                  />

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      label="Número"
                      type="number"
                      required
                      className="sm:max-w-48"
                      name="number"
                      disabled
                    />
                    <Input
                      label="Complemento"
                      className="flex-1"
                      name="complement"
                      disabled
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      label="Bairro"
                      required
                      className="sm:max-w-48"
                      name="district"
                      disabled
                    />
                    <Input
                      label="Cidade"
                      required
                      className="flex-1"
                      name="city"
                      disabled
                    />
                    <Input
                      label="UF"
                      required
                      className="sm:max-w-16"
                      name="uf"
                      disabled
                    />
                  </div>
                </div>
              </form>

              <div className="p-5 sm:p-10 rounded-md bg-base-card flex flex-col gap-8">
                <div className="flex gap-2">
                  <CurrencyDollar
                    size={22}
                    className="text-purple"
                  />

                  <div>
                    <h4 className="text-base-subtitle font-roboto leading-snug">Pagamento</h4>
                    <p className="text-base-text font-roboto text-sm leading-snug">
                      O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row *:flex-1 gap-3">
                  <Select
                    name="payment"
                    icon="card"
                    value="credit-card"
                    onChange={handleChange}
                    checked={payment === "credit-card"}
                  >
                    Cartão de crédito
                  </Select>
                  <Select
                    name="payment"
                    icon="bank"
                    value="debit-card"
                    onChange={handleChange}
                    checked={payment === "debit-card"}
                  >
                    Cartão de débito
                  </Select>
                  <Select
                    name="payment"
                    icon="money"
                    value="cash"
                    onChange={handleChange}
                    checked={payment === "cash"}
                  >
                    Dinheiro
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
