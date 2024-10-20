'use client'
import Image from 'next/image'
import { useBlogStore } from '@/store/blogStore'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import type { Item } from '@/store/blogStore'
const BlogId = ({ params }: { params: { id: string } }) => {
  const { items: blogs, removeItemFromBlog } = useBlogStore()
  const blog = blogs.find((blog: Item) => blog.id === +params.id)
  if (!blog) {
    return (
      <div className='text-center text-3xl font-semibold text-red-500 mt-10'>
        Blog not found
      </div>
    )
  }

  return (
    <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 justify-start items-center  min-h-[calc(100vh-64px)]  px-24 max-lg:px-4 gap-4'>
      <div>
        <Image
          src={blog.image}
          alt='blog'
          width={400}
          height={400}
          className='rounded-xl'
          priority
        />
      </div>
      <div className='flex flex-col gap-4 items-start'>
        <h1 className='text-xl font-semibold'>{blog.title}</h1>
        <p>{blog.description}</p>
        <h1>{blog.date}</h1>
        <h1>{blog.author}</h1>
        {blog.id > 6 && (
          <Button
            variant='destructive'
            size='icon'
            className=' self-end  '
            onClick={() => removeItemFromBlog(blog.id)}
          >
            <X className='' />
          </Button>
        )}
      </div>
    </div>
  )
}

export default BlogId
