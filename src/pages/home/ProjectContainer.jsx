import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedInView } from '../../components/AnimatedSection';
import { opacity } from '../../animations/animate';
import { projects } from '../data';
import { useState } from 'react';
import Modal from '../../components/ui/Modal';

function ProjectCard({ id, title, image, type }) {
  return (
    <Link to={`project/${id}`} className='w-full group'>
      <motion.div className='flex flex-col lg:flex-row lg:bg-transparent lg:text-secondary'>
        <motion.figure className='sm:h-[330px] lg:hidden overflow-hidden rounded-3xl lg:rounded-none'>
          {/* project image */}
          <div className='w-full h-full'>
            <img src={image} className='w-full h-full' />
          </div>
        </motion.figure>

        <figcaption className='w-full py-5 lg:py-16 flex flex-col lg:flex-row lg:justify-between gap-3 sm:gap-6 px-4'>
          {/* project name */}
          <motion.h2 className='text-4xl lg:text-7xl font-extrabold lg:group-hover:-translate-x-10 lg:group-hover:opacity-70 duration-500'>
            {title}
          </motion.h2>

          {/* project type */}
          <motion.div className='flex gap-2 items-center flex-wrap text-sm lg:text-lg font-medium lg:font-bold font-secondary lg:group-hover:translate-x-10 lg:group-hover:opacity-70 duration-500'>
            {type.map((type) => (
              <span
                className='border-2 border-secondary capitalize p-1 lg:p-2 rounded-lg'
                key={type}
              >
                * {type}
              </span>
            ))}
          </motion.div>
        </figcaption>
      </motion.div>
    </Link>
  );
}

export default function ProjectContainer({ setBgColor, bgColor }) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div
      className='flex flex-col gap-6 h-full w-full relative rounded-t-[2rem] p-[4vw] shadow-[0_-5px_5px_0_rgba(0,0,0,0.1)] z-10'
      style={{ backgroundColor: bgColor, transitionDuration: '0.5s' }}
    >
      <motion.h2 className='text-[12vw] lg:text-8xl font-bold uppercase'>
        Project
      </motion.h2>

      <motion.div className='flex flex-wrap lg:flex-col items-center gap-10 sm:gap-[3vw] lg:gap-0 pb-10'>
        {projects.map((project, index) => (
          <AnimatedInView
            variants={opacity}
            key={index}
            className='w-full sm:w-[35vw] lg:w-full grow lg:last:border-b-2 lg:border-t-2 border-secondary lg:rounded-none rounded-3xl shadow-[0_0_5px_5px_rgba(0,0,0,0.1)] lg:shadow-none'
            onMouseEnter={() => {
              setModal({ active: true, index });
              setBgColor(project.color);
            }}
            onMouseLeave={() => {
              setModal({ active: false, index });
              setBgColor('#f8f8f8');
            }}
          >
            {/* <ProjectCardDesktop {...project} />
            <ProjectCardMobile {...project} /> */}
            <ProjectCard {...project} />
          </AnimatedInView>
        ))}
      </motion.div>

      <Modal projects={projects} modal={modal} />
    </div>
  );
}
