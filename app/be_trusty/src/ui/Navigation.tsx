'use client'

import { IoHomeOutline, IoKeyOutline, IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineDashboard } from 'react-icons/ai'
import { MdOutlineQrCode } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'
import { HiOutlineIdentification } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Navigation() {

  const { push } = useRouter()

  return (
    <div className='w-full h-[75px] fixed bottom-0 md:h-[100vh] md:w-[90px] md:inline-block z-[10]'>
      <nav className=" w-full h-full absolute bg-black">
        <div className='relative hidden md:block md:h-[75px] md:w-full'>
          <img src='/menuicon.svg' className='h-[35px] w-[35px] absolute bottom-[15px] mx-auto left-0 right-0 nav_icon' alt='Menu icon' />
          <span className='w-[40px] h-[1px] absolute bottom-0 mx-auto left-0 right-0 rounded-full bg-gray-400'></span>
        </div>
        <div className='w-full h-full relative flex items-center justify-center md:h-[calc(100%-75px)] md:py-8 md:flex md:flex-col md:items-center md:justify-between'>
          <div className='max-w-[300px] w-full h-full flex items-center justify-around md:flex-col md:h-fit'>
            <IoHomeOutline className='nav_icon md:my-2' onClick={() => push('/')} />
            <HiOutlineIdentification className='hidden nav_icon md:my-2 md:inline-block' />
            <IoKeyOutline className='hidden nav_icon md:my-2 md:inline-block' />
            <AiOutlineDashboard className='nav_icon md:my-2' />
            <MdOutlineQrCode className='nav_icon md:my-2' />
            <IoIosNotifications className='nav_icon md:my-2' />
            <IoSettingsOutline 
              className='nav_icon md:my-2 md:hidden duration-200 hover:rotate-180' 
              onClick={() => push('/config')} 
            />
          </div>
          <IoSettingsOutline className='md:block nav_icon hidden hover:rotate-180' onClick={() => push('/config')} />
        </div>
      </nav>
    </div>
  )
}

