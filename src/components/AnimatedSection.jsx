import { useRef } from 'react';
import { slideUp } from '../animations/animate';
import { motion, useInView, useScroll } from 'framer-motion';

const parentWord = {
  enter: { transition: { staggerChildren: 0.03, delayChildren: 0.5 } },
};

export const AnimatedInView = ({ children, variants, ...props }) => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <motion.div
      {...props}
      ref={ref}
      variants={variants}
      initial='initial'
      animate={isInView && 'enter'}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedSplitText = ({ children }) => {
  const chars = children.split('');

  return (
    <motion.p
      className='overflow-hidden'
      variants={parentWord}
      initial='initial'
      animate='enter'
    >
      {chars.map((char, index) => {
        return (
          <motion.span variants={slideUp} key={index} className='inline-block'>
            {char == ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </motion.p>
  );
};
