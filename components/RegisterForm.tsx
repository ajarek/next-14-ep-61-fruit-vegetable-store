'use client'

import React, { useState } from 'react'
import { UserWithoutId } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin, setIsAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsAdmin(false)
    const formData: UserWithoutId = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/api/auth/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=' bg-[#000] text-white  p-4'>
      <div className='flex justify-center p-2'>
        <Link href='/'>
          <Image
            src='/images/fruits-basket-2.png'
            alt='logo'
            width={40}
            height={40}
            className='w-full h-full object-cover  rounded-full  '
          />
        </Link>
      </div>
      <form
        className='w-80  flex flex-col gap-4 p-4  '
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          placeholder='first and last name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='bg-background'
        />
        <Input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-background'
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-background'
        />
        <Input
          type='text'
          placeholder='Your photo'
          value={img}
          onChange={(e) => setImage(e.target.value)}
          className='bg-background'
        />
        <Input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
        />
        <Button
          className='bg-[#16a34a] hover:bg-[#16a34a]/90'
          type='submit'
          aria-label='submit'
        >
          Registration
        </Button>
        <Link
          href='/api/auth/signin'
          className='text-white'
        >
          You already have an account? <b className='text-[#16a34a]'>Login</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
