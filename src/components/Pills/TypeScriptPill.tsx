import { SiTypescript } from "react-icons/si";
import styles from './pill.module.css';

export const TypeScriptPill = () => {
  return (
    <span className={styles.container}>
      <SiTypescript />
      TypeScript
    </span>
  );
};