import Image from 'next/image'

export default function Header() {

  return (
    <div className='sticky top-0 h-[75px] w-full md:ml-[90px] md:w-auto'>
      <header className=" flex px-4 items-center justify-between h-full w-full  bg-black">
        <Image src="/betrustylogo.svg" height={35} width={127.7} alt='beTrusty logo'></Image>
        <Image src={'/img/musk.webp'} className='rounded-full border-2 border-[#33eaff]' height={40.5} width={40.5} alt='Elon musk photo'></Image>
      </header>
    </div>
  )
}