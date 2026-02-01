import { useState } from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope, FaCheck } from "react-icons/fa";
import Card from '../../shared/ui/Card';
import Container from '../../shared/ui/Container';

const contactData = [
  {
    id: 1,
    type: 'email', // Փոխվեց email-ի
    label: "Email",
    value: "sargsyanara567@gmail.com",
    link: "mailto:sargsyanara567@gmail.com", // mailto: հղումը
    icon: <FaRegEnvelope className={styles.icon} />,
  },
  {
    id: 2,
    type: 'link',
    label: "LinkedIn",
    value: "linkedin.com/in/Ara-Sargsyan",
    link: "https://linkedin.com/in/ara-sargsyan-888118229/", 
    icon: <FaLinkedinIn className={styles.icon} />,
  },
  {
    id: 3,
    type: 'link',
    label: "GitHub",
    value: "github.com/Ara0Sargsyan",
    link: "https://github.com/Ara0Sargsyan", 
    icon: <FaGithub className={styles.icon} />,
  },
  {
    id: 4,
    type: 'tel', // Փոխվեց tel-ի
    label: "Phone",
    value: "+374 99 17 12 04",
    link: "tel:+37499171204", // tel: հղումը
    icon: <FaPhoneAlt className={styles.icon} />,
  },
];

const Contacts = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleAction = (item) => {
   if (item.type === 'email') {
      navigator.clipboard.writeText(item.value);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <Container className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>Let's build something amazing together</p>
      </div>

      <div className={styles.grid}>
        {contactData.map((item) => {
          const isExternal = item.type === 'link';

          const Content = (
            <Card hover={true} className={`${styles.contactCard} ${!isExternal ? styles.copyCard : ''}`}>
              <div className={styles.iconBox}>
                {copiedId === item.id ? <FaCheck className={styles.checkIcon} /> : item.icon}
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>
                  {copiedId === item.id ? 'Copied!' : item.value}
                </span>
              </div>
            </Card>
          );

          if (isExternal) {
            return (
              <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className={styles.link}>
                {Content}
              </a>
            );
          }

          // Եթե հեռախոս է կամ մեյլ (և՛ զանգում/բացում է, և՛ պատճենում)
          return (
            <a 
              key={item.id} 
              href={item.link} 
              className={styles.link} 
              onClick={() => handleAction(item)}
              style={{ cursor: 'pointer' }}
            >
              {Content}
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default Contacts;