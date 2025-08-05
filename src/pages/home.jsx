import { About, CTA, Hero, Skills, Services, Projects} from "../components";

const Home = () => {
    return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="cta"><CTA /></section>
    </main>
    );
};

export default Home;