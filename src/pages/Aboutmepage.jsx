import React, {useState} from 'react'
import {UserIcon, CodeBracketSquareIcon, DevicePhoneMobileIcon, AdjustmentsHorizontalIcon, ArrowsRightLeftIcon, LightBulbIcon, Cog6ToothIcon} from '@heroicons/react/24/outline'
import Button from '../components/Button';

function Aboutmepage() {

  const [showBackground, setShowBackground] = useState(false);

  const handleBackground = () => {
    setShowBackground(!showBackground);
  }

  return (
    <div className='p-5 text-[#1E293B] border-l-5 rounded-2xl font-poppins'>
      <h1 className='flex items-center text-xl font-semibold md:text-2xl'><UserIcon className='w-8 md:w-10'/>Who Am I?</h1>
      <div className='border p-2 my-5 bg-[#1E293B] rounded-lg'>
        <p className='text-white text-justify md:text-lg'>Hi, I’m Jerson Jay — a dedicated Information Technology student passionate about turning ideas into digital solutions. I have a passion for technology and a knack for problem-solving, aiming to create innovative solutions that meet and exceed expectations.</p>
      </div>

      <h1 className='font-semibold text-xl md:text-2xl'>Background</h1>
      { showBackground && (
        <div className='shadow-md shadow-gray-300 p-2 my-5 bg-white rounded-lg'>
        <p className='text-[#1E293B] text-justify md:text-lg'>
        Hi again! My journey into tech began with a fascination for how things work behind the scenes—how websites load, how apps respond, and how technology continues to shape the world around us. That curiosity led me to pursue a degree in Information Technology at Cordova Public College.
        <br /><br />
        As an irregular student in Information Technology, my academic journey has been unique. Shifting between different sections and adapting to new classmates and teaching styles each semester has taught me the value of flexibility, perseverance, and the ability to thrive in dynamic environments. But it’s also been a valuable experience that has taught me to stay resilient, adaptable, and focused on continuous learning.
        <br /><br />
        Over time, I’ve built a strong foundation in coding, logical thinking, and digital creativity. I enjoy solving problems—whether it’s debugging code or finding better ways to improve a system’s efficiency.
        <br /><br />
        Outside of my studies, I’m passionate about cycling and personal development. I believe that discipline and consistency—both in life and in code—are key to achieving long-term success. My goal is to use technology not only to grow personally and professionally, but also to support my family and contribute to the world in meaningful ways.
        </p>
      </div>
      )}
      <Button text={"Show Background"} className={"border px-1 rounded-md text-xs md:text-sm"} onClick={handleBackground}/>
    
      <h1 className='font-semibold text-xl my-2 md:text-2xl'>What I Can Do</h1>
      <div className='shadow-md shadow-gray-300 p-2 my-5 bg-white rounded-lg md:text-lg'>
        <p className='text-[#1E293B] text-justify'>
        I’m constantly honing my craft, solving problems, and crafting creative solutions. With a passion for design, development, and everything in between, I focus on building digital experiences that are both functional and engaging.
        </p>
      </div>

      <h1 className='font-semibold text-xl my-2 md:text-2xl'>My Skills</h1>
      <div className='grid grid-cols-1 grid-rows-6 gap-3 sm:grid-cols-2 sm:grid-rows-3'>
        <div className='border-2 border-[#1E293B] rounded-xl p-2 bg-[#1E293B]'>
          <CodeBracketSquareIcon className='w-10 text-[#d946ef]'/>
          <h1 className='text-md font-semibold text-[#d946ef] md:text-lg'>Front-End Development</h1>
          <p className='text-sm text-white md:text-base'>HTML, CSS, JavaScript, ReactJS, Tailwind CSS</p>
        </div>

        <div className='border-2 border-[#1E293B] rounded-xl p-2 bg-[#1E293B]'>
          <DevicePhoneMobileIcon className='w-10 text-[#22d3ee]'/>
          <h1 className='text-md font-semibold text-[#22d3ee] md:text-lg'>Responsive Web Design</h1>
          <p className='text-sm text-white md:text-base'>Creating mobile-friendly and user-focused layouts</p>
        </div>

        <div className='border-2 border-[#1E293B] rounded-xl p-2 bg-[#1E293B]'>
          <AdjustmentsHorizontalIcon className='w-10 text-[#fb923c]'/>
          <h1 className='text-md font-semibold text-[#fb923c] md:text-lg'>Basic UI/UX Design</h1>
          <p className='text-sm text-white md:text-base'>Designing clean, simple, and intuitive interfaces</p>
        </div>

        <div className='border-2 border-[#1E293B] rounded-xl p-2 bg-[#1E293B]'>
          <ArrowsRightLeftIcon className='w-10 text-[#40c370]'/>
          <h1 className='text-md font-semibold text-[#40c370] md:text-lg'>Version Control</h1>
          <p className='text-sm text-white md:text-base'>Basic knowledge of Git and GitHub for tracking and collaborating</p>
        </div>

        <div className='border-2 border-[#1E293B] rounded-xl p-2 bg-[#1E293B]'>
          <LightBulbIcon className='w-10 text-[#a855f7]'/>
          <h1 className='text-md font-semibold text-[#a855f7] md:text-lg'>Continuous Learning</h1>
          <p className='text-sm text-white md:text-base'>Always exploring new tools and improving current skills</p>
        </div>

        <div className='border-2 border-[#1E293B] rounded-xl p-2 bg-[#1E293B]'>
          <Cog6ToothIcon className='w-10 text-red-500'/>
          <h1 className='text-md font-semibold text-red-500 md:text-lg'>Code Optimization</h1>
          <p className='text-sm text-white md:text-base'>Focused on improving software performance through efficient coding and debugging.</p>
        </div>
      </div>

      <div className='p-2 my-2 shadow-md shadow-gray-300 rounded-lg'>
      <h1 className='font-semibold text-xl my-2 md:text-2xl'>Ready to bring ideas to life?</h1>
      <p className='text-[#1E293B] text-sm md:text-lg'>I offer creative, reliable, and efficient solutions that go beyond just code. Tap in and explore what I can do for you — because your next big project deserves nothing less.
      </p><Button to={"/contact-me"} text={"Reach Out!"} className={"text-blue-500 inline-block md:text-lg"}/>
      </div>
    </div>
  )
}

export default Aboutmepage
