'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './tab-button'

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const TAB_DATA: {title:string, id:string, content: React.JSX.Element}[] = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className='list-disc pl-2'>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      )
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <ul className='list-disc pl-2'>
          <li>Monterrey Institute of Technology and Higher Education</li>
        </ul>
      )
    },
    {
      title: 'Certifications',
      id: 'certifications',
      content: (
        <ul className='list-disc pl-2'>
          <li> Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero (Udemy) </li>
          <li> TypeScript Course (Codecademy)</li>
          <li> Back End Development and APIs (freeCodeCamp)</li>
          <li> Create a Front-End App with React Skill Path (Codecademy)</li>
        </ul>
      )
    },
  ]


  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image 
          src='/images/about-image.jpg'
          alt='Image by Parth Shah from Pixabay'
          width={700}
          height={700}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Node.js, Express, PostgreSQL, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-8 text-justify'>
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection