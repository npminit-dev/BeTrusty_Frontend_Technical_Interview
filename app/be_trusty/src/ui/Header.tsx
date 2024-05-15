'use client'

export default function Header() {

  return (
    <div className='sticky top-0 h-[75px] w-full md:ml-[90px] md:w-auto z-[10]'>
      <header className=" flex px-4 items-center justify-between h-full w-full  bg-black">
        <img src='/betrustylogo.svg' className='h-[35px] w-[127.7px]' alt='beTrusty logo'/>
        <img src='/img/musk.webp' className='h-[40.5px] w-[40.5px] rounded-full border-2 border-[#33eaff]' alt='Elon musk photo'/>
      </header>
    </div>
  )
}