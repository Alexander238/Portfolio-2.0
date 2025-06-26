import styles from './Hero.module.css';
import profilePicture from '../../../../assets/images/profilePicture.jpg';

function Hero() {
  return (
    <section className={styles.heroSection} id="about">
      {/* Background decorative elements */}
      <div className={styles.backgroundDecorations}>
        {/* Diagonal lines */}
        <div className={styles.diagonalLines}>
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
          <div className={`${styles.line} ${styles.line4}`}></div>
          <div className={`${styles.line} ${styles.line5}`}></div>
          <div className={`${styles.line} ${styles.line6}`}></div>
          <div className={`${styles.line} ${styles.line7}`}></div>
          <div className={`${styles.line} ${styles.line8}`}></div>
        </div>
      </div>

      <h1>Über Mich</h1>
      <div className={styles.heroContainer}>
        <img
          src={profilePicture || "/placeholder.svg"}
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h2 className={styles.heroMessage}>Hey, ich bin Alex.</h2>
          <p className={styles.heroDescription}>
            Ich bin ein frischer Absolvent der Fachhochschule Kiel im Fachbereich Informatik.
          </p>
          <p>
            Diese Seite soll Einblick in einige meiner bisherigen und aktuellen Projekte geben und meine Fähigkeiten als Entwickler demonstrieren.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;