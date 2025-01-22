import { useQuery } from '@tanstack/react-query'
import { request } from '../api/index'
import React from 'react'
import type { Product } from '../types/index'
import { useNavigate } from 'react-router-dom'

const clothingImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsECg2xSKh6F6Ptk1ps2PXUaSTdl6JRVwiA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0buaW0qVlPxg7TeeoEy9eV0QzS9BAwVdciw&s',
  'https://frankfurt.apollo.olxcdn.com/v1/files/n8zslttq8j941-UZ/image;s=800x800',
  'https://www.ubuy.uz/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxOHZOeTZwRjhMLl9TUzQwMF8uanBn.jpg',
  'https://nafistaqvo.uz/wp-content/uploads/2024/06/corlpk7j2e4ghqnpv3k0-600x800.jpg',
  'https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2F9434af055c7faeeca4e42b992ef478068befd677_original.jpeg',
  'https://ekler.uz/wp-content/uploads/2024/09/sportivnyi-kostium-muzhskoi-2.webp',
  'https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2F467a7dac27d1c4f359806041a59b2a3487ea4fd6_original.jpeg',
  'https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2F72a6cfb3f8c30b45296f9a0400026d99e8acff31_original.jpeg'
]

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * clothingImages.length)
  return clothingImages[randomIndex]
}

const Product: React.FC = () => {
  const navigate = useNavigate()
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return request('').then(res => res)
    }
  })

  const renderStars = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>⭐</span>
    ))
  }

  return (
    <div className='w-full h-auto p-5 flex items-center flex-col gap-12 mt-20'>
      <h2 className='text-5xl text-black text-center font-extrabold max-md:text-2xl'>
        NEW ARRIVALS
      </h2>
      {query.data?.data && (
        <div className='container grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
          {query.data.data.map((product: Product, index: number) => (
            <div key={index} className='h-[450px] flex flex-col gap-4'>
              <div className='w-full h-[70%] flex items-center justify-center bg-bgGray rounded-2xl'>
                <img
                  onClick={() => navigate(`/detail/${product.id}`)}
                  className='w-[100%] h-[100%] object-cover cursor-pointer'
                  src={getRandomImage()}
                  alt={product.title}
                />
              </div>
              <h2 className='px-3 text-xl font-semibold capitalize max-md:text-lg'>
                {product.title}
              </h2>
              <p className='px-3 flex items-center'>
                {renderStars(product.star)}
              </p>
              <strong className='px-3 pb-3 font-bold text-2xl'>
                ${product.price}
              </strong>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Product
