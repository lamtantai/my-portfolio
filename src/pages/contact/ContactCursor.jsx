import Icon from '/happy-emoji-svgrepo-com.svg';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function ContactCursor({ isHover }) {
  const EMOJI_SIZE = isHover ? 234 : 30;
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{
        translateX: x - EMOJI_SIZE / 2,
        translateY: y - EMOJI_SIZE / 2,
        width: EMOJI_SIZE,
        height: EMOJI_SIZE,
      }}
      transition={{ type: 'tween', duration: 0.2, ease: 'backOut' }}
      className='fixed inset-0 pointer-events-none z-10'
    >
      <img src={Icon} alt='Happy Emoji' className='w-full' />
    </motion.div>
  );
}
