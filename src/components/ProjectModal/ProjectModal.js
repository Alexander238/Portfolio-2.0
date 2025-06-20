import { useEffect, useState } from 'react';
import styles from './ProjectModal.module.css';
import React from 'react';

function ProjectModal({ project, onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = '';
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && !event.repeat) {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, onClose]);

  return (
    <>
      <div className={`modal ${styles.backdrop}`} onClick={onClose}>
        <div className={styles.modalOuter}>

          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>×</button>
            <h1>{project.title}</h1>

            <p>{project.content}</p>
            {project.roles.length > 0 && (
              <>
                <h2>Rollen</h2>
                <ul className={styles.roles}>
                  {project.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </>
            )}

            <h2>Technologiestack</h2>
            <div className={styles.stack}>
              {project.stack.map((tech, techIndex) => (
                <span key={techIndex} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>

            {project.details && (
              <>
                <h2>Details</h2>
                <p>
                  {project.details.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

              </>
            )}

            {project.bonusImages.length > 0 && (
              <>
                <h2>Weitere Bilder</h2>
                <div className={styles.imageGallery}>
                  {project.bonusImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Bonus ${index + 1}`}
                      onClick={() => setZoomedImage(image)}
                      style={{ cursor: 'zoom-in' }}
                    />
                  ))}
                </div>
              </>
            )}

            {project.bonusVideos.length > 0 && (
              <>
                <h2>Bonus-Videos</h2>
                <div className={styles.videoGallery}>
                  {project.bonusVideos.map((video, index) => (
                    <video key={index} controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {zoomedImage && (
          <div
            className={styles.backdrop}
            onClick={() => setZoomedImage(null)}
            style={{ zIndex: 1100 }}
          >
            <button className={styles.zoomedImageCloseButton} onClick={onClose}>×</button>

            <img
              src={zoomedImage}
              alt="Zoom"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-small)',
                boxShadow: '0 0 12px black'
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectModal;
