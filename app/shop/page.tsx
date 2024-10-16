'use client'
import { useState } from 'react'
import Products from '@/data/data.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { Item } from '@/store/cartStore'
import { useCartStore } from '@/store/cartStore'
const Shop = () => {
  const { addItemToCart, items } = useCartStore()
  const [quantityPanel, setQuantityPanel] = useState<{ [key: number]: number }>({})
  const router = useRouter()
  const increment = (id: number) => {
    setQuantityPanel((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const decrement = (id: number) => {
    setQuantityPanel((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }))
  }

  const handleCart = (item: Item) => {
     if (items.some((i) => i.id === item.id)) return
    const newItem = { ...item}
    addItemToCart(newItem)
     router.push('/cart')
    setQuantityPanel({})
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 pb-8'>
      {Products.map((product) => (
        <Card
          key={product.id}
          className='overflow-hidden'
        >
          <CardHeader className='relative w-full h-[200px]'>
            <Image
              src={product.Image}
              alt={product.name}
              fill
              className='object-cover'
            />
          </CardHeader>
          <CardContent className='flex flex-col gap-2 mt-4'>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.type}</CardDescription>
            <p>${product.price}</p>
            <div className='flex items-center gap-2 '>
              <Button
                size={'icon'}
                className='bg-transparent rounded-full'
                onClick={() => decrement(product.id)}
                aria-label='Decrement quantity'
              >
                ➖
              </Button>
              <div className='w-9 h-9 flex items-center justify-center  rounded-full border-2 border-gray-500'>
                {(quantityPanel[product.id] || 1).toString()}
              </div>
              <Button
                size={'icon'}
                className='bg-transparent rounded-full'
                onClick={() => increment(product.id)}
                aria-label='Increment quantity'
              >
                ➕
              </Button>
            
            <Button
          className='self-center max-w-fit '
          onClick={() =>
            handleCart({
              id: Number(product?.id) || 0,
              name: product?.name || '',
              price: product?.price || 0,
              quantity: quantityPanel[product.id] || 0,
              Image: product?.Image || '',
              type:product?.type || '',
            })
          }
          aria-label='Add to Cart'
        >
              Add to Cart
            </Button>
            </div>  
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Shop
