import { CurrencyDollar, MapPinLine, Trash } from "@phosphor-icons/react"

import { Button } from "../components/button"
import { Input } from "../components/input"
import { InputNumber } from "../components/input-number"
import { Select } from "../components/select"

export function Checkout() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-10 md:pb-40">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          <div className="space-y-3">
            <h3 className="text-base-title text-lg leading-snug font-bold font-baloo">Cafés selecionados</h3>

            <div className="p-5 sm:p-10 rounded-tl-md rounded-br-md rounded-tr-[44px] rounded-bl-[44px] bg-base-card flex flex-col gap-6">
              <div className="flex items-start gap-2 flex-wrap sm:flex-nowrap justify-between sm:justify-start pb-6 border-b border-base-button lg:min-w-[350px]">
                <div className="w-1/3 sm:w-auto">
                  <img
                    src="/favicon.svg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-2 order-last sm:order-none w-full sm:w-auto sm:flex-1">
                  <span className="w-full leading-snug font-roboto text-base-subtitle">Expresso tradicional</span>

                  <div className="flex gap-2 *:w-full sm:*:w-auto">
                    <InputNumber />
                    <Button variant="secondary">
                      <Trash />
                      Remover
                    </Button>
                  </div>
                </div>

                <div className="w-1/3 sm:w-auto text-right">
                  <span className="text-base-text font-roboto font-bold leading-snug">R$ 9.9</span>
                </div>
              </div>

              <div className="flex items-start gap-2 flex-wrap sm:flex-nowrap justify-between sm:justify-start pb-6 border-b border-base-button lg:min-w-[350px]">
                <div className="w-1/3 sm:w-auto">
                  <img
                    src="/favicon.svg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-2 order-last sm:order-none w-full sm:w-auto sm:flex-1">
                  <span className="w-full leading-snug font-roboto text-base-subtitle">Expresso tradicional</span>

                  <div className="flex gap-2 *:w-full sm:*:w-auto">
                    <InputNumber />
                    <Button variant="secondary">
                      <Trash />
                      Remover
                    </Button>
                  </div>
                </div>

                <div className="w-1/3 sm:w-auto text-right">
                  <span className="text-base-text font-roboto font-bold leading-snug">R$ 9.9</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-base-text font-roboto text-sm leading-snug">Total de itens</span>
                  <span className="text-base-text font-roboto leading-snug">R$ 29.9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base-text font-roboto text-sm leading-snug">Entrega</span>
                  <span className="text-base-text font-roboto leading-snug">R$ 3.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base-subtitle font-roboto font-bold text-xl leading-snug">Total</span>
                  <span className="text-base-subtitle font-roboto font-bold text-xl leading-snug">R$ 29.9</span>
                </div>
              </div>

              <footer className="*:w-full">
                <Button>Confirmar pedido</Button>
              </footer>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-base-title text-lg leading-snug font-bold font-baloo">Complete seu pedido</h3>

            <div className="p-5 sm:p-10 rounded-md bg-base-card flex flex-col gap-8">
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
                />
                <Input
                  label="Rua"
                  required
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    label="Número"
                    required
                    className="sm:max-w-48"
                  />
                  <Input
                    label="Complemento"
                    className="flex-1"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    label="Bairro"
                    required
                    className="sm:max-w-48"
                  />
                  <Input
                    label="Cidade"
                    required
                    className="flex-1"
                  />
                  <Input
                    label="UF"
                    required
                    className="sm:max-w-16"
                  />
                </div>
              </div>
            </div>

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
                  name="payment-method"
                  icon="card"
                >
                  Cartão de crédito
                </Select>
                <Select
                  name="payment-method"
                  icon="bank"
                >
                  Cartão de débito
                </Select>
                <Select
                  name="payment-method"
                  icon="money"
                >
                  Dinheiro
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
