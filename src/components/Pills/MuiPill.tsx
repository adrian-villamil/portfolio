import { SiMui } from "react-icons/si";
import styles from './pill.module.css';

export const MuiPill = () => {
  return (
    <div className={styles.container}>
      <SiMui />
      <span>MaterialUI</span>
    </div>
  );
};