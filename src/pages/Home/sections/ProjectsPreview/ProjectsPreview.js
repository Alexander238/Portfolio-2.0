import { useState } from 'react';
import projects from '../../../../data/projects';
import ProjectModal from '../../../../components/ProjectModal/ProjectModal.js'
import styles from './ProjectsPreview.module.css';

function ProjectsPreview() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h1>Meine Projekte</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
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

export default ProjectsPreview;
