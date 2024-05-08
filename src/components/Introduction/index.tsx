import portrait from '../../assets/images/portrait.png';
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import CVPDF from '../../assets/documents/RESUME - ADRIAN VILLAMIL.pdf';
import styles from './introduction.module.css';

const socials = [
  { id: 1, social: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/adrian-felipe-villamil-arias-260736222/' },
  { id: 2, social: 'GitHub', icon: <FaGithub />, link: 'https://github.com/adrian-villamil' },
];

export const Introduction = () => {
  return (
    <div id='home' className={styles.container}>
      <div className={styles['img-container']}>
        <img src={portrait} alt="my-portrait" />
        <div className={styles['img-circle']}></div>
      </div>
      <div className={styles['info-container']}>
        <h3>Hello There!</h3>
        <h1>I'm Adrian Villamil</h1>
        <h2>Frontend Developer</h2>
        <div className={styles['info-buttons']}>
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target='_blank'
            >
              {social.icon}
              <span>{social.social}</span>
            </a>
          ))}
          <a href={CVPDF} download>
            <FaFileDownload />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};