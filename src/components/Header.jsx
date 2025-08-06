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
    <header className='font-sans shadow-sm shadow-gray-300 p-2 flex flex-col items-center bg-white'>
      <h1 className='text-[#1E293B] font-semibold text-2xl font-poppins'>Portfolio</h1>

      {isVisible && (
      <nav className='p-1 flex flex-col items-center text-[#1E293B] font-medium text-[16px]'>
        <Link onClick={returnClick} to={"/"} className='flex items-center'><HomeIcon className='hidden w-5'/> Home</Link>
        <Link onClick={returnClick} to={"/aboutme"} className='flex items-center'><UserCircleIcon className='hidden w-5'/> About Me</Link>
        <Link onClick={returnClick} to={"/services&projects"} className='flex items-center'><BriefcaseIcon className='hidden w-5'/> Services and Projects</Link>
        <Link onClick={returnClick} className='flex items-center'><PhoneIcon className='hidden w-5'/> Contact Me</Link>
      </nav>
      )}
      
      <div className='cursor-pointer sm:hidden' onClick={onClick}>
        {isVisible ? (<ChevronDoubleUpIcon className='w-5'/>) : (<ChevronDoubleDownIcon className='w-5'/>)}
      </div>
    </header>
  )
}

export default Header
