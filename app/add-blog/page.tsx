import { ProfileForm } from '@/components/ProfileForm'

import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const AddBlog = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }

  return (
    <div className='min-h-screen flex flex-col items-center px-24 max-sm:px-4 '>
      <h1 className='text-2xl font-semibold '>Add Blog</h1>
      <ProfileForm />
    </div>
  )
}

export default AddBlog
