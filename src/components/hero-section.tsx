/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Image from 'next/image'
import { saveAs } from 'file-saver'
import { Button } from '@nextui-org/react'
import { TypeAnimation } from 'react-type-animation'
import { useRouter } from 'next/navigation'

function HeroSection() {
  const saveFile = () => {
    saveAs(
      "public\files\Resume.pdf",
      "Resume-LeonelMadrid.pdf"
      );
    };
    const router = useRouter();
    

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6A040F] to-[#9D0208]'>Hello, I'm {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Leonel',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Full Stack Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <Button 
              type='button'
              onClick={() => router.push("/#contact")}
              radius='full' 
              className="px-6 py-3 w-full sm:w-fit mr-4 bg-gradient-to-tr from-[#D00000] to-[#FAA307] hover:bg-gradient-to-tr hover:from-[#DC2F02] hover:to-[#FFBA08] text-white shadow-lg"
            >
              Hire Me
            </Button>
            <Button onClick={saveFile} radius='full' className="px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-[#D00000] via-[#F48C06] to-[#FAA307] bg-transparent hover:bg-slate-800 text-white shadow-lg mt-4">
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </Button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/images/hero-image.png'
              alt='Image By freepik'
              width={300}
              height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection