import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"

import cupCoffee from "../assets/cup-coffee.png"

export function Banner() {
  return (
    <div className="bg-banner">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex gap-14 flex-col lg:flex-row">
        <div className="flex flex-col justify-between flex-1 gap-8 md:gap-16">
          <div>
            <h2 className="text-base-title font-extrabold font-baloo text-3xl sm:text-5xl leading-snug mb-4">
              Encontre o café perfeito para qualquer hora do dia
            </h2>
            <p className="text-base-subtitle font-roboto sm:text-xl leading-snug">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-yellow-dark">
                  <ShoppingCart
                    weight="fill"
                    className="text-white"
                  />
                </div>
                <span className="text-base-text leading-snug font-roboto">Compra simples e segura</span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-yellow">
                  <Timer
                    weight="fill"
                    className="text-white"
                  />
                </div>
                <span className="text-base-text leading-snug font-roboto">Entrega rápida e rastreada</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-base-text">
                  <Package
                    weight="fill"
                    className="text-white"
                  />
                </div>
                <span className="text-base-text leading-snug font-roboto">Embalagem mantém o café intacto</span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full p-2 bg-purple">
                  <Coffee
                    weight="fill"
                    className="text-white"
                  />
                </div>
                <span className="text-base-text leading-snug font-roboto">O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={cupCoffee}
          alt=""
          width={476}
          className="object-contain self-center"
        />
      </div>
    </div>
  )
}
