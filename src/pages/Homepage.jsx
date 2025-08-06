import React from 'react'
import ProfilePic from '../assets/profile-no-bg.png'
import Button from '../components/Button'

function Homepage() {
  return (
    <div className='flex flex-col gap-10 h-screen'>
      <div className='flex justify-center'>
        <img src={ProfilePic} alt="profile picture" className='w-[50%] border-[#1E293B] border-4 rounded-full bg-[#1E293B]'/>
      </div>
      <div>
        <h1 className='text-[1.8rem] leading-10 text-center font-poppins text-[#1E293B]'>
          Hi there!<br/>I am <span className='font-semibold'>Jerson Jay</span><br/>an Aspiring<br/><span className='font-semibold'>Web Developer</span>
        </h1>
      </div>

      <Button text={"Contact Me"} className={"font-poppins border py-1 px-8 text-center text-[20px] rounded-xl bg-[#1E293B] text-white"} divclassName={"flex justify-center"}/>
    </div>
  )
}

export default Homepage
