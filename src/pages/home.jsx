import { About, CTA, Hero, Portfolio, Services, Projects} from "../components";

const Home = () => {
    return (
    <main className="overflow-y-auto">
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="projects"><Projects /></section>
        <section id="cta"><CTA /></section>
    </main>
    );
};

export default Home;