import { Button } from "./button"
import { InputNumber } from "./input-number"
import { Tag } from "./tag"

import { numberFormatter } from "../utils/formatter"

interface CatalogProps {
  id: number
  name: string
  description: string
  image: string
  price: number
  tags: string[]
}

export function Catalog(props: Readonly<CatalogProps>) {
  return (
    <div className="relative max-w-64 min-h-80 bg-base-card rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] p-5 pt-0 m-5 text-center flex flex-col">
      <img
        src={props.image}
        alt={props.name}
        className="-mt-5 size-32 self-center mb-3"
      />

      <div className="flex items-center justify-center gap-1 mb-4">
        {props.tags.map(item => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <h3 className="text-base-subtitle font-bold font-baloo text-xl mb-2">{props.name}</h3>
      <p className="text-base-label font-roboto text-sm flex-1">{props.description}</p>

      <footer className="flex items-center justify-between">
        <p className="text-base-text font-roboto text-sm">
          R$ <span className="font-baloo text-2xl font-extrabold">{numberFormatter.format(props.price)}</span>
        </p>

        <div className="flex gap-2">
          <InputNumber />
          <Button variant="icon" />
        </div>
      </footer>
    </div>
  )
}
