import { useState, useEffect, useRef } from 'react';
import projects from '../../../../data/projects.js';
import ProjectModal from '../../../../components/ProjectModal/ProjectModal.js';
import styles from './ProjectsCard.module.css';
import githubImage from '../../../../assets/icons/github.png';

function ProjectsCard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const cardElements = useRef([]);
  const delay = 200;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.visible);
          }, index * delay);
          // Once visible, stop observing
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cardElements.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <h2>Meine Projekte</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(element) => cardElements.current[index] = element}
            className={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech, techIndex) => (
                <span key={techIndex} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={styles.buttonWrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.githubButton}>
                <img src={githubImage} alt="GitHub" className={styles.githubIcon} />
                Code
              </button>
            </a>

          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectsCard;
