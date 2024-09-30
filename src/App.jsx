import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import PageTransition from './components/ui/PageTransition';
import ProjectPage from './pages/project/ProjectPage';
import ProjectLayout from './layouts/ProjectLayout';
import AboutLayout from './layouts/AboutLayout';
import HomeLayout from './layouts/HomeLayout';
import ContactLayout from './layouts/ContactLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <PageTransition>
            <HomeLayout />
          </PageTransition>
        ),
      },
      {
        path: 'project/:projectId',
        element: (
          <PageTransition>
            <ProjectLayout />
          </PageTransition>
        ),
        loader: ({ params }) => {
          return params.projectId;
        },
      },
      {
        path: 'about',
        element: (
          <PageTransition>
            <AboutLayout />
          </PageTransition>
        ),
      },
      {
        path: 'contact',
        element: (
          <PageTransition>
            <ContactLayout />
          </PageTransition>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
