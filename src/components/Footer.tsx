import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Designed &amp; Built by{' '}
        <strong className={styles.name}>Haris Laeeq</strong>{' '}
        · Full-Stack Developer · Islamabad, Pakistan
      </p>
    </footer>
  );
}
