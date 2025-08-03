import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liceria - Contact Us',
  description:
    'Get in touch with Liceria – your premier handcrafted furniture destination in New Delhi. Contact us by phone, email, or visit our showroom. We are here to help you furnish your dream space.',
  keywords:
    'Liceria contact, get in touch, Liceria furniture New Delhi, visit Liceria showroom, handcrafted furniture support, customer care Liceria, contact furniture store Delhi',
  openGraph: {
    title: 'Liceria - Contact Us',
    description:
      'Reach out to Liceria for all your custom furniture needs. Visit our New Delhi showroom, call our design team, or email us your queries.',
    url: 'https://liceria-xi.vercel.app/contact',
    siteName: 'Liceria Furniture',
    type: 'website',
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-[#fefcf9] text-textColor px-6 py-12 md:px-16 lg:px-32">
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Let&rsquo;s Connect</h1>
        <p className="text-lg text-lightTextColor max-w-2xl mx-auto">
          Whether you&rsquo;re looking to furnish your dream home or simply want to chat about design ideas, we&rsquo;re here for you.
        </p>
      </div>
      {/* Contact Blocks */}
      <div data-aos="fade-up" className="grid md:grid-cols-3 gap-10 text-center">
        {/* Phone */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-textColor mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-lightTextColor">+91 98765 43210</p>
          <p className="text-lightTextColor">Mon – Sat: 10am – 6pm</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <FaEnvelope className="text-3xl text-textColor mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-lightTextColor">hello@liceria.in</p>
          <p className="text-lightTextColor">Response within 24 hours</p>
        </div>

        {/* Visit */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-3xl text-textColor mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-lightTextColor">Liceria Showroom</p>
          <p className="text-lightTextColor">D-25, Defence Colony, New Delhi</p>
        </div>
      </div>

      {/* Visual Banner */}
      <div data-aos="fade-up" className="mt-16 rounded-2xl overflow-hidden shadow-md aspect-video relative">
        <Image
          src="/images/showroom-banner.jpeg"
          alt="Visit Liceria Showroom"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Page;