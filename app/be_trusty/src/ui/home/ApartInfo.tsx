'use client'

import { FaLocationDot } from "react-icons/fa6";
import { ApartData } from "../../../typedefs/home";
import { roboto } from "../fonts";
import { IoMdHome } from "react-icons/io";
import { MdBathtub, MdOutlineWifi } from "react-icons/md";
import { IoCarSharp } from "react-icons/io5";

export default function ApartInfo(props: ApartData) {
  return (
    <div style={roboto.style} className="mt-8">
      <ul>
        <li className="flex items-center justify-start my-3">
          <FaLocationDot className="h-[30px] w-[30px] mr-2 inline text-[#33eaff]"/>
          <span className="text-[16px] text-white">{ props.dir }</span>
        </li>        
        <li className="flex items-center justify-start my-3">
          <IoMdHome className="h-[30px] w-[30px] mr-2 inline text-[#33eaff]"/>
          <span className="text-[16px] text-white">{ props.type }</span>
        </li>
        <li className="flex items-center justify-start my-3">
          <IoMdHome className="h-[30px] w-[30px] mr-2 inline text-[#33eaff]"/>
          <span className="text-[16px] text-white">{ props.bedrooms } habitaciones</span>
        </li>
        <li className="flex items-center justify-start my-3">
          <MdBathtub className="h-[30px] w-[30px] mr-2 inline text-[#33eaff]"/>
          <span className="text-[16px] text-white">{ props.bathrooms } baño/s</span>
        </li>
        {
          props.wifi && 
          <li className="flex items-center justify-start my-3">
            <MdOutlineWifi className="h-[30px] w-[30px] mr-2 inline text-[#33eaff]"/>
            <span className="text-[16px] text-white">WIFI</span>
          </li>
        }
        {
          props.freeParking &&
          <li className="flex items-center justify-start my-3">
            <IoCarSharp className="h-[30px] w-[30px] mr-2 inline text-[#33eaff]"/>
            <span className="text-[16px] text-white">Estacionamiento gratuito</span>
          </li>
        }
      </ul>
    </div>
  )
}