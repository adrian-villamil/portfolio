import { SiShadcnui } from "react-icons/si";
import styles from './pill.module.css';

export const ShadcnuiPill = () => {
  return (
    <div className={styles.container}>
      <SiShadcnui />
      <span>shadcn/ui</span>
    </div>
  );
};