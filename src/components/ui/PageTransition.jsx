import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import {
  pageTransition,
  curvedPageTransition,
  scaleAnimation,
} from '../../animations/animate';
import ScrollToTop from '../ScrollToTop';
import Header from '../header/Header';

const animate = (variants) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

const routes = {
  '/': 'Home',
  '/project': 'Project',
  '/about': 'About',
  '/contact': 'Contact',
  '/project/project1': 'project1',
  '/project/project2': 'project2',
  '/project/project3': 'project3',
};

export default function PageTransition({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <AnimatePresence mode='wait'>
      <motion.div className='h-full' key={pathname}>
        <ScrollToTop />
        <Header />
        {children}

        <motion.div
          className='bg-secondary h-screen w-full fixed left-0 z-50'
          {...animate(pageTransition)}
        >
          {/* top curved */}
          <motion.div
            className='w-full h-[7vh] max-h-[5rem] absolute top-0 -translate-y-full overflow-hidden'
            {...animate(curvedPageTransition)}
          >
            <div className='absolute w-[150%] h-[750%] bg-secondary rounded-[50%] -left-1/4'></div>
          </motion.div>

          <motion.div
            className='text-[15vw] md:text-[8vw] text-primary font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            {...animate(scaleAnimation)}
          >
            {routes[pathname]}
          </motion.div>

          {/* bottom curved */}
          <motion.div
            className='w-full h-[7vh] max-h-[5rem] absolute bottom-0 translate-y-[99%] rotate-180 overflow-hidden'
            {...animate(curvedPageTransition)}
          >
            <div className='absolute w-[150%] h-[750%] bg-secondary rounded-[50%] -left-1/4'></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
