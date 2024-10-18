'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useBlogStore } from '@/store/blogStore'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  description: z
    .string()
    .min(5, { message: 'Description must be at least 2 characters.' }),
  image: z
    .string()
    .min(10, { message: 'Address url must be at least 10 characters.' }),
  author: z.string().min(2, { message: 'Author must be at least 2 characters.' }),
})

const today = new Date()
const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${
  today.getDate() <= 9 ? '0' + today.getDate() : today.getDate()
};`

export function ProfileForm() {
  const { addItemToBlog, items } = useBlogStore()
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      author: '',
    },
  })
  const { resetField } = form

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newItem = {
      id: items.length + 1,
      title: data.title,
      description: data.description,
      image: data.image,
      date: todayDate,
      author: data.author,
    }
    addItemToBlog(newItem)
    router.push('/blogs')
    resetField('title')
    resetField('description')
    resetField('image')
    resetField('author')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input
                  placeholder="entry blog author"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="entry blog title"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="put a description"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  placeholder="put the image url"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" w-fit self-end"
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}