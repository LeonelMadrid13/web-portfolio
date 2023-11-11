'use client'
import Link from 'next/link';
import NavLink from './navlink';
import Logo from './Logo';
import React, { useState } from 'react';

import { IconMenu, IconX } from '@tabler/icons-react';
import MenuOverlay from './menu-overlay';

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const NavLinks = [
    {
      title: 'About',
      href: '#about'
    },
    {
      title: 'Projects',
      href: '#projects'
    },
    {
      title: 'Contact',
      href: '#contact'
    }
  ]


  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href='/' className='text-2xl text-white font-semibold'>
          <Logo />
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !showMenu ? (
              <button 
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                onClick={() => setShowMenu(true)}
              >
                <IconMenu className='h-4 w-4'/>
              </button>
            ):(
              <button 
                  className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                  onClick={() => setShowMenu(false)}
                >
                <IconX className='h-4 w-4'/>
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showMenu ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  )
}

export default NavbarComponent