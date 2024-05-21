import { SiPrisma } from "react-icons/si";
import styles from './pill.module.css';

export const PrismaPill = () => {
  return (
    <span className={styles.container}>
      <SiPrisma />
      Prisma
    </span>
  );
};
