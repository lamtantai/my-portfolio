import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header.jsx';
import Footer from '../components/Footer.jsx';
import { MousePositionProvider } from '../hooks/useMousePosition.jsx';

export default function RootLayout() {
  return (
    <MousePositionProvider>
      <Outlet />
    </MousePositionProvider>
  );
}
