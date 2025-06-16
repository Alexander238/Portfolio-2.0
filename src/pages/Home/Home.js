import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import ProjectsPreview from '../../components/ProjectsPreview/ProjectsPreview';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Hero />
      <ProjectsPreview />
      <Footer />
    </div>
  );
}

export default Home;