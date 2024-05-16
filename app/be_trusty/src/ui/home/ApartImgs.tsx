'use client'

import { ApartImgsProps } from '../../../typedefs/home';
import Image from 'next/image';
import { v4 } from 'uuid';
import { useEffect, useRef, useState } from 'react';
import { popp } from '../fonts';
import Carousel from './Carousel';

export default function ApartImgs({ images }: ApartImgsProps) {

  const [selectedimg, setselectedimg] = useState<number | null>(null);
  const p_desc = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    let anim = p_desc.current?.getAnimations()[0]
    anim?.cancel()
    anim?.play()
  }, [selectedimg]);

  return (
    <div className='w-full h-[300px] my-2 md:h-[330px] flex items-center justify-center bg-gray-400/10 md:w-full md:bg-transparent z-50'>
      <div className='relative flex items-center justify-center w-full h-[300px] max-w-[500px] max-h-[330px] md:hidden overflow-hidden'>
        <Carousel images={images}></Carousel>
      </div>
      <div className='md:max-h-[350px] md:max-w-[1242px] px-8 hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-4'>
        <div className='flex items-center justify-center rounded-sm bg-[#162342] text-black text-center col-start-4 col-end-5 row-start-1 row-end-2 overflow-hidden'>
          <p ref={p_desc} style={popp.style} className='flex items-center justify-center h-fit w-fit p-4 leading-tight text-white font-light text-[14px] room_descr_appear'>
            {selectedimg !== null ? images[selectedimg].description : 'Haz click en una imagen para ver su descripción'}
          </p>
        </div>
        {
          images.map((imgdata, i) => (
            <Image
              className={`w-full h-full bg-gray-500/20 select-none overflow-hidden
                cursor-pointer hover:scale-[101%] duration-200 md:object-cover
                ${i === 0 && 'col-start-1 col-end-3 row-start-1 row-end-3'}
                ${selectedimg === i && 'border-[1px] border-[#33eaff]'}
              `}
              src={`/img/${imgdata.imgname}.webp`}
              height={380} key={v4()}
              width={571} alt={imgdata.alt}
              onClick={() => setselectedimg(i)}
              priority={i === 0 && true}
            ></Image>
          ))
        }
      </div>
    </div>
  )
}

