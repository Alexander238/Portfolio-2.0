import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.heroSection} id="about">
      <h1> Über Mich </h1>
      <div className={styles.heroContainer}> 
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h2 className={styles.heroMessage}>Hey, ich bin Alex.</h2>
          <p className={styles.heroDescription}>
            Ich bin ein frischer Absolvent der Fachhochschule Kiel im Fachbereich
            Informatik. 
            <br></br>Diese Seite soll Einblick in einige meiner bisherigen und aktuellen
            Projekte geben und meine Fähigkeiten als Entwickler demonstrieren.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
