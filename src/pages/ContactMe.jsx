import React from 'react'
import {PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
  return (
    <div className='p-5 text-[#1E293B] border-l-5 rounded-2xl font-poppins'>
      <div className='text-center'>
        <h1 className='text-xl font-semibold mb-3'>Contact Me</h1>
        <p className='text-sm'>Feel free to reach out for collaborations, questions, or just to say hello!</p>

        <div className='flex flex-col text-sm my-5'>
          <p><EnvelopeIcon className='w-5 inline-block'/> jersonjaybonghanoy@gmail.com</p>
          <p><PhoneIcon className='w-5 inline-block'/>+639915337918</p>
        </div>

        <div className='flex my-5 justify-center'>
          <a href="https://www.facebook.com/jersonjay.bonghanoy"><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
          <a href="https://www.instagram.com/jerson_jay18/"><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
          <a href="https://github.com/MrKabado/"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
          <a href="https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <input type="text" placeholder='Your Name' className='shadow shadow-gray-300 p-1 text-center rounded-lg placeholder-[#1E293B] focus:outline-[#1E293B]'/>
        <input type="email" placeholder='Your Email' className='shadow shadow-gray-300 p-1 text-center rounded-lg placeholder-[#1E293B] focus:outline-[#1E293B]'/>
        <textarea name="" id="" cols="30" rows="5" placeholder='Your Message' className='shadow shadow-gray-300 p-1 text-center rounded-lg placeholder-[#1E293B] focus:outline-[#1E293B]'></textarea>
      </div>
    </div>
  )
}

export default ContactMe
