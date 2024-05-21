import { SiTailwindcss } from "react-icons/si";
import styles from './pill.module.css';

export const TailwindCssPill = () => {
  return (
    <span className={styles.container}>
      <SiTailwindcss />
      TailwindCSS
    </span>
  );
};
