import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"

import delivery from "../assets/delivery.svg"

export function Confirmed() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="grid gap-8 lg:gap-20 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="font-baloo text-yellow-dark text-3xl font-extrabold leading-snug">Uhu! Pedido confirmado</h2>
            <p className="text-base-subtitle leading-snug text-xl font-roboto mb-10">
              Agora é só aguardar que logo o café chegará até você
            </p>

            <div className="bg-confirmed p-px rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] overflow-hidden">
              <div className="bg-base-background rounded-tl-[5px] rounded-br-[5px] rounded-tr-[35px] rounded-bl-[35px] flex flex-col gap-8 p-8">
                <div className="flex gap-3 items-center">
                  <div className="rounded-full bg-purple text-white size-8 flex items-center justify-center">
                    <MapPin
                      weight="fill"
                      size={16}
                    />
                  </div>

                  <div className="text-base-text font-roboto leading-snug">
                    <span className="block">
                      Entrega em <strong>Rua</strong>
                    </span>
                    <span>Bairro - Cidade, UF</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="rounded-full bg-yellow text-white size-8 flex items-center justify-center">
                    <Timer
                      weight="fill"
                      size={16}
                    />
                  </div>

                  <div className="text-base-text font-roboto leading-snug">
                    <span className="block">Previsão de entrega</span>
                    <strong>20 min - 30 min</strong>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="rounded-full bg-yellow-dark text-white size-8 flex items-center justify-center">
                    <CurrencyDollar
                      weight="fill"
                      size={16}
                    />
                  </div>

                  <div className="text-base-text font-roboto leading-snug">
                    <span className="block">Pagamento na entrega</span>
                    <strong>Cartão de Crédito</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-max justify-self-center">
            <img
              src={delivery}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  )
}
