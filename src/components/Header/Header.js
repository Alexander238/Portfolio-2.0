import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projekte</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    </header>
  );
}

export default Header;
