'use client'

import ApartHeader from "@/ui/home/ApartHeader";
import ApartImgs from "@/ui/home/ApartImgs";
import { apart } from "@/data";
import ApartReservation from "@/ui/home/ApartReservation";
import ApartInfo from "@/ui/home/ApartInfo";
import ApartDescription from "@/ui/home/ApartDescription";
import ApartOwner from "@/ui/home/ApartOwner";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-[800px] w-auto bg-[#0f172a]">
      <ApartHeader owner="Frank Apart"></ApartHeader>
      <ApartImgs images={apart.imgs}></ApartImgs> 
      <span className="w-full max-w-[1236px] flex flex-col px-8 items-center justify-center 
      md:grid md:grid-cols-2 md:grid-rows-1">
        <ApartReservation pricePerNight={apart.pricePerNight}></ApartReservation>
        <div className="h-fit w-full flex flex-col items-center justify-center md:col-start-1 md:col-end-2 md:row-start-1 md:items-start md:self-start">
          <ApartInfo {...apart.data}/>
          <ApartDescription description={apart.description}></ApartDescription>
          <ApartOwner {...apart.owner}></ApartOwner>
        </div>
      </span>
    </div>
  );
}


