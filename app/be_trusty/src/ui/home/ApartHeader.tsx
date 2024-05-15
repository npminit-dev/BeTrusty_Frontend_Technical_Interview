'use client'

import { FaPencilAlt, FaShare } from "react-icons/fa"
import { ApartHeaderProps } from "../../../typedefs/home"
import { roboto } from '../fonts'

export default function ApartHeader({ owner }: ApartHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between px-4 py-4" onClick={() => console.log('hello world')}>
      <h2 style={roboto.style} className="font-bold text-white text-[24px]">{ owner }</h2>
      <div className="w-[100px] h-[20px] flex items-center justify-between">
        <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full bg-[#164155]">
          <FaPencilAlt className="h-[30px] w-[30px] text-[#33eaff]"/>
        </div>
        <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full bg-[#33eaff]">
          <FaShare className="h-[30px] w-[30px] text-white"/>
        </div>
      </div>
    </header>
  )
}