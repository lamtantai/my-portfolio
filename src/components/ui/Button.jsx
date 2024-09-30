import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

// import ui
import Cursor from './Cursor';

const arrow = {
  hover: {
    rotateZ: '45deg',
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
  notHover: {
    rotateZ: '0deg',
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Button({ children, pathname, color = 'secondary' }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to={pathname}>
      <motion.div
        className={`text-2xl sm:text-4xl font-semibold w-fit inline-block text-${color}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        animate={isHover ? 'hover' : 'notHover'}
      >
        <span className={`flex items-center gap-3 border-b-2 border-${color}`}>
          {children}
          <motion.span className='text-3xl sm:text-5xl' variants={arrow}>
            &#129125;
          </motion.span>
        </span>
      </motion.div>
    </Link>
  );
}
