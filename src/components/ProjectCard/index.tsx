import { FaGithub } from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";
import { Fragment } from "react";
import styles from './projectcard.module.css';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.container}>
      <img src={project.image} alt={project.name} />
      <div className={styles.info}>
        <h3 className={styles['project-name']}>{project.name}</h3>
        <p className={styles['project-description']}>{project.description}</p>
        <div className={styles.list}>
          {project.pills.map((pill, index) => (
            <Fragment key={index}>
              {pill}
            </Fragment>
          ))}
        </div>
        <div className={styles['links-container']}>
          <a
            href={project.codeUrl}
            target="_blank"
            className={styles.link}
          >
            <FaGithub />
            Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            className={styles.link}
          >
            <BsFillRocketFill />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};