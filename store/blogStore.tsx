import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import blogs from '@/data/blogs.json'
type Item = {
  id: number
  title: string
  description: string
  image: string
  date: string
  author: string
}

type ItemState = {
  items: Item[]
  addItemToBlog: (item: Item) => void
  removeItemFromBlog: (id: number) => void
}

export const useBlogStore = create<ItemState>()(
  persist(
    (set) => ({
      items: [...blogs],

      addItemToBlog: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromBlog: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),

    { name: 'blogStore', storage: createJSONStorage(() => localStorage) }
  )
)