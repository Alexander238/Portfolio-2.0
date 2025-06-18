import { useParams } from 'react-router-dom';
import projects from '../../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Projekt nicht gefunden</div>;

  return (
    <section>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.content}</p>
    </section>
  );
}

export default ProjectDetail;
