import React from 'react'

function Projects({title, Icon, description, image, alt, titleColor, iconColor, onClick, imgClass}) {
  return (
    <div className='w-full border p-3 rounded-xl bg-[#1E293B] flex flex-col justify-between'>
      <span>
        <h1 className={`flex items-center text-lg font-semibold ${titleColor} md:text-xl`}>
          {title}<Icon className={`w-7 inline-block ${iconColor} md:w-9`}/>
        </h1>

        <p className="text-sm text-white md:text-lg">{description}</p>
      </span>
      <img 
        className={`border-2 border-transparent transition duration-200 rounded-md mt-3 hover:cursor-pointer active:cursor-wait ${imgClass} hover:border-white`} 
        onClick={onClick} 
        src={image} 
        alt={alt} 
        title='visit'
      />
    </div>
  )
}

export default Projects
