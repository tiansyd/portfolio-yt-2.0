import React from 'react'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <h1 className='text-4xl semibold text-gray-500 tracking-[20px] uppercase'>Work{" "} <span className='text-[#F7AB0A]/50'>Experience</span>{" "}</h1>
    </div>
  )
}