import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='grid grid-cols-[3fr_1fr] max-sm:grid-cols-1 min-h-[calc(100vh-128px)] gap-4 px-12 max-sm:px-4 max-sm:pb-8'>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 bg-primary items-center place-items-center rounded-lg'>
        <div className='flex flex-col gap-4 max-sm:p-8'>
          <h1 className='text-4xl font-bold'>
            &#34;Everything you need,
            <br />
            All in One Place &#34;
          </h1>

          <div className='border-l-2 border-foreground  p-4'>
            <p className='text-xl '>Sale up to</p>
            <p className='text-xl'>50% of</p>
          </div>
          <Link href={'/shop?search='}  className='w-fit flex items-center gap-2 bg-background hover:bg-background/70 px-4 py-2 rounded-lg' >Shop Now <MoveRight /></Link>
        </div>
        <div className=''>
          <Image
            src='/images/fruits-cart.webp'
            alt='banner'
            width={350}
            height={350}
          />
        </div>
      </div>
      <div className=' flex flex-col items-center justify-center gap-4'>
        <div className='relative max-sm:min-h-[250px]  flex justify-center items-center w-full h-full bg-primary rounded-lg'>
          <Image
            src='/images/fruits-basket-1.png'
            alt='fruits'
            fill
            className='object-contain '
          />
          <div className='absolute top-1 left-1 text-xl' >100% Fresh Fruit</div>
          <div className='absolute top-8 left-1 text-2xl bg-black text-white p-2 rounded-lg ' >75% Off</div>
          <Link href={'/shop?search='}  className=' absolute bottom-2 right-2 text-xl border-b-2 border-white hover:border-violet-500  ' >Shop Now</Link>
        </div>
        <div className='relative max-sm:min-h-[250px]  flex justify-center items-center w-full h-full bg-primary rounded-lg'>
          <Image
            src='/images/fruits-basket-2.png'
            alt='banner'
            fill
            className='object-contain '
          />
          <div className='absolute top-1 left-1 text-xl' >100% Fresh Vegetables</div>
          <div className='absolute top-8 left-1 text-2xl bg-black text-white p-2 rounded-lg ' >82% Off</div>
          <Link href={'/shop?search='}  className='absolute bottom-2 right-2 text-xl border-b-2 border-white hover:border-violet-400 ' >Shop Now</Link>
        </div>
      </div>
    </div>
  )
}
