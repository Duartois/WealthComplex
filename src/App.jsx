import { Outlet } from "react-router";
import { Header, Footer } from "./components";
import './app.scss';

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
