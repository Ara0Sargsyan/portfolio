import { useState } from 'react';
import Container from "../../shared/ui/Container";
import styles from './Contact.module.css';
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope, FaCheck } from "react-icons/fa";
import Card from '../../shared/ui/Card';

const contactData = [
  {
    id: 1,
    type: 'copy',
    label: "Email",
    value: "sargsyanara567@gmail.com",
    link: "",
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
    type: 'copy',
    label: "Phone",
    value: "+374 99 17 12 04",
    link: "",
    icon: <FaPhoneAlt className={styles.icon} />,
  },
];

const Contacts = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleAction = (item) => {
    if (item.type === 'copy') {
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
          const isCopy = item.type === 'copy';
          const Content = (
            <Card hover={true} className={`${styles.contactCard} ${isCopy ? styles.copyCard : ''}`}>
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

          return isCopy ? (
            <div key={item.id} onClick={() => handleAction(item)} className={styles.actionWrapper}>
              {Content}
            </div>
          ) : (
            <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className={styles.link}>
              {Content}
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default Contacts;