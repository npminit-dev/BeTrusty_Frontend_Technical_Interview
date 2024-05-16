'use client'

import Image from "next/image"

export default function Header() {

  return (
    <div className='sticky top-0 h-[75px] w-full md:ml-[90px] md:w-auto z-[10]'>
      <header className=" flex px-4 items-center justify-between h-full w-full  bg-black">
        <Image src='/betrustylogo.svg' height={35} width={127.7} alt='beTrusty logo'/>
        <Image src='/img/musk.webp' height={70} width={70} className='h-[40.5px] w-[40.5px] object-cover rounded-full border-2 border-[#33eaff]' alt='Elon musk photo'/>
      </header>
    </div>
  )
}