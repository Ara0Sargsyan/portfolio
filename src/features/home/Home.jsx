import Container from '../../shared/ui/Container';
import styles from './Home.module.css';
import Button from '../../shared/UI/Button';
import Section from '../../shared/UI/Section';
import Card from '../../shared/UI/Card';

const Home = () => {
  return (
    <>
      <Section variant="primary" background="gradient">
        <Container size="tight">
          <div className={styles.hero}>
            <div className={styles.heroBadge}>
              <span className={styles.badge}>👋 Hwllo, I'm</span>
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.gradientText}>Frontend developer</span>
            </h1>
            <p className={styles.heroSubtitle}>
              I create modern, fast, and user-friendly web applications.
            </p>
            <div className={styles.heroButtons}>
              <Button size="large" variant="primary">
                🚀 Watch projects 
              </Button>
              <Button size="large" variant="secondary">
                📧 Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.skillsGrid}>
            <Card hover className={styles.skillCard}>
              <div className={styles.skillIcon}>⚡</div>
              <h3>Կատարողականություն</h3>
              <p>Optimized and fast loading applications</p>
            </Card>
            <Card hover className={styles.skillCard}>
              <div className={styles.skillIcon}>🎨</div>
              <h3>Դիզայն</h3>
              <p>Modern UI/UX with attention to details</p>
            </Card>
            <Card hover className={styles.skillCard}>
              <div className={styles.skillIcon}>🔧</div>
              <h3>Թեխնոլոգիաներ</h3>
              <p>React, TypeScript, Next.js, Tailwind</p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Home;