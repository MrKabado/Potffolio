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
        <h1 className='text-[2.1rem] leading-10 text-center'>
          Hi there!<br/>I am <span className='font-semibold'>Jerson Jay</span><br/>an Aspiring<br/><span className='font-semibold'>Web Developer</span>
        </h1>
      </div>

      <Button text={"Contact Me"} className={"border py-2 px-10 text-center text-[25px] rounded-xl bg-[#1E293B] text-white"} divclassName={"flex justify-center"}/>
    </div>
  )
}

export default Homepage
