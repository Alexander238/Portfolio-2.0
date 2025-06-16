import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Mein Portfolio</p>
        <p>Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
