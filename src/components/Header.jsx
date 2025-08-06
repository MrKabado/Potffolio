import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon} from '@heroicons/react/24/outline'

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => {
    setIsVisible(!isVisible);
  }
  return (
    <header className='font-sans drop-shadow p-2 flex flex-col items-center bg-white'>
      <h1 className='text-[#1E293B] font-semibold text-3xl font-poppins'>Portfolio</h1>

      {isVisible && (
      <nav className='p-1 flex flex-col items-center text-[#1E293B] font-medium text-[14px]'>
        <Link>Home</Link>
        <Link>About Me</Link>
        <Link>Services and Projects</Link>
        <Link>Contact Me</Link>
      </nav>
      )}
      
      <div className='cursor-pointer sm:hidden' onClick={onClick}>
        {isVisible ? (<ChevronDoubleUpIcon className='w-5'/>) : (<ChevronDoubleDownIcon className='w-5'/>)}
      </div>
    </header>
  )
}

export default Header
