import { useState } from 'react';

// components import
import Nav from './Nav';
import MobileNav from './MobileNav';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  function handleClick() {
    setIsOpenNav(!isOpenNav);
  }

  return (
    <>
      <header className='fixed w-full p-3 lg:p-4 lg:px-16 z-50 text-secondary backdrop-blur-sm mix-blend-difference text-3xl font-bold'>
        <div className='flex justify-end items-center m-auto'>
          {/* mobile nav */}
          <motion.div
            className='flex items-center gap-2 sm:hidden cursor-pointer leading-none'
            onClick={handleClick}
          >
            <span className='size-[2vw] rounded-full bg-primary'></span>
            <h2 className='text-primary'>{isOpenNav ? 'Close' : 'Menu'}</h2>
          </motion.div>
        </div>
        {/* desktop nav */}
        <div className='hidden sm:flex'>
          <Nav />
        </div>
      </header>
      {/* side menu */}
      <AnimatePresence mode='wait'>
        {isOpenNav && <MobileNav handleClick={handleClick} />}
      </AnimatePresence>
    </>
  );
}
