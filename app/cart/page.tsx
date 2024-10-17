'use client'

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
const Cart = () => {
  const { items, increment, decrement, removeItemFromCart, total, removeAll } =
    useCartStore()
  const router = useRouter()

  return (
    <div className=' w-full min-h-[calc(100vh-194px)] flex flex-col max-lg:gap-8  px-8 py-4 max-sm:px-1 '>
      {items.length > 0 ? (
        <>
          <div className=' w-full max-h-[260px] overflow-y-auto scrollbar max-sm:max-h-[400px]  p-1'>
            {items.map((item) => (
              <div
                key={item.id}
                className='w-full grid grid-cols-6 max-sm:grid-cols-4 place-items-center  border-b-2 border-gray-300 gap-4 p-4 '
              >
                <div className='w-full flex relative max-sm:hidden '>
                  <Image
                    src={item.Image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className=' self-start'
                  />
                </div>
                <div className='w-full text-start'>{item.name}</div>

                <div className=' max-sm:hidden'>${item.price}</div>

                <div className='flex items-center gap-1'>
                  <button onClick={() => decrement(item.id)} aria-label='decrement'>➖</button>
                  <div className='flex items-center justify-center  w-[30px] h-[30px] rounded-full border-2 border-gray-500'>
                    {item.quantity}
                  </div>
                  <button onClick={() => increment(item.id) } aria-label='increment'>➕</button>
                </div>
                <div> ${(item.price * item.quantity).toFixed(2)}</div>
                <div>
                  <button onClick={() => removeItemFromCart(item.id)} aria-label='remove'>
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex items-center justify-end text-xl mt-4 px-4'>
            Total: ${total().toFixed(2)}
          </div>
          <div className='flex w-full justify-end gap-8 mt-8 px-4 '>
            <Button
              variant='destructive'
              onClick={() => removeAll()}
              aria-label='remove all'
            >
              Delete All
            </Button>
            <Button onClick={() => router.push('/payment')} aria-label='go to payment'>
              I buy Products
            </Button>
          </div>
        </>
      ) : (
        <h1 className='text-2xl text-center py-8'>Cart is empty !</h1>
      )}
    </div>
  )
}

export default Cart