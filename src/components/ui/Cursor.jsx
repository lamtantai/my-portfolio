import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function Cursor({ isHover }) {
  const CURSOR_SIZE = isHover ? 80 : 0;
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        translateX: `${x - CURSOR_SIZE / 2}px`,
        translateY: `${y - CURSOR_SIZE / 2}px`,
        width: `${CURSOR_SIZE}px`,
        height: `${CURSOR_SIZE}px`,
      }}
      transition={{ type: 'tween', duration: 0.2, ease: 'backOut' }}
      className='fixed left-0 top-0 rounded-full bg-secondary z-50 mix-blend-difference pointer-events-none'
    ></motion.div>
  );
}
