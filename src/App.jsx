import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "./components";
import LoaderProgressBar from "./components/utils/loader/LoaderProgressBar";
import { useFakeProgress } from "./components/useFakeProgress";
import './app.scss';
import SectionNav from './components/utils/ui/SectionNav.jsx';


const App = () => {
  const { progress, loading } = useFakeProgress();
  const { pathname } = useLocation();
  const showSectionNav = pathname === '/';


  return (
    <>
      <Header />
      <LoaderProgressBar progress={progress} loading={loading} />
      {showSectionNav && <SectionNav />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;