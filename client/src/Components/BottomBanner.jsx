import React from 'react'
import { assets, feature } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='mt-24  rounded-2xl overflow-hidden'>

      <div className='flex flex-col-reverse md:flex-row items-center'>

        {/* Left Image */}
        <div className='w-full md:w-1/2'>
          <img
            src={assets.bottom_image}
            alt="banner"
            className='hidden md:block w-120 has-[30: rem] object-cover'
          />

          <img
            src={assets.Bottom_image_sm}
            alt="small banner"
            className='block md:hidden w-full'
          />
        </div>

        {/* Right Content */}
        <div className='w-full md:w-1/2 px-6 md:px-12 py-10'>

          <h1 className='text-3xl md:text-5xl font-semibold text-primary mb-8 text-center md:text-left'>
            Why We Are The Best!
          </h1>

          {feature.map((item, index) => (
            <div
              key={index}
              className='flex items-start gap-4 mb-6'
            >

              <img
                src={item.icon}
                alt="icon"
                className='w-11 h-11 bg-gray-200 rounded-lg p-2 shrink-0'
              />

              <div>
                <h3 className='text-lg md:text-2xl font-semibold'>
                  {item.title}
                </h3>

                <p className='text-gray-500 text-sm md:text-base'>
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default BottomBanner