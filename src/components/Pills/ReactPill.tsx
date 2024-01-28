import { FaReact } from "react-icons/fa";
import styles from './pill.module.css';

export const ReactPill = () => {
  return (
    <span className={styles.container}>
      <FaReact />
      ReactJS
    </span>
  );
};