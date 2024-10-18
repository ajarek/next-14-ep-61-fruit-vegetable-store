import { ProfileForm } from '@/components/ProfileForm'
import React from 'react'

const AddBlog = () => {
  return (
    <div className='min-h-screen flex flex-col items-center px-24 max-sm:px-4 '>
        
        <h1 className="text-2xl font-semibold ">Add Blog</h1>
        <ProfileForm/>
    </div>
  )
}

export default AddBlog