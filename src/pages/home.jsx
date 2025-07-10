import { About, CTA, Hero, Skills, Services, Projects} from "../components";

const Home = () => {
    return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="Services"><Services /></section>
      <section id="About"><About /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"><Projects /></section>
      <section id="CTA"><CTA /></section>
    </main>
    );
};

export default Home;