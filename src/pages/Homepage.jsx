import React from 'react'
import ProfilePic from '../assets/profile-no-bg.png'
import Button from '../components/Button'
import {HandRaisedIcon, PhoneArrowDownLeftIcon} from '@heroicons/react/24/outline'

function Homepage() {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <div className='flex justify-center'>
        <img src={ProfilePic} alt="profile picture" className='w-[50%] border-[#1E293B] border-4 rounded-full bg-[#1E293B]'/>
      </div>
      <div>
        <h1 className='text-[1.8rem] leading-10 text-center font-poppins text-[#1E293B]'>
          Hi there!<HandRaisedIcon className='inline-block w-8'/><br/>I am <span className='font-semibold'>Jerson Jay</span><br/>an Aspiring<br/><span className='font-semibold'>Web Developer</span>
        </h1>
      </div>

      <Button text={"Contact Me Now "} icon={<PhoneArrowDownLeftIcon className='inline-block w-5'/>} className={"font-poppins border py-2 px-8 text-center text-[1rem] rounded-xl bg-[#1E293B] text-white"} divclassName={"flex justify-center"}/>
    </div>
  )
}

export default Homepage
