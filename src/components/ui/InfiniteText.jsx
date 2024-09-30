import { motion } from 'framer-motion';

const infiniteText = {
  initial: { x: '0%' },
  animate: (time) => ({
    x: '-100%',
    transition: { duration: time, repeat: Infinity, ease: 'linear' },
  }),
};

export default function InfiniteText({ children, rotate, mask, ...props }) {
  // const [scrollValue, setScrollValue] = useState(0);

  // useEffect(() => {
  //   const handleScrollY = () => {
  //     setScrollValue(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScrollY);

  //   return () => {
  //     window.removeEventListener('scroll', handleScrollY);
  //   };
  // }, []);

  return (
    <div
      className='flex items-center text-[23vw] md:text-[15rem] font-secondary uppercase whitespace-nowrap leading-none font-black w-full origin-center'
      style={{
        WebkitMaskImage:
          mask &&
          'linear-gradient(90deg, transparent, white 15%, white 85%, transparent)',
        maskImage:
          mask &&
          'linear-gradient(90deg, transparent, white 15%, white 85%, transparent)',
        rotate: rotate,
      }}
    >
      <motion.h2
        initial='initial'
        animate='animate'
        variants={infiniteText}
        {...props}
      >
        {children}
      </motion.h2>
      <motion.h2
        initial='initial'
        animate='animate'
        variants={infiniteText}
        {...props}
      >
        {children}
      </motion.h2>
    </div>
  );
}
