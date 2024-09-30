import { motion } from 'framer-motion';
import { slideUp } from '../../animations/animate';
import { AnimatedSplitText } from '../../components/AnimatedSection';

const word1 = 'Front—end';
const word2 = 'Developer';

const parentWord = {
  enter: { transition: { staggerChildren: 0.03, delayChildren: 0.5 } },
};

const parentParagraph = {
  enter: { transition: { staggerChildren: 0.02, delayChildren: 1.2 } },
};

export default function Hero() {
  return (
    <section
      className='relative overflow-hidden'
      data-scroll
      data-scroll-speed='-0.35'
    >
      <div className='py-[12vh] h-full w-full px-[4vw] uppercase'>
        {/* TEXT */}
        <div className='flex flex-col lg:flex-row gap-8 md:gap-14 lg:items-end justify-between'>
          {/* GREETING WITH ANIMATION */}
          <div className='text-[23vw] lg:text-[14vw] leading-none font-vanguard'>
            <AnimatedSplitText>Front—end</AnimatedSplitText>
            <AnimatedSplitText>Developer</AnimatedSplitText>
          </div>

          {/* PARAGRAPH */}
          <motion.div
            className='font-roboto text-md'
            variants={parentParagraph}
            initial='initial'
            animate='enter'
          >
            <div className='overflow-hidden'>
              <motion.p variants={slideUp}>Hello, I'm Lam Tan Tai.</motion.p>
            </div>
            <div className='overflow-hidden'>
              <motion.p variants={slideUp}>
                I'm a self-taught developer.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
