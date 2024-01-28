import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        {'created by '}
        <a href="https://github.com/adrian-villamil" target='_blank'>
          adrian-villamil
        </a>
      </p>
    </footer>
  );
};