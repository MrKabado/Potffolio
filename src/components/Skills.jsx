import React from 'react'

function Skills({iconClass, title, description, titleClass, Icon, divClass}) {
  return (
    <div className={`shadow-[0px_0px_5px_0px_gray] border-4 border-[#1E293B] rounded-xl p-2 bg-[#1E293B] ${divClass} transition transform duration-200 hover:scale-103 cursor-default`}>      
      <h1 className={`text-md font-semibold md:text-lg ${titleClass}`}>
        <Icon className={`w-10 ${iconClass}`}/>
        {title}
      </h1>
      <p className='text-sm text-white md:text-base'>{description}</p>
    </div>
  )
}

export default Skills
