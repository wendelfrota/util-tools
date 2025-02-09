import styles from '../page.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <h2>Get in touch</h2>

                <form className={styles.form}>
                    <input type="text" placeholder="Name" required className={styles.input} />
                    <input type="email" placeholder="E-mail" required className={styles.input} />
                    <textarea placeholder="Your message" required className={styles.textarea}></textarea>
                    <button type="submit" className={styles.button}>Submit</button>
                </form>
            </div>
        </footer>
    );
}
