import { Outlet } from "react-router";
import { Header, Footer } from "./components";
import LoaderProgressBar from "./components/loader/LoaderProgressBar";
import { useFakeProgress } from "./components/useFakeProgress";
import './app.scss';
import SectionNav from './components/ui/SectionNav.jsx';


const App = () => {
  const { progress, loading } = useFakeProgress();
  

  return (
    <>
      <Header />
      <LoaderProgressBar progress={progress} loading={loading} />
      <SectionNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;