'use client'

import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ApartImgsProps} from '../../../typedefs/home';
import Image from 'next/image';
import { v4 } from 'uuid';

export default function ApartImgs({ imgnames }: ApartImgsProps) {

  const carouselData: ResponsiveType = {
    mobile: {
      items: 1,
      slidesToSlide: 1,
      breakpoint: {
        max: 768,
        min: 0
      }
    }
  }

  return (
    <div className='w-full h-fit z-50'>
      <div className='w-full min-h-[300px] md:hidden'>
        <Carousel 
          className='md:hidden w-full h-full z-50'
          containerClass='carousel'
          arrows showDots
          responsive={carouselData}
          slidesToSlide={1}
          transitionDuration={200}
          children={
            imgnames.map(img => (
              <span key={v4()}>
                <Image  
                  className='h-full w-full pointer-events-none select-none' 
                  src={`/img/${img}.webp`}
                  height={620} width={413} alt='somealt'
                ></Image>
              </span>
            ))
          }>
        </Carousel>
      </div>
  
    </div>
  )
}

