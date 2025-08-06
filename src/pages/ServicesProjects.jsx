import React from 'react'
import {PaintBrushIcon, UserCircleIcon, DevicePhoneMobileIcon} from '@heroicons/react/24/outline'
import Projects from '../components/Projects'
import Project1 from '../assets/output-1.png'

function ServicesProjects() {
  const fitExpert = () => {
    window.open('https://jersonjay-portfolio.netlify.app/', '_blank');
  }

  return (
    <div className='p-5 text-[#1E293B] border-l-5 rounded-2xl font-poppins'>
      <h1 className='flex items-center text-xl font-semibold'>What I Create For You</h1>

      <div className='my-5 border-gray-400 border-b-4 pb-10'>
        <div className='shadow-md shadow-gray-300 p-2 rounded-xl'>
          <PaintBrushIcon className='w-8'/>
          <h1 className='font-semibold text-lg'>Custom Website Design</h1>
          <p className='text-sm'>I create websites that match your brand’s personality and goals, blending appealing visuals with functionality to keep visitors engaged.</p>
        </div>

        <div className='shadow-md shadow-gray-300 p-2 rounded-xl'>
          <DevicePhoneMobileIcon className='w-8'/>
          <h1 className='font-semibold text-lg'>Responsive and Cross-Device Layouts</h1>
          <p className='text-sm'>Your website will look great and work smoothly on desktops, tablets, and mobile devices, ensuring a consistent experience for all users.</p>
        </div>

        <div className='shadow-md shadow-gray-300 p-2 rounded-xl'>
          <UserCircleIcon className='w-8'/>
          <h1 className='font-semibold text-lg'>User-Centered Interface Design</h1>
          <p className='text-sm'>I design layouts and navigation that make it easy for visitors to find what they need, improving overall usability and satisfaction.</p>
        </div>
      </div>

      <div className='my-10'>
        <h1 className='flex items-center text-xl font-semibold'>My Small Projects</h1>
        <div className='grid grid-cols-1 gap-10'>
          <Projects 
            title={"My Portfolio"} 
            Icon={UserCircleIcon}
            description={"A personal Portfolio made using basic HTML, CSS, and a bit of JavaScript."} 
            image={Project1}
            alt={"Portfolio"}
            titleColor={"text-blue-400"}
            onClick={fitExpert}
          />

        </div>
      </div>
    </div>
  )
}

export default ServicesProjects
