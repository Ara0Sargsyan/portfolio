import Container from "../../shared/ui/Container";
import styles from "./Home.module.css";
import Section from "../../shared/UI/Section";
import { useSelector } from "react-redux";
import heroImg from "/hero1.jpg";
import Card from "../../shared/ui/Card";

const Home = () => {
  const skills = useSelector((state) => state.skills);
  const experience = useSelector((state) => state.experience);

  return (
    <>
      <Section>
        <Container className={styles.mainInfoContainer}>
          <div className={styles.hero}>
            <span className={styles.badge}>Hello, I'm Ara</span>
            <h1 className={styles.sectionTitle}>Frontend developer</h1>
            <p className={styles.heroSubtitle}>
              I create modern, fast, and user-friendly web applications.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.homeImg} src={heroImg} alt="" />
          </div>
        </Container>
      </Section>

      <Section variant="secondary">
        <Container className={styles.mainAbout}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.aboutSection}>
            {experience.map((experience) => (
              <Card key={experience.name} className={styles.aboutCard}>
                <h2 className={styles.minimalTitle}> {experience.name}</h2>

                <div className={styles.minimalExperience}>
                  {experience.experienceItems.map((item) => (
                    <div key={item.name} className={styles.experienceBlock}>
                      <div className={styles.experienceHeader}>
                        <div className={styles.experienceIcon}>
                          <img src={experience.icone} loading="lazy" alt="University" />
                        </div>
                        <div>
                          <h3>{item.name}</h3>
                          <p className={styles.experiencePeriod}>{item.date}</p>
                        </div>
                      </div>
                      <p className={styles.experienceDescription}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="secondary">
        <Container className={styles.skillsContainer}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <Card key={skill.name} hover className={styles.skillCard}>
                <h3>{skill.name}</h3>

                <div className={styles.skillGroup}>
                  {skill.skillsGroupe.map((skillType) => (
                    <span key={skillType} className={styles.skill}>
                      {skillType}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;
