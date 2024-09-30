import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

// import animation
import { menuSlide, menuSlideList, menuSlideItem } from './animate';

import { curvedSlide } from '../header/animate';

// import component
import { links } from './links';

export default function MobileNav({ handleClick }) {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClick(); // Close the menu
      }
    };

    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [handleClick]);

  return (
    <motion.div
      className='fixed w-full sm:w-auto h-full top-0 -right-[20vw] bg-secondary text-primary z-30'
      variants={menuSlide}
      animate='enter'
      exit='exit'
      initial='initial'
    >
      <motion.div
        variants={menuSlideList}
        className='flex flex-col justify-between h-full gap-4 p-6 pt-32 sm:px-[6.5vw] sm:pt-[15vh] sm:pb-[10vh]'
      >
        <div className='flex flex-col gap-6'>
          <hr className='border-primary/70' />
          <ul className='flex flex-col justify-between items-start gap-5 sm:gap-7 text-6xl capitalize font-extrabold'>
            {links.map((link) => (
              <motion.li
                className={`relative cursor-pointer flex justify-between items-center w-[95%] ${
                  pathname === link.path && 'pointer-events-none'
                }`}
                key={link.name}
                variants={menuSlideItem}
                onClick={handleClick}
              >
                <Link to={link.path} className='w-full'>
                  {link.name}
                </Link>
                {pathname === link.path && (
                  <span className='size-[3vw] rounded-full bg-primary'></span>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-6'>
          <hr className='border-primary/70' />
          <div>
            <p className='text-sm text-primary/70 mb-1'>Contact me</p>
            <div className='flex justify-between text-xl font-secondary'>
              <a href='mailto:lttai.dev@gmail.com'>lttai.dev@gmail.com</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CURVED */}
      <div className='absolute top-0 left-0 h-full -translate-x-full'>
        <motion.div
          className='relative h-full overflow-hidden max-w-[5rem]'
          variants={curvedSlide}
        >
          <div className='absolute w-[789%] h-[150%] rounded-[50%] bg-secondary -top-1/4 left-0'></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
