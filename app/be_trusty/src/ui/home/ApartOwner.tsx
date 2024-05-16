'use client'

import Image from "next/image"
import { ApartType } from "../../../typedefs/home"
import { roboto } from "../fonts"

export default function ApartOwner({ name, img }: ApartType['owner']) {
  return (
    <div style={roboto.style} className="w-full md:min-w-[320px] mt-2 mb-6">
      <h1 className="mb-2 text-[20px] font-bold text-white">Propietario</h1>
      <div className="flex items-center justify-start">
        <Image loading="lazy" src={`/img/${img}.webp`} height={100} width={100} className="h-[50px] w-[50px] object-cover rounded-full shadow-sm shadow-gray-300" alt="Apart owner's photo"/>
        <h2 className="ml-4 text-[16px] font-medium text-white">{ name }</h2>
      </div>
    </div>
  )
}