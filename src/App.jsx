import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useFakeProgress } from './components/useFakeProgress';
import './app.scss';

const Header = React.lazy(() => import('./components/sections/header/header.jsx'));
const Footer = React.lazy(() => import('./components/sections/footer/footer.jsx'));
const LoaderProgressBar = React.lazy(() => import('./components/utils/loader/LoaderProgressBar.jsx'));
const SectionNav = React.lazy(() => import('./components/utils/ui/SectionNav.jsx'));


const App = () => {
  const { progress, loading } = useFakeProgress();
  const { pathname } = useLocation();
  const showSectionNav = pathname === '/';


  return (
    <>
      <Suspense fallback={<div />}> <Header /> </Suspense>
      <Suspense fallback={null}><LoaderProgressBar progress={progress} loading={loading} /></Suspense>
      {showSectionNav && (
        <Suspense fallback={null}>
          <SectionNav />
        </Suspense>
      )}
      <Outlet />
      <Suspense fallback={<div />}> <Footer /> </Suspense>
    </>
  );
};

export default App;