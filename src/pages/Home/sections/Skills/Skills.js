import styles from './Skills.module.css';
import javaScriptIcon from '../../../../assets/skills/javascript.webp';
import htmlIcon from '../../../../assets/skills/html.png';
import cssIcon from '../../../../assets/skills/css.png';
import pythonIcon from '../../../../assets/skills/python.webp';
import gitIcon from '../../../../assets/skills/git.png';
import sqlIcon from '../../../../assets/skills/sql.png';
import javaIcon from '../../../../assets/skills/java.webp';
import cIcon from '../../../../assets/skills/c.png';
import csharpIcon from '../../../../assets/skills/cSharp.webp';
import cppIcon from '../../../../assets/skills/cPlusPlus.png';
import unityIcon from '../../../../assets/skills/unity.png';
import typeScriptIcon from '../../../../assets/skills/typescript.png';
import wordpressIcon from '../../../../assets/skills/wordpress.png';
import phpIcon from '../../../../assets/skills/php.png';
import dockerIcon from '../../../../assets/skills/docker.png';
import reactIcon from '../../../../assets/skills/react.png';
import gsapIcon from '../../../../assets/skills/gsap.png';
import springBootIcon from '../../../../assets/skills/springboot.png';
import firebaseIcon from '../../../../assets/skills/firebase.webp';


function Skills() {
    const skills = [
        { name: 'JavaScript', level: 'Umfassend', icon: javaScriptIcon },
        { name: 'TypeScript', level: 'Umfassend', icon: typeScriptIcon },
        { name: 'HTML', level: 'Umfassend', icon: htmlIcon },
        { name: 'CSS', level: 'Umfassend', icon: cssIcon },
        { name: 'Python', level: 'Umfassend', icon: pythonIcon },
        { name: 'Git', level: 'Umfassend', icon: gitIcon },
        { name: 'SQL', level: 'Umfassend', icon: sqlIcon },
        { name: 'Java', level: 'Umfassend', icon: javaIcon },
        { name: 'C', level: 'Erweitert', icon: cIcon },
        { name: 'C++', level: 'Erweitert', icon: cppIcon },
        { name: 'C#', level: 'Erweitert', icon: csharpIcon },
        { name: 'Unity', level: 'Erweitert', icon: unityIcon },
        { name: 'WordPress', level: 'Erweitert', icon: wordpressIcon },
        { name: 'PHP', level: 'Erweitert', icon: phpIcon },
        { name: 'Docker', level: 'Erweitert', icon: dockerIcon },
        { name: 'React', level: 'Grundlegend', icon: reactIcon },
        { name: 'GSAP', level: 'Grundlegend', icon: gsapIcon },
        { name: 'SpringBoot', level: 'Grundlegend', icon: springBootIcon },
        { name: 'Firebase', level: 'Grundlegend', icon: firebaseIcon },
    ];

    return (
        <section id="skills">
            <h2>Meine Skills</h2>
            <div className={styles.sectionContent}>
                <div className={styles.skillsHeadingWrapper}><h3 className={`${styles.skillsHeading}`}>Umfassend</h3><div className={styles.skillGradientHigh}></div></div>
                <div className={styles.hexagonContainerWrapper}>
                    <div className={styles.hexagonContainer}>
                        {skills.filter(s => s.level === 'Umfassend').map((skill, index) => (
                            <div key={`u-${index}`} data-level={skill.level}>
                                <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillsHeadingWrapper}><h3 className={`${styles.skillsHeading}`}>Erweitert</h3><div className={styles.skillGradientMedium}></div></div>
                <div className={styles.hexagonContainerWrapper}>
                    <div className={styles.hexagonContainer}>
                        {skills.filter(s => s.level === 'Erweitert').map((skill, index) => (
                            <div key={`f-${index}`} data-level={skill.level}>
                                <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillsHeadingWrapper}><h3 className={`${styles.skillsHeading}`}>Grundlegend</h3><div className={styles.skillGradientLow}></div></div>
                <div className={styles.hexagonContainerWrapper}>
                    <div className={styles.hexagonContainer}>
                        {skills.filter(s => s.level === 'Grundlegend').map((skill, index) => (
                            <div key={`a-${index}`} data-level={skill.level}>
                                <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
