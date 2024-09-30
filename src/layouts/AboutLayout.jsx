import { Outlet } from 'react-router-dom';
import FooterWrap from '../components/FooterWrap';
import PageTransition from '../components/ui/PageTransition';
import AboutPage from '../pages/about/AboutPage';

export default function () {
  return (
    <>
      <AboutPage />
    </>
  );
}
