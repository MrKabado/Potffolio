import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
  return (
    <div className='p-5 text-[#1E293B] border-l-5 rounded-2xl font-poppins overflow-y-hidden'>
      <div className='text-center'>
        <h1 className='text-xl font-semibold mb-3'>Contact Me</h1>
        <p className='text-sm'>Feel free to reach out for collaborations, questions, or just to say hello!</p>

        <div className='flex flex-col text-sm my-5'>
          <p>jersonjaybonghanoy@gmail.com</p>
          <p>+639915337918</p>
        </div>

        <div className='flex my-5 justify-center'>
          <a href=""><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
          <a href=""><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
          <a href=""><FontAwesomeIcon icon={faGithub} size='2x'/></a>
          <a href=""><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <input type="text" placeholder='Your Name' className='border-2 border-[#1E293B] p-1 text-center rounded-lg'/>
        <input type="email" placeholder='Your Email' className='border-2 border-[#1E293B] p-1 text-center rounded-lg'/>
        <textarea name="" id="" cols="30" rows="5" placeholder='Your Message' className='border-2 border-[#1E293B] p-1 text-center rounded-lg'></textarea>
      </div>
    </div>
  )
}

export default ContactMe
