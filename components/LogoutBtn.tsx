'use client'

import { useCartStore } from '@/store/cartStore'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const LogoutBtn = () => {
  const { removeAll } = useCartStore()
  const router = useRouter()
  const handleLogout = () => {
    removeAll()
    router.push('/api/auth/signout')
  }
  return (
    <Button
      variant='destructive'
      size={'sm'}
      onClick={handleLogout}
      className='italic'
      aria-label='logout'
    >
      Logout
    </Button>
  )
}

export default LogoutBtn
