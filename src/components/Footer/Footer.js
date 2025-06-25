import styles from './Footer.module.css';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Lass uns zusammenarbeiten</h3>
      <p>Interessiert an einer Zusammenarbeit oder haben Sie Fragen zu meinen Projekten? Ich freue mich auf Ihre Nachricht!</p>
      <div className={styles.socialsWrapper}>
        <a
          href="https://github.com/Alexander238"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialsIcon}
        >
          <GitHubIcon className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-petersen-4120bb31a/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialsIcon}
        >
          <LinkedInIcon className={styles.icon} />
        </a>
        <a
          href="mailto:petersenalexander80@gmail.com"
          className={styles.socialsIcon}
        >
          <MailIcon className={styles.icon} />
        </a>
      </div>
      <div className={styles.footerEnd}>
        © 2025 Alexander Petersen
      </div>
    </footer>
  );
}

export default Footer;