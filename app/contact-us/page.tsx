import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
const page = () => {
  return (
    <div className="min-h-screen bg-[#fefcf9] text-textColor px-6 py-12 md:px-16 lg:px-32">
      {/* Header */}
      <div data-aos='fade-up' className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Let’s Connect</h1>
        <p className="text-lg text-lightTextColor max-w-2xl mx-auto">
          Whether you’re looking to furnish your dream home or simply want to chat about design ideas, we’re here for you.
        </p>
      </div>
      {/* Contact Blocks */}
      <div data-aos='fade-up' className="grid md:grid-cols-3 gap-10 text-center">
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

      {/* Visual or Map */}
      <div data-aos='fade-up' className="mt-16 rounded-2xl overflow-hidden shadow-md aspect-video relative">
        <Image
          src="/images/showroom-banner.jpeg" // Replace with your own image or map placeholder
          alt="Visit Liceria Showroom"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default page
