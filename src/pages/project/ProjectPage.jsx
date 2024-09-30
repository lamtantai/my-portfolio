import {
  Link,
  useLoaderData,
  useLocation,
  useNavigation,
} from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import InfiniteText from '../../components/ui/InfiniteText';
import { opacity, slideUp } from '../../animations/animate';
import { AnimatedInView } from '../../components/AnimatedSection';
import { IoPlay } from 'react-icons/io5';
import { projects } from '../data';

const maskImage = {
  initial: {
    WebkitMaskImage:
      'repeating-linear-gradient(45deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)',
  },

  enter: {
    WebkitMaskImage:
      'repeating-linear-gradient(45deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)',
    transition: { duration: 1, delay: 0.3, ease: (0.32, 0, 0.67, 0) },
  },
};

function Image({ id }) {
  return (
    <AnimatedInView variants={maskImage} className='h-full w-full'>
      <img src={`${id}`} alt='' className='h-full w-full' />
    </AnimatedInView>
  );
}

export default function ProjectPage() {
  const data = useLoaderData();

  if (data === undefined) {
    return;
  }

  const currentIndex = projects.findIndex((project) => project.id === data);

  const currentProject = projects[currentIndex];
  const nextIndex = currentIndex >= projects.length - 1 ? 0 : currentIndex + 1;
  const nextProject = projects[nextIndex];

  const remainingProjects = projects.filter(
    (project) => project.id !== currentProject.id
  );

  console.log(remainingProjects);

  const { title, image, allImage, tech, color, year, type, description } =
    currentProject;

  return (
    <>
      <main
        className='text-secondary overflow-hidden font-semibold relative z-10'
        style={{ backgroundColor: color }}
      >
        <div>
          <AnimatedInView
            className='grid pt-[6vh] pb-[2vh]'
            variants={slideUp}
            custom={2}
          >
            <div className='bg-transparent'>
              <InfiniteText rotate='-5deg' className='text-stroke' custom={3}>
                {title}&mdash;
              </InfiniteText>
              <InfiniteText rotate='5deg' custom={3}>
                {title}&mdash;
              </InfiniteText>
            </div>
          </AnimatedInView>

          <Image id={image} />
        </div>

        <div className='p-[6vw] flex flex-col gap-10'>
          <div className='flex flex-col gap-3 xl:max-w-[65vw]'>
            <h3 className='uppercase text-xl md:text-4xl'>overview</h3>
            <p className='md:text-2xl'>{description}</p>
            <p className='text-xs md:text-lg mt-4'>
              <a href=''>[ View Website ]</a>
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-8'>
            <div className='flex flex-col gap-3 md:basis-1/3'>
              <p className='uppercase opacity-50 text-xs md:text-lg'>year</p>
              <hr className='opacity-50 border-secondary' />
              <p className='lg:text-2xl'>{year}</p>
            </div>

            <div className='flex flex-col gap-3 md:basis-1/3'>
              <p className='uppercase opacity-50 text-xs md:text-lg'>
                category
              </p>
              <hr className='opacity-50 border-secondary' />
              <ul className='flex gap-7 capitalize flex-wrap md:text-2xl'>
                {type.map((type) => {
                  return <li key={type}>{type}</li>;
                })}
              </ul>
            </div>

            <div className='flex flex-col gap-3 md:basis-1/3'>
              <p className='uppercase opacity-50 text-xs md:text-lg'>stack</p>
              <hr className='opacity-50 border-secondary' />
              <ul className='flex gap-7 uppercase flex-wrap md:text-2xl justify-between'>
                {tech.map((tech) => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className='h-full w-full flex flex-col gap-[2vw] p-[2vw]'>
          {allImage.map((image, index) => (
            <Image key={index} id={image} />
          ))}
        </div>
      </main>
      <div
        className='sticky bottom-0 flex flex-col justify-between gap-6 font-semibold py-[10vh] overflow-hidden uppercase text-secondary px-[1vw]'
        style={{ backgroundColor: color }}
      >
        <Link to={`/project/${nextProject.id}`}>
          <p className='uppercase font-black text-[8vw] xl:text-[6rem] leading-none flex justify-between'>
            Next project
          </p>
          <p className='uppercase font-black text-[8vw] xl:text-[6rem] leading-none flex justify-between'>
            {nextProject.title}
          </p>
        </Link>
        <div className='flex'>
          {remainingProjects.map((project, index) => (
            <Link to={`/project/${project.id}`}>
              <Image id={project.image} key={index} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
