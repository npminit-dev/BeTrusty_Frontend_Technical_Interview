'use client'

import ApartHeader from "@/ui/home/ApartHeader";
import ApartImgs from "@/ui/home/ApartImgs";
import { ApartImgsProps, ApartType } from "../../typedefs/home";
import { apart } from "@/data";
import ApartReservation from "@/ui/home/ApartReservation";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-[800px] w-auto bg-[#0f172a]">
      <ApartHeader owner="Frank Apart"></ApartHeader>
      <ApartImgs imgnames={apart.imgs}></ApartImgs>
      <ApartReservation pricePerNight={apart.pricePerNight}></ApartReservation>
    </div>
  );
}


