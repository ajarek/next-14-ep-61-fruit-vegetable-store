import Links from '@/components/Links'
import MobileNav from './MobileNav'
import { ModeToggle } from '@/components/ModeToggle'
import { Apple, PhoneCall } from 'lucide-react'
import SearchProduct from './SearchProduct'

import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'
const Navbar = async () => {
  const session = await auth()

  return (
    <div className=' flex flex-col justify-start items-center   px-16 max-sm:px-2  '>
      <div className='h-12 w-full flex justify-between items-center '>
        <h1 className='flex items-center gap-2 text-2xl font-bold text-primary italic '>
          <Apple size={28} />
          GreenShop
        </h1>
        <SearchProduct />
        <div className='flex items-center gap-2'>
          <PhoneCall
            size={28}
            className='text-primary max-sm:hidden'
          />
          <h2 className='text-xl font-bold text-primary max-sm:hidden'>
            (+48)573219230
          </h2>
          <ModeToggle />
        </div>
      </div>
      <div className='h-12  w-full flex  justify-between items-center '>
        <div className=' w-full flex items-center gap-2 '>
          <Links />
        </div>
        <Logout session={session} />
        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
