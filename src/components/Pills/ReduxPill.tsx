import { SiRedux } from "react-icons/si";
import styles from './pill.module.css';

export const ReduxPill = () => {
  return (
    <span className={styles.container}>
      <SiRedux />
      Redux
    </span>
  );
};