import React from 'react'
import { useAppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom'
import { categiries } from '../assets/assets'
import ProductCard from '../Components/ProductCard'

const ProductCategory = () => {

  const { products } = useAppContext()
  const { category } = useParams()

  // Find selected category
  const searchCategory = categiries.find(
    (item) => item.path.toLowerCase() === category
  )

  // Filter products according to category
  const filterProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category &&
      product.inStock
  )

  return (
    <div className='mt-16 px-4 sm:px-6 md:px-10'>

      {/* Category Heading */}
      {searchCategory && (
        <div className='flex flex-col items-start w-max mb-8'>
          <p className='text-2xl md:text-3xl font-semibold'>
            {searchCategory.text.toUpperCase()}
          </p>

          <div className='w-16 h-1 bg-primary rounded-full mt-1'></div>
        </div>
      )}

      {/* Products */}
      {filterProducts.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>

          {filterProducts.map((product) => (

            <ProductCard
              key={product._id}
              product={product}
            />

          ))}

        </div>

      ) : (

        <div className='flex items-center justify-center h-40'>
          <p className='text-primary text-lg'>
            No Products Found in this category.
          </p>
        </div>

      )}

    </div>
  )
}

export default ProductCategory  