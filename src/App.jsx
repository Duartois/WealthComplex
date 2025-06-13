import { Outlet } from "react-router";
import { Header, Footer } from "./components";
import LoaderProgressBar from "./components/LoaderProgressBar";
import { useFakeProgress } from "./components/useFakeProgress";


const App = () => {
  const { progress, loading } = useFakeProgress();

  return (
    <>
      <LoaderProgressBar progress={progress} loading={loading} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;