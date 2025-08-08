import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, UserCircleIcon, HomeIcon, BriefcaseIcon, PhoneIcon} from '@heroicons/react/24/outline'

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(!isVisible);
  }

  const returnClick = () => {
    setIsVisible(!isVisible);
  }
  return (
    <header className='font-sans shadow-[0px_0px_5px_0px_gray] p-2 flex flex-col items-center bg-white 
                        sm:flex-row sm:justify-between sm:px-8 sm:py-3
                        lg:px-20'>
      <h1 className='text-[#1E293B] font-semibold text-2xl font-poppins md:text-3xl'>Portfolio</h1>

      <nav className={`p-1 flex flex-col items-center text-[#1E293B] font-medium text-[16px] ${isVisible ? 'flex' : 'hidden'}
                       sm:flex sm:flex-row sm:gap-3 md:text-base`}>
        <Link onClick={returnClick} to={"/"} className='flex items-center hover:text-[#64748B] focus:text-[#64748B] focus:cursor-default'><HomeIcon className='hidden w-5 md:inline-block md:mr-1'/>Home</Link>
        <Link onClick={returnClick} to={"/aboutme"} className='flex items-center hover:text-[#64748B] focus:text-[#64748B] focus:cursor-default'><UserCircleIcon className='hidden w-5 md:inline-block md:mr-1'/> About Me</Link>
        <Link onClick={returnClick} to={"/services-and-projects"} className='flex items-center hover:text-[#64748B] focus:text-[#64748B] focus:cursor-default'><BriefcaseIcon className='hidden w-5 md:inline-block md:mr-1'/> Services and Projects</Link>
        <Link onClick={returnClick} to={"/contact-me"} className='flex items-center hover:text-[#64748B] focus:text-[#64748B] focus:cursor-default'><PhoneIcon className='hidden w-5 md:inline-block md:mr-1'/> Contact Me</Link>
      </nav>
      
      <div className='cursor-pointer sm:hidden' onClick={onClick}>
        {isVisible ? (<ChevronDoubleUpIcon className='w-5'/>) : (<ChevronDoubleDownIcon className='w-5'/>)}
      </div>
    </header>
  )
}

export default Header
