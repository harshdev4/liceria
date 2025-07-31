import React from 'react'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard';

const FeaturedProducts = () => {

const products = [
  {
    name: "Modern Queen Bed Frame",
    image: "/images/bed.jpg",
  },
  {
    name: "Contemporary 3-Seater Sofa",
    image: "/images/sofa.jpg",
  },
  {
    name: "3-Drawer Dresser",
    image: "/images/dresser.jpg",
  },
  {
    name: "Soft Sofa Chair",
    image: "/images/chair.jpg",
  },
];

  return (
    <section data-aos='fade-up' className='px-pHSm lg:px-pHLg mt-10 py-5'>
        <SectionHeading title="Featured Products"/>
        <div className='mt-10 mb-7 pb-1 flex justify-between gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth'>
            {
                products.map((product, index)=> <ProductCard key={index} imageProp={product.image} name={product.name}/>)
            }
        </div>
    </section>
  )
}

export default FeaturedProducts
