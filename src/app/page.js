import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Simple Tools</h1>
          
          <p>Explore a variety of tools designed to simplify your work.</p>
          <Link href="#" className={styles.ctaButton}>
            Explore Tools
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Our Tools</h2>

        <ul className={styles.toolsList}>
          <li>
            <Link href="#" className={styles.toolCard}>
              <h3>Tool ...</h3>
              <p>Simple tool to help with ...</p>
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.toolCard}>
              <h3>Tool ...</h3>
              <p>Easy to use tool for ...</p>
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.toolCard}>
              <h3>Tool ...</h3>
              <p>Get things done quickly with ...</p>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
