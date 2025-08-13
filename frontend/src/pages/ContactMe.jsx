import React from 'react'
import { useState } from 'react';
import {PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from '../components/Button'

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");

  const submitData = (e) => {
    e.preventDefault();

    fetch("https://bonghanoy-jerson-jay-portfolio.onrender.com/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, textMessage })
    })

    .then(res => res.json())
    .then(data => {
      console.log("Server responded with:", data);
      alert(data.message);
    })
    .catch(err => console.error("Error:", err));
  }

  return (
    <div className='p-5 text-[#1E293B] border-l-5 rounded-2xl font-poppins flex flex-col items-center xl:px-10'>
      <div className='text-center'>
        <h1 className='text-xl font-semibold mb-3 md:text-2xl'>Contact Me</h1>
        <p className='text-sm md:text-lg'>Feel free to reach out for collaborations, questions, or just to say hello!</p>

        <div className='flex flex-col text-sm my-5 md:text-lg'>
          <p><EnvelopeIcon className='w-5 inline-block'/> jersonjaybonghanoy@gmail.com</p>
          <p><PhoneIcon className='w-5 inline-block'/>+639915337918</p>
        </div>

        <div className='flex my-5 justify-center w-full md:w-fit mx-auto'>
          <a href="https://www.facebook.com/jersonjay.bonghanoy" className='m-1'>
            <FontAwesomeIcon icon={faFacebook} className='text-3xl md:text-4xl transition-transform duration-200 hover:scale-110'/>
          </a>
          <a href="https://www.instagram.com/jerson_jay18/" className='m-1'>
            <FontAwesomeIcon icon={faInstagram} className='text-3xl md:text-4xl transition-transform duration-200 hover:scale-110'/>
          </a>
          <a href="https://github.com/MrKabado/" className='m-1'>
            <FontAwesomeIcon icon={faGithub} className='text-3xl md:text-4xl transition-transform duration-200 hover:scale-110'/>
          </a>
          <a href="https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/" className='m-1'>
            <FontAwesomeIcon icon={faLinkedin} className='text-3xl md:text-4xl transition-transform duration-200 hover:scale-110'/>
          </a>
        </div>
      </div>

      <form onSubmit={submitData} className='flex flex-col gap-3 w-full sm:w-[70%] md:w-[70%] lg:w-[70%]'>
        <input 
          type="text" 
          placeholder='Your Name'
          className='shadow shadow-gray-300 p-1 text-center rounded-lg placeholder-slate-400 focus:outline-[#1E293B] md:text-lg border-2 border-transparent transition hover:border-[#1E293B]'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />


        <input 
          type="email" 
          placeholder='Your Email' 
          className='shadow shadow-gray-300 p-1 text-center rounded-lg placeholder-slate-400 focus:outline-[#1E293B] md:text-lg border-2 border-transparent transition hover:border-[#1E293B]'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="5" 
          placeholder='Your Message' 
          className='shadow shadow-gray-300 p-1 text-center rounded-lg placeholder-slate-400 focus:outline-[#1E293B] md:text-lg border-2 border-transparent transition hover:border-[#1E293B]'
          value={textMessage}
          onChange={e => setTextMessage(e.target.value)}
          required
          >
          
        </textarea>
        
        <Button
          type={"submit"}
          text={"Submit Message"} 
          className={"border py-1 px-4 rounded-lg bg-[#1E293B] text-white md:text-lg transition-transform hover:scale-[1.03] cursor-pointer"} 
          divclassName={"flex justify-center w-auto"}/>
      </form>
    </div>
  )
}

export default ContactMe
