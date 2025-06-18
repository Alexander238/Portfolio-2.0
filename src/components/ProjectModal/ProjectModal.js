import styles from './ProjectModal.module.css';

function ProjectModal({ project, onClose }) {
  return (
    <div className={`modal ${styles.backdrop}`} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // Modal-Klick nicht schließen
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h1>{project.title}</h1>
        <img className={styles.modalImage} src={project.image} alt={project.title} />
        <p>{project.content}</p>
      </div>
    </div>
  );
}

export default ProjectModal;
