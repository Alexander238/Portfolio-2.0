import Spacer from '../../components/Spacer/Spacer';
import Hero from './sections/Hero/Hero';
import ProjectsCard from './sections/ProjectsCard/ProjectsCard';
import Skills from './sections/Skills/Skills';

function Home() {
  return (
    <>
      <Hero />
      <ProjectsCard />
      <Skills />
      <Spacer />
    </>
  );
}

export default Home;