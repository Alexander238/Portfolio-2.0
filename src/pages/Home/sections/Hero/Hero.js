import styles from './Hero.module.css';
import profilePicture from '../../../../assets/images/profilePicture.jpg';

function Hero() {
  return (
    <section className={styles.heroSection} id="about">
      <h1>Über Mich</h1>
      <div className={styles.heroContainer}>
        <img
          src={profilePicture}
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
