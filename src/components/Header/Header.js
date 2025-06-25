import { useEffect, useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <h1>Alex</h1>
      <nav>
        <a href="#about" className={activeId === 'about' ? styles.active : ''}>Über mich</a>
        <a href="#projects" className={activeId === 'projects' ? styles.active : ''}>Projekte</a>
        <a href="#skills" className={activeId === 'skills' ? styles.active : ''}>Skills</a>
      </nav>
    </header>
  );
}

export default Header;
