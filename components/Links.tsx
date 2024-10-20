'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

const Links = () => {
  const { items } = useCartStore()
  return (
    <div className='max-lg:hidden w-full flex items-center justify-end   '>
      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href='/'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Home'
        >
          Home
        </Link>

        <Link
          href='/shop?search='
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Shop'
        >
          Shop
        </Link>
        <Link
          href='/blogs'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Blogs'
        >
          Blogs
        </Link>
        <Link
          href='/about-us'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='About Us'
        >
          About Us
        </Link>
        <Link
          href='/contact-us'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Contact Us'
        >
          Contact Us
        </Link>

        {items.length > 0 && (
          <Link
            href='/cart'
            className={`flex items-center  px-3 rounded-sm `}
            aria-label='Cart'
          >
            <ShoppingCart
              size={24}
              className=''
            />
            <div className='pb-3 text-red-500'>
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Links
