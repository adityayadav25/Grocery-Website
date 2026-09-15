import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";



const MainBanner = () => {
    return (
        <div className='relative'>
            <img src={assets.banner} alt="" className='w-full h-110 object-cover hidden md:block' />
            <img src={assets.banner2} alt="" className='w-full md:hidden' />
            <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-10 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left
        max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 lg:mt-2'
                >Freshnes you can trust, Saving you will Love!</h1>

                <div className='flex items-center mt-6 font-medium'>
                    <Link to={"/products"} className='group flex items-center gap-2 px-5 md:px-9 py-2.5 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
                        Shop Now
                        <HiOutlineArrowSmRight className='md:hidden transition group-focus:translate-x-1' />
                    </Link>

                    <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
                        Explore deals
                        <HiOutlineArrowSmRight className='transition group-hover:translate-x-1' />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default MainBanner
