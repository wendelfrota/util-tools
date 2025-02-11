import styles from '../page.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <h1>Tools</h1>
            </Link>
            <nav>
                <ul className={styles.navbar}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/wendel-frota-11649b279" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/wendelfrota" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
