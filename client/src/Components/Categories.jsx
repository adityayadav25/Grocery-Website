import React from 'react'
import { categiries } from '../assets/assets'
import { useAppContext } from '../Context/AppContext'

const Categories = () => {

    const { navigate } = useAppContext()

    return (
        <div className='mt-16'>

            <p className='text-2xl md:text-3xl font-medium mb-6'>
                Categories
            </p>
            <div className='overflow-x-auto scrollbar-hide'>
                <div className='flex gap-6 min-w-max'>

                    {categiries.map((category, index) => (
                        <div
                            key={index}
                            className='group cursor-pointer py-5 px-3 min-w-[180px] rounded-lg flex flex-col justify-center items-center border border-green-500'
                            onClick={() => {
                                navigate(`/products/${category.path.toLowerCase()}`);
                                scrollTo(0, 0)
                            }}>

                            <img
                                src={category.image}
                                alt={category.text}
                                className='group-hover:scale-110 transition w-32 h-32 max-w-full max-h-full object-contain'
                            />

                            <p className='text-sm font-medium text-center mt-2'>
                                {category.text}
                            </p>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Categories