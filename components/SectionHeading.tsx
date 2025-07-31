import React from 'react'

type props = {
    title: string;
}

const SectionHeading = ({title}: props) => {
  return (
    <h2 className="text-[#5a3a1b] text-3xl md:text-4xl font-extrabold text-center">{title}</h2>
  )
}

export default SectionHeading
