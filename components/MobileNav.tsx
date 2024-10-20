'use client'

import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { useCartStore } from '@/store/cartStore'

const MobileNav = () => {
  const { items } = useCartStore()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden '
      >
        <div className='flex flex-col gap-4 mt-4 '>
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
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
