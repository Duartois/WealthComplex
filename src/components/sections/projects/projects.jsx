import { useTranslation } from 'react-i18next';
import './projects.scss';

const Projects = () => {
  const { t } = useTranslation();
  const stats = t('projects.stats', { returnObjects: true });

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__grid" role="list">
          {stats.map((stat, index) => (
            <article className="projects__item" role="listitem" key={index}>
              <h3 className="text-h2 text-primary">{stat.value}</h3>
              <p className="projects__description">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
