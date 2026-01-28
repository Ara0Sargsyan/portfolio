import Container from "../../shared/ui/Container";
import styles from "./about.module.css";
import heroimg from "../../../public/hero.JPG";
import Section from "../../shared/ui/Section";

const About = () => {
  return (
    <Section variant="secondary">
      <Container className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <span className={styles.subtittle}>who i am</span>
            <span className={styles.subtittle}>what i do</span>
            <span className={styles.subtittle}>why i do</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img
              src={heroimg}
              className={styles.img}
              loading="lazy"
              alt="Ara Sargsyan - Frontend Developer"
            />
          </div>

          <div className={styles.info}>
            <div>
              <h3 className={styles.sectionTitle}>Who I Am</h3>
              <p>
                I am a dedicated Frontend Developer with over 3 years of
                professional experience. With a degree in Mechatronics and
                ongoing studies in Mechanical Engineering Architecture, I bring
                a unique engineering perspective to the digital world. My
                background allows me to solve complex technical challenges with
                a systematic and analytical mindset.
              </p>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>What I Do</h3>
              <p>
                I build high-performance, scalable web applications using React,
                Next.js, and TypeScript. I specialize in creating efficient
                architectures, such as UI component libraries (40+ components),
                and optimizing systems to handle massive datasets like the{" "}
                100,000+ records I managed for the mtad.am government platform.
                My toolkit includes Redux, Zustand, and GraphQL.
              </p>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Why I Do</h3>
              <p>
                I am driven by the goal of building software that is not only
                visually appealing but also structurally sound and maintainable.
                Having worked with international companies and cross-border
                teams, I enjoy the challenge of delivering high-quality
                solutions for global clients and constantly adapting to new,
                innovative technology stacks.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
