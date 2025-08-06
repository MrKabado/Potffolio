import React from 'react'

function Projects({title, Icon, description, image, alt, titleColor, iconColor, onClick}) {
  return (
    <div className='w-full border p-3 rounded-xl bg-[#1E293B]'>
      <h1 className={`flex items-center text-lg font-semibold ${titleColor}`}>{title}<Icon className={`w-7 inline-block ${iconColor}`}/></h1>
      <p className="text-sm text-white">{description}</p>
      <img className='border rounded-md mt-3' onClick={onClick} src={image} alt={alt} />
    </div>
  )
}

export default Projects
