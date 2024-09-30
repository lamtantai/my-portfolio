// import { Link, useLoaderData, useNavigation } from 'react-router-dom';
// import { projects } from './projectsData';
// import {
//   motion,
//   useMotionValue,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from 'framer-motion';
// import Button from '../../components/ui/Button';
// import InfiniteText from '../../components/ui/InfiniteText';
// import { PiHandWavingBold } from 'react-icons/pi';
// import Footer from '../../components/Footer';
// import { useRef } from 'react';

// export default function ProjectPageCopy() {
//   const container = useRef();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
//     console.log(latest);
//   });

//   const data = useLoaderData();
//   if (data === undefined) {
//     return;
//   }
//   const projectData = projects[data];

//   const text = useNavigation();
//   if (text.state === 'loading') {
//     console.log(text.location.pathname);
//   }

//   const keys = Object.keys(projects);
//   const currentIndex = keys.indexOf(data);
//   const nextProject =
//     currentIndex >= keys.length - 1 ? keys[0] : keys[currentIndex + 1];

//   const prevProject =
//     currentIndex == 0 ? keys[keys.length - 1] : keys[currentIndex - 1];

//   const Image1 = ({ scrollYProgress }) => {
//     const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//     const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
//     return (
//       <motion.div className='h-screen sticky top-0' style={{ scale, rotate }}>
//         <img
//           src={`../../../public/${projectData.allImage[0]}`}
//           className='w-full h-full'
//         />
//       </motion.div>
//     );
//   };

//   const Image2 = ({ scrollYProgress }) => {
//     const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//     const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
//     return (
//       <motion.div className='h-screen relative' style={{ scale, rotate }}>
//         <img
//           src={`../../../public/${projectData.allImage[0]}`}
//           className='w-full h-full'
//         />
//       </motion.div>
//     );
//   };

//   const Image3 = ({ scrollYProgress }) => {
//     const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//     const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
//     return (
//       <motion.div className='h-screen sticky top-0' style={{ scale, rotate }}>
//         <img
//           src={`../../../public/${projectData.allImage[0]}`}
//           className='w-full h-full'
//         />
//       </motion.div>
//     );
//   };

//   return (
//     <div className='w-full bg-primary'>
//       <section
//         className='relative overflow-hidden mx-4 lg:mx-6 text-secondary'
//         data-scroll
//         data-scroll-speed='-0.45'
//       >
//         <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between items-start h-[85vh] py-[10vh] gap-5 container mx-auto'>
//           <div>
//             <motion.h1 className='text-[11.5vw] md:text-[4.5rem] font-extrabold uppercase'>
//               {projectData.title}
//             </motion.h1>
//           </div>
//           <motion.div className='rounded-3xl overflow-hidden w-full h-full lg:max-w-[650px] '>
//             <img
//               src={`../../../public/${projectData.image}`}
//               className='w-full h-full'
//             />
//           </motion.div>
//         </div>
//       </section>
//       <div className='w-full relative rounded-t-[2rem] font-extrabold bg-secondary text-primary z-10'>
//         <div className='flex flex-col gap-4'>
//           <motion.h3 className='text-6xl md:text-8xl font-bold uppercase'>
//             Overview
//           </motion.h3>
//           <motion.p className='text-xl md:text-2xl'>
//             {projectData.description}
//           </motion.p>
//           <Button>View live site</Button>
//           <div className='flex flex-col gap-4 relative' ref={container}>
//             <Image1 scrollYProgress={scrollYProgress} />
//             <Image2 scrollYProgress={scrollYProgress} />
//           </div>
//         </div>
//       </div>
//       {/* footer */}
//     </div>
//   );
// }
