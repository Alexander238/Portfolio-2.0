import styles from './Skills.module.css';

function Skills() {
    const skills = [
        { name: 'JavaScript', level: 'Umfassend' },
        { name: 'TypeScript', level: 'Umfassend' },
        { name: 'HTML', level: 'Umfassend' },
        { name: 'CSS', level: 'Umfassend' },
        { name: 'Python', level: 'Umfassend' },
        { name: 'Git', level: 'Umfassend' },
        { name: 'SQL', level: 'Umfassend' },
        { name: 'Java', level: 'Umfassend' },
        { name: 'C', level: 'Erweitert' },
        { name: 'C#', level: 'Erweitert' },
        { name: 'C++', level: 'Erweitert' },
        { name: 'Unity', level: 'Erweitert' },
        { name: 'WordPress', level: 'Erweitert' },
        { name: 'PHP', level: 'Erweitert' },
        { name: 'Docker', level: 'Erweitert' },
        { name: 'React', level: 'Grundlegend' },
        { name: 'GSAP', level: 'Grundlegend' },
        { name: 'SpringBoot', level: 'Grundlegend' },
    ];

    return (
        <section id="skills">
            <h1>Meine Skills</h1>
            <div className={styles.sectionContent}>
                <h2 className={`${styles.skillsHeading} ${styles.skillsHeadingHigh}`}>Umfassend</h2>
                <div className={styles.hexagonContainerWrapper}>
                    <div className={styles.hexagonContainer}>
                        {skills.filter(s => s.level === 'Umfassend').map((skill, index) => (
                            <div key={`u-${index}`} data-level={skill.level}>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className={`${styles.skillsHeading} ${styles.skillsHeadingMedium}`}>Erweitert</h2>
                <div className={styles.hexagonContainerWrapper}>
                    <div className={styles.hexagonContainer}>
                        {skills.filter(s => s.level === 'Erweitert').map((skill, index) => (
                            <div key={`f-${index}`} data-level={skill.level}>
                                <span className={styles.skillName}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className={`${styles.skillsHeading} ${styles.skillsHeadingLow}`}>Grundlegend</h2>
                <div className={styles.hexagonContainerWrapper}>
                    <div className={styles.hexagonContainer}>
                        {skills.filter(s => s.level === 'Grundlegend').map((skill, index) => (
                            <div key={`a-${index}`} data-level={skill.level}>
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
