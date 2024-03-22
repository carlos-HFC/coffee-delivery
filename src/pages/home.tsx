import { Banner } from "../components/banner"
import { Catalog } from "../components/catalog"

import { COFFEES } from "../constants"

export function Home() {
  return (
    <>
      <Banner />

      <div
        className="max-w-6xl mx-auto px-4 pt-8 pb-40 flex flex-col gap-12"
        id="menu"
      >
        <h4 className="text-base-subtitle font-extrabold font-baloo text-3xl leading-snug">Nossos cafés</h4>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 *:flex-1">
          {COFFEES.map(item => (
            <Catalog
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </>
  )
}
