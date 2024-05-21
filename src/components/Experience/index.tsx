import { FaRegCalendarAlt } from "react-icons/fa";
import styles from './experience.module.css';

const experiences: Experience[] = [
  {
    id: 1,
    jobPosition: 'Frontend Developer',
    companyName: 'Ingecinco LTDA',
    dates: 'July 2021 - September 2022',
    jobDescription: 'Development of a frontend-oriented web application with ReactJS as a framework.'
  },
  {
    id: 2,
    jobPosition: 'Frontend Developer',
    companyName: 'BitPointer SAS',
    dates: 'February 2023 - January 2024',
    jobDescription: `
      In charge of creating web interfaces with ReactJS and MaterialUI for the online procedures portal, and general
      control of requests and environmental requirements in the meta department.
    `
  },
];

export const Experience = () => {
  return (
    <div id='experience' className={styles.container}>
      <h1 className="section-title">Experience</h1>
      <section className={styles.list}>
        {experiences.map((experience) => (
          <div key={experience.id} className={styles.box}>
            <time className={styles.dates}>
              <FaRegCalendarAlt />
              {experience.dates}
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