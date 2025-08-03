import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'


export const metadata: Metadata = {
  title: "Liceria - About-Us",
  description: "Discover handcrafted furniture at Liceria, your leading furniture store in New Delhi. We offer a wide range of sofas, beds, dining sets, and more, blending quality with exquisite design. Shop online for home and office furniture solutions.",
  keywords: "Liceria about page, about us Liceria, Liceria furniture, New Delhi furniture, furniture store Delhi, online furniture India, buy sofa Delhi, modern furniture, wooden furniture, bespoke furniture, home decor Delhi, office furniture New Delhi, luxury furniture, affordable furniture",
  openGraph: {
    title: "Liceria - About-Us",
    description: "Discover handcrafted furniture at Liceria, your leading furniture store in New Delhi. We offer a wide range of sofas, beds, dining sets, and more, blending quality with exquisite design. Shop online for home and office furniture solutions.",
    url: "https://liceria-xi.vercel.app/",
    siteName: "Liceria Furniture",
    type: "website",
  },
};
const page = () => {
  return (
    <div className="text-textColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">

        {/* About Us */}
        <section data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg leading-relaxed">
  Liceria is a New Delhi-based furniture company that sprang from a deep-rooted passion for exceptional craftsmanship and innovative design. We&rsquo;re dedicated to creating high-quality, stylish, and highly functional pieces that perfectly complement the modern home, recognizing that furniture should be more than just utilitarian – it should truly enhance your living experience and reflect your unique style. Each piece we create is a testament to our unwavering commitment to quality and timeless design.
</p>

          </div>
          <div className="relative aspect-square overflow-hidden shadow-lg">
            <Image
              src="/images/about/about-1.jpeg"
              alt="Liceria About Us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Mission */}
        <section data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square overflow-hidden shadow-lg">
            <Image
              src="/images/about/about-2.jpeg"
              alt="Crafting furniture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission at Liceria is straightforward: to provide our customers with furniture that seamlessly blends aesthetic appeal with unwavering durability. We firmly believe in the transformative power of good design – how it can elevate everyday living and create spaces that truly resonate with you. Furthermore, we are deeply committed to responsible practices, which is why we meticulously focus on utilizing sustainable materials and ethical production methods in every piece we craft.
            </p>
          </div>
        </section>

        {/* Showroom */}
        <section data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Showroom</h2>
            <p className="text-lg leading-relaxed">
              We invite you to visit our showroom in New Delhi, where you can
              explore our latest collections in person. Experience the quality
              and comfort of Liceria furniture and let our team assist you in
              finding the perfect pieces.
            </p>
          </div>
          <div className="relative aspect-[16/12] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about/about-3.jpeg"
              alt="Liceria showroom"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
