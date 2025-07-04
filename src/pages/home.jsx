import { About, CTA, Hero, Portfolio, Services, Projects} from "../components";

const Home = () => {
    return (
    <main className="overflow-y-auto">
      <section id="hero"><Hero /></section>
      <section id="Services"><Services /></section>
      <section id="About"><About /></section>
      <section id="Projects"><Projects /></section>
      <section id="Portfolio"><Portfolio /></section>
      <section id="CTA"><CTA /></section>
    </main>
    );
};

export default Home;