'use client'

import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel'
import { ApartImgsProps } from '../../../typedefs/home';
import { v4 } from 'uuid';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestCarousel({ images }: ApartImgsProps) {

  const [activeIndex, setactiveIndex] = useState<number>(0);

  return (
    <ReactSimplyCarousel
      containerProps={{
        className: 'relative flex items-center justify-center h-[280px] md:max-h-[330px] md:hidden z-50'
      }}
      activeSlideIndex={activeIndex}
      onRequestChange={setactiveIndex}
      itemsToShow={1}
      itemsToScroll={1}
      speed={350}
      easing="cubic-bezier(0,.97,.36,.98)"
      touchSwipeTreshold={100}
      swipeTreshold={100}
      infinite={true} 
      autoplay={true} 
      autoplayDelay={5000}
      backwardBtnProps={{
        className: 'text-white absolute h-[35px] w-[35px] left-0 top-[45%] z-50',
        children: <FaChevronLeft className='text-white h-[30px] bg-slate-900/20 w-[30px] rounded-full'/>
      }}
      forwardBtnProps={{ 
        className: 'text-white absolute h-[35px] w-[35px] right-0 top-[45%] z-50',
        children: <FaChevronRight className='text-white h-[30px] bg-slate-900/20 w-[30px] rounded-full'/>
      }}
    >
      {
        images.map(imgdata => (
          <span key={v4()} className='relative h-[280px] w-[500px] select-none pointer-events-none'>
            <img
              className='relative h-[280px] w-[500px] object-cover'
              src={`/img/${imgdata.imgname}.webp`}
              alt={imgdata.alt}
            ></img>
          </span>
        ))
      }
    </ReactSimplyCarousel>
  )
}