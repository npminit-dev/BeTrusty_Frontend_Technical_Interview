'use client'

import { popp, roboto } from "../fonts";

export default function ApartDescription({ description }: { description: string }) {
  return (
    <div className="my-4 w-full md:max-w-[320px]">
      <h2 style={roboto.style} className="text-[20px] font-bold text-white">Descripcion</h2>
      <p style={popp.style} className="text-[16px] font-light text-white my-4">{ description }</p>
    </div>
  )
}