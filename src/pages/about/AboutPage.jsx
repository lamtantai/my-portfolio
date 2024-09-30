import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../../components/Footer';
import { AnimatedSplitText } from '../../components/AnimatedSection';

const paragraph1 =
  "A self-taught front-end developer based in Ho Chi Minh City. My journey into front-end development began in 2024. I've fallen in love with everything related to the visual aspects of websites, animations.";

const paragraph2 =
  "Although I'm early in my journey but I've completed several personal projects that reflect my dedication to mastering front-end development. Each project is an opportunity to learn new concepts";

function AnimatedOpacityText({ paragraph }) {
  console.log(paragraph);
  const chars = paragraph.split('');
  const paragraphContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: paragraphContainer,
    offset: ['start 0.2', 'start start'],
  });

  const Char = ({ range, children }) => {
    const opacity = useTransform(scrollYProgress, range, [0.5, 1]);
    return <motion.span style={{ opacity }}>{children}</motion.span>;
  };

  return (
    <motion.p
      ref={paragraphContainer}
      className='relative font-black text-lg md:text-xl lg:text-2xl 2xl:text-4xl leading-relaxed font-roboto uppercase'
    >
      {chars.map((char, index) => {
        const start = index / paragraph.length;
        const end = start + 1 / paragraph.length;
        return (
          <Char key={`c_${index}`} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </motion.p>
  );
}

export default function AboutPage() {
  return (
    <>
      <main className='bg-primary text-secondary relative z-10'>
        <div className='flex flex-col gap-[3vh] pt-[10vh] px-[4vw]'>
          <div className='uppercase font-vanguard text-[25vw] lg:text-[13rem] font-black'>
            <AnimatedSplitText>About me</AnimatedSplitText>
          </div>

          <div className='flex flex-col md:flex-row w-full gap-3 justify-between'>
            <div className='md:w-[50%]'>
              <AnimatedOpacityText paragraph={paragraph1} />
            </div>

            <div className='md:w-[45%] rounded-3xl overflow-hidden'>
              <img
                src='/bin.jpg'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          <div className='md:mt-6 lg:flex lg:justify-end lg:w-3/4 lg:ml-auto lg:text-right'>
            <AnimatedOpacityText paragraph={paragraph2} />
          </div>

          <div className='flex flex-col gap-4 md:gap-8 my-10'>
            <h3 className='font-extrabold text-[6.6vw] lg:text-[5vw]'>
              My skills:
            </h3>
            <ul className='uppercase text-[4.5vw] lg:text-[3vw] font-semibold flex flex-wrap justify-between gap-x-6 gap-y-2 md:gap-8'>
              <li>html/css</li>
              <li>tailwind</li>
              <li>react</li>
              <li>redux</li>
              <li>next.js</li>
              <li>framer</li>
            </ul>
          </div>
          {/* <Link to='/contact'>
            <h2 className='uppercase font-black text-[13vw] 2xl:text-[12rem] border-t-2 border-secondary pt-[4vw] leading-none'>
              Let's <br /> get in touch
            </h2>
          </Link> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
