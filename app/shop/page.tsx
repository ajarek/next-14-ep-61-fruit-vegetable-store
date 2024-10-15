import Products from '@/data/data.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const Shop = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12 pb-8'>
      {Products.map((product) => (
        <Card
          key={product.id}
          className='overflow-hidden'
        >
          <CardHeader className='relative w-full h-[200px]'>
            <Image
              src={product.Image}
              alt={product.name}
              fill
              className='object-cover'
            />
          </CardHeader>
          <CardContent className='flex flex-col gap-2 mt-4'>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.type}</CardDescription>
            <p>${product.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Shop
