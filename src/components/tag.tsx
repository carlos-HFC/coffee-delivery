import { PropsWithChildren } from "react"

interface TagProps extends PropsWithChildren {}

export function Tag(props: Readonly<TagProps>) {
  return (
    <span className="bg-yellow-light text-yellow-dark rounded-3xl uppercase font-bold font-roboto text-[10px] py-1 px-2">
      {props.children}
    </span>
  )
}
