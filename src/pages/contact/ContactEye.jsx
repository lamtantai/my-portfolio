import { motion } from 'framer-motion';

export default function ContactEye({ positionEyesX, positionEyesY }) {
  return (
    <div className='flex items-center justify-center w-[24vw] h-[15vw] lg:w-[15rem] lg:h-[11rem] rounded-[50%] bg-primary -rotate-45 overflow-hidden relative'>
      <motion.div
        transition={{
          type: 'tween',
          duration: 0.8,
        }}
        data-eye='eye'
        className='size-[15vw] lg:size-44 bg-secondary rounded-full absolute inset-0'
        style={{
          transform: `translate3d(${positionEyesX / 35}%, ${
            positionEyesY / 35
          }%, 0)`,
        }}
      ></motion.div>
    </div>
  );
}
