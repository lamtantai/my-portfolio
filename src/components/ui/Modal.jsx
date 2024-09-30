import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
export default function Modal({ projects, modal }) {
  const { active, index } = modal;

  const CONTAINER_SIZE = active ? 400 : 0;
  const CIRCLE_SIZE = active ? 80 : 0;
  const { x, y } = useMousePosition();

  return (
    <div>
      <motion.div
        className='fixed top-0 left-0 flex items-center justify-center overflow-hidden pointer-events-none'
        animate={{
          translateX: x - CONTAINER_SIZE / 2,
          translateY: y - CONTAINER_SIZE / 2,
          width: CONTAINER_SIZE,
          height: CONTAINER_SIZE,
        }}
        style={{
          border: active ? '2px solid #171718' : 'none',
        }}
        transition={{ type: 'tween', duration: 0.2, ease: 'backOut' }}
      >
        <motion.div
          className='h-full w-full absolute'
          animate={{ top: index * -100 + '%' }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        >
          {projects.map((project, index) => {
            const { color, image } = project;
            return (
              <div
                className='h-full flex items-center justify-center'
                key={index}
                style={{ backgroundColor: color }}
              >
                <div className='size-[85%]'>
                  <img
                    src={image}
                    alt='project-image'
                    className='w-full h-full'
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        animate={{
          translateX: x - CIRCLE_SIZE / 2,
          translateY: y - CIRCLE_SIZE / 2,
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
        }}
        transition={{ type: 'tween', duration: 0.35, ease: 'backOut' }}
        className='fixed top-0 left-0 bg-blue-500 rounded-full flex items-center justify-center pointer-events-none'
      ></motion.div>

      <motion.div
        animate={{
          translateX: x - CIRCLE_SIZE / 2,
          translateY: y - CIRCLE_SIZE / 2,
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          scale: active ? 1 : 0,
        }}
        transition={{ type: 'tween', duration: 0.3, ease: 'backOut' }}
        className='fixed top-0 left-0 text-xl font-semibold flex items-center justify-center pointer-events-none'
      >
        View
      </motion.div>
    </div>
  );
}
