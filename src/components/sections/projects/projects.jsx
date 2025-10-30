import './projects.scss';

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects__container">
      <div className="projects__grid" role="list">
        <article className="projects__item" role="listitem">
          <h3 className="text-h2 text-primary">
            3 million+
          </h3>
          <p className="projects__description ">
            Canadians trust us to manage and grow their wealth
          </p>
        </article>
        <article className="projects__item" role="listitem">
          <h3 className="text-h2 text-primary">$100+ billion</h3>
          <p className="projects__description">
            Assets under administration, and growing every single day
          </p>
        </article>
        <article className="projects__item" role="listitem">
          <h3 className="text-h2 text-primary">$1 million</h3>
          <p className="projects__description">
            Eligible coverage with CDIC for chequing and CIPF for investments
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default Projects;
