import Hero from './Hero';
import { useState } from 'react';

import Footer from '../../components/Footer';

import ProjectContainer from './ProjectContainer';

export default function HomePage() {
  const [bgColor, setBgColor] = useState('#f8f8f8');

  return (
    <>
      <main
        className='text-secondary relative z-10'
        style={{ backgroundColor: bgColor, transitionDuration: '0.5s' }}
      >
        {/* hero section */}
        <Hero />

        {/* project container*/}
        <ProjectContainer setBgColor={setBgColor} bgColor={bgColor} />
      </main>
      <Footer bgColor={bgColor} />
    </>
  );
}
