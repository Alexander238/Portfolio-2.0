import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mein Portfolio</p>
      <p>Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;
