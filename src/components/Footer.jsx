import { motion } from 'framer-motion';
import { PiHandWavingBold } from 'react-icons/pi';
import InfiniteText from './ui/InfiniteText';
import { Link } from 'react-router-dom';

export default function Footer({ bgColor = '#f8f8f8' }) {
  return (
    <footer
      className='h-fit sticky bottom-0 text-secondary'
      style={{ backgroundColor: bgColor, transitionDuration: '0.5s' }}
    >
      <div className='flex flex-col justify-end gap-6 font-semibold pt-[8vh] overflow-hidden uppercase px-[4vw]'>
        <Link to='/contact'>
          <h2 className='uppercase font-black text-[10vw] xl:text-[9rem] leading-none flex justify-between'>
            <span>Say</span>
            <span>
              <PiHandWavingBold />
            </span>
            <span>Hello!</span>
          </h2>
        </Link>

        {/* infinite text */}
        <InfiniteText mask custom={14}>
          lam tan tai&mdash;frontend developer&mdash;
        </InfiniteText>

        <div className='flex justify-between py-2 md:py-6 text-lg sm:text-2xl border-t-2 border-secondary '>
          <p>Portfolio &#169;2024</p>
          <p>Code by me</p>
        </div>
      </div>
    </footer>
  );
}
