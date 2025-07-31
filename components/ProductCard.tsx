import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

type props = {
  imageProp: string;
  name: string;
}

const ProductCard = ({ imageProp, name }: props) => {
  return (
    <Link href={`/product/${name}`} className='w-[300px] overflow-hidden bg-white shadow-sm hover:shadow-md transition flex flex-col snap-start flex-shrink-0'>
      <div className='relative aspect-square'>
        <Image src={imageProp} alt='product' fill className='object-cover' />
      </div>
      <div className="p-4">
        <p className="text-textColor font-medium">{name}</p>
      </div>
    </Link>
  )
}

export default ProductCard;
