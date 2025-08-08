import React from 'react'
import ProfilePic from '../assets/profile-no-bg.png'
import Button from '../components/Button'
import {HandRaisedIcon, PhoneArrowDownLeftIcon, PaintBrushIcon, DevicePhoneMobileIcon, UserCircleIcon} from '@heroicons/react/24/outline'

function Homepage() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden items-center w-full'>
      <div className='flex flex-col gap-10 items-center md:flex-row-reverse md:mt-15 md:w-full md:justify-evenly'>
        <div className='flex justify-center sm:w-fit md:w-auto md:self-baseline'>
          <img src={ProfilePic} alt="profile picture" className='w-[50%] border-[#1E293B] border-4 rounded-full bg-[#1E293B]'/>
        </div>
        <div className='flex flex-col gap-10'>
          <h1 className='text-[1.8rem] leading-10 text-center font-poppins text-[#1E293B] sm:text-[2.5rem] md:text-left'>
            Hi there!<HandRaisedIcon className='inline-block w-8'/><br/>I am <span className='font-semibold'>Jerson Jay</span><br/>an Aspiring<br/><span className='font-semibold'>Web Developer</span>
          </h1>

          <Button to={"/contact-me"} text={"Contact Me Now "} icon={<PhoneArrowDownLeftIcon className='inline-block w-5'/>} 
          className={"font-poppins py-2 px-8 text-center text-[1rem] rounded-xl bg-[#1E293B] text-white sm:text-base"} 
          divclassName={"flex justify-center md:w-full md:justify-baseline md:justify-start"}/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
