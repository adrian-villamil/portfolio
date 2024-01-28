import { FaRegCalendarAlt } from "react-icons/fa";
import styles from './experience.module.css';

const experiences: Experience[] = [
  {
    id: 1,
    jobPosition: 'Frontend Developer',
    companyName: 'BitPointer SAS',
    period: 'February 2023 - December 2023',
    jobDescription: 'In charge of developing interfaces for web applications using technologies such as ReactJS and MaterialUI.'
  },
];

export const Experience = () => {
  return (
    <div id='experience' className={styles.experience}>
      <h1>Experience</h1>
      <section className={styles.list}>
        {experiences.map((experience) => (
          <div key={experience.id} className={styles.box}>
            <time className={styles.period}>
              <FaRegCalendarAlt />
              {experience.period}
            </time>
            <h3 className={styles['job-position']}>{experience.jobPosition}</h3>
            <p className={styles['company-name']}>{experience.companyName}</p>
            <p className={styles['job-description']}>{experience.jobDescription}</p>
          </div>
        ))}
      </section>
    </div>
  );
};