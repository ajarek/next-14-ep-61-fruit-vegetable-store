'use client'

import { Input } from './ui/input'
import Link from 'next/link'
import { useState } from 'react'
import { Search } from 'lucide-react'

const SearchProduct = () => {
  const [search, setSearch] = useState('')
  return (
    <div className='flex items-center '>
      <Input
        type='search'
        placeholder='Search'
        className='rounded-r-none '
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link
        href={`/shop?search=${search}`}
        className=' h-9 w-16 bg-primary flex items-center justify-center rounded-r-lg hover:bg-primary/70'
        aria-label='Search'
      >
        <Search className='text-white' />
      </Link>
    </div>
  )
}

export default SearchProduct
