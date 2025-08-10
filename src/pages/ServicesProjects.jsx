import React from 'react'
import {PaintBrushIcon, UserCircleIcon, DevicePhoneMobileIcon, ArrowPathIcon} from '@heroicons/react/24/outline'
import { Laugh, Dumbbell, ScrollText, GraduationCap } from "lucide-react";

import Projects from '../components/Projects'

import Portfolio1 from '../assets/output-1.png'
import FitXpert from '../assets/FitXpert.png'
import RandomJokes from '../assets/output-2.png'
import IntramsSurvey from '../assets/IntramsSurvey.png'
import Portfolio2 from '../assets/Portfolio2.png'


function ServicesProjects() {
  const fitExpert = () => {
    window.open('https://fitxpert.netlify.app/', '_blank');
  }

  const intramsSurvey = () => {
    window.open('https://intrams-survey.netlify.app/', '_blank');
  }

  const portfolio1 = () => {
    window.open('https://jersonjay-portfolio.netlify.app/', '_blank');
  }

  const randomJokes = () => {
    window.open('https://random-fun-jokes.netlify.app/', '_blank');
  }

  const portfolio2 = () => {
    window.open('https://bonghanoy-jerson-jay-portfolio.netlify.app/', '_blank');
  }


  return (
    <div className='p-5 text-[#1E293B] border-l-5 rounded-2xl font-poppins xl:px-20'>
      <h1 className='flex items-center text-xl font-semibold md:text-2xl'>What I Create For You</h1>

      <div className='grid grid-col gap-5 my-5 border-gray-400 border-b-4 pb-10 md:grid-cols-2'>
        <div className='shadow-md shadow-gray-300 p-2 rounded-xl transition=transform duration-300 hover:scale-[1.03]'>
          <PaintBrushIcon className='w-8 md:w-9'/>
          <h1 className='font-semibold text-md md:text-lg'>Custom Website Design</h1>
          <p className='text-sm md:text-base'>I create websites that match your brand’s personality and goals, blending appealing visuals with functionality to keep visitors engaged.</p>
        </div>

        <div className='shadow-md shadow-gray-300 p-2 rounded-xl transition=transform duration-300 hover:scale-[1.03]'>
          <DevicePhoneMobileIcon className='w-8 md:w-9'/>
          <h1 className='font-semibold text-md md:text-lg'>Responsive and Cross-Device Layouts</h1>
          <p className='text-sm md:text-base'>Your website will look great and work smoothly on desktops, tablets, and mobile devices, ensuring a consistent experience for all users.</p>
        </div>

        <div className='shadow-md shadow-gray-300 p-2 rounded-xl transition=transform duration-300 hover:scale-[1.03]'>
          <UserCircleIcon className='w-8 md:w-9'/>
          <h1 className='font-semibold text-md md:text-lg'>User-Centered Interface Design</h1>
          <p className='text-sm md:text-base'>I design layouts and navigation that make it easy for visitors to find what they need, improving overall usability and satisfaction.</p>
        </div>

        <div className='shadow-md shadow-gray-300 p-2 rounded-xl transition=transform duration-300 hover:scale-[1.03]'>
          <ArrowPathIcon className='w-8 md:w-9'/>
          <h1 className='font-semibold text-md md:text-lg'>Website Maintenance and Updates</h1>
          <p className='text-sm md:text-base'>I provide regular updates, content changes, and technical support to keep your website secure, up-to-date, and running smoothly as your business evolves.</p>
        </div>
      </div>

      <div className='my-10'>
        <h1 className='flex items-center text-2xl font-semibold my-4'>My Small Projects</h1>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <Projects 
            title={"My Portfolio"} 
            Icon={UserCircleIcon}
            description={"A personal Portfolio made using basic HTML, CSS, and a bit of JavaScript."} 
            image={Portfolio1}
            alt={"Portfolio"}
            titleColor={"text-blue-400"}
            onClick={fitExpert}
          />

          <Projects 
            title={"Random Jokes"} 
            Icon={Laugh}
            description={"A simple school output build with HTML, CSS, and JavaScript that tells random jokes."} 
            image={RandomJokes}
            alt={"Random Jokes"}
            titleColor={"text-[#8DA4D0]"}
            onClick={fitExpert}
          />

          <Projects 
            title={"FitXpert"} 
            Icon={Dumbbell}
            description={"A basic school project created using HTML, CSS, and JavaScript. It's a gym website that displays pricing and allows users to apply for the program, and similar features."} 
            image={FitXpert}
            alt={"FitXpert"}
            titleColor={"text-red-400"}
            onClick={fitExpert}
          />

          <Projects 
            title={"Intrams Survey"} 
            Icon={ScrollText}
            description={"A school project that collects student feedback on intramurals, including favorite events and suggestions, and displays the results in a simple interface."} 
            image={IntramsSurvey}
            alt={"Intrams Survey"}
            titleColor={"text-sky-300"}
            onClick={fitExpert}
          />

          <Projects 
            title={"My Portfolio"} 
            Icon={GraduationCap}
            description={"My second personal portfolio, built with ReactJS and TailwindCSS. It showcases my improved design approach, though it is not yet fully responsive."} 
            image={Portfolio2}
            alt={"Portfolio2"}
            titleColor={"text-white"}
            onClick={portfolio2}
          />

        </div>
      </div>
    </div>
  )
}

export default ServicesProjects
