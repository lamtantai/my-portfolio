import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ContactEye from './ContactEye';
import PhoneNumber from '/curve text.svg';
import ContactCursor from './ContactCursor';
import { useMousePosition } from '../../hooks/useMousePosition';

const mailText = 'lttai.dev@gmail.com'.split('');

const MAX_DISTANCE = 130;
const MAX_FONTWEIGHT = 900;
const MIN_FONTWEIGHT = 400;

const parentVariant = {
  initial: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

export default function ContactPage() {
  const [isHover, setIsHover] = useState(false);
  const [isMailHover, setIsMailHover] = useState(false);
  const [positionEyes, setPositionEyes] = useState({ x: 0, y: 0 });
  const { x, y } = useMousePosition();

  useEffect(() => {
    // Update eye position based on cursor movement
    const eyeElement = document.querySelector('[data-eye="eye"]');
    const eyeRect = eyeElement.getBoundingClientRect();
    setPositionEyes({
      x: x - eyeRect.x + eyeRect.width / 2,
      y: y - eyeRect.y + eyeRect.height / 2,
    });

    // Smooth font weight change for all elements with data-animate="font-weight"
    const allChars = document.querySelectorAll('[data-animate="font-weight"]');
    allChars.forEach((item) => {
      item.style.transition = 'font-weight cubic-bezier(0.76, 0, 0.24, 1)';
    });

    allChars.forEach((item) => {
      const itemRect = item.getBoundingClientRect();

      // Get the closest point on the item to the cursor
      const xClosest = Math.max(itemRect.left, Math.min(x, itemRect.right));
      const yClosest = Math.max(itemRect.top, Math.min(y, itemRect.bottom));

      // Calculate the distance between the cursor and the closest point on the item
      const distance = Math.sqrt(
        Math.pow(xClosest - x, 2) + Math.pow(yClosest - y, 2)
      );

      // Scale the font weight based on the distance
      const fontWeight =
        distance <= MAX_DISTANCE
          ? MIN_FONTWEIGHT +
            (distance / MAX_DISTANCE) * (MAX_FONTWEIGHT - MIN_FONTWEIGHT)
          : MAX_FONTWEIGHT;

      // Apply the calculated font weight to the item
      item.style.fontWeight = fontWeight;
    });
  }, [x, y]);

  return (
    <main className='bg-[#ffcb4f] text-secondary'>
      <div className=' min-h-screen flex flex-col justify-center items-center py-10'>
        <motion.div
          className='flex flex-col items-center gap-[10vw] lg:gap-24'
          variants={parentVariant}
        >
          {/* CONTACT EYES CONTAINER */}
          <motion.div className='relative flex items-center justify-center gap-[8vw] lg:gap-24'>
            <motion.div
              className='absolute bg-[#ffcb4f] h-[130%] w-full z-10'
              initial={{ top: '-10%' }}
              animate={{ top: '-150%' }}
              transition={{
                duration: 0.6,
                delay: 1.1,
              }}
            />
            <motion.div
              className='absolute -translate-y-full bg-[#ffcb4f] h-10 w-full z-10'
              animate={isHover ? { top: '0' } : { top: '-20%' }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            />
            <ContactEye
              positionEyesX={positionEyes.x}
              positionEyesY={positionEyes.y}
            />
            <ContactEye
              positionEyesX={positionEyes.x}
              positionEyesY={positionEyes.y}
            />
            <motion.div
              className='absolute translate-y-full bg-[#ffcb4f] h-10 w-full z-10 '
              animate={isHover ? { bottom: '0' } : { bottom: '-20%' }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            />
          </motion.div>

          {/* PHONE NUMBER IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
            className='w-[65vw] lg:w-[650px] lg:opacity-50 lg:hover:opacity-100 z-20'
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
          >
            <a href='tel:+384724567'>
              <img src={PhoneNumber} alt='Your SVG' className='w-full' />
            </a>
          </motion.div>
        </motion.div>

        {/* SPLIT TEXT MAIL */}
        <div
          className='text-center text-[8vw] leading-none mt-14 font-black z-20'
          onMouseEnter={() => {
            setIsMailHover(true);
          }}
          onMouseLeave={() => {
            setIsMailHover(false);
          }}
        >
          <a href='mailto:lttai.dev@gmail.com'>
            {mailText.map((char, index) => (
              <motion.span data-animate='font-weight' key={char + index}>
                {char}
              </motion.span>
            ))}
          </a>
        </div>

        {/* CONTACT CURSOR WITH HAPPY EMOJI */}
        <ContactCursor isHover={isMailHover} />
      </div>
    </main>
  );
}
