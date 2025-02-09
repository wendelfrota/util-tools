import Link from 'next/link';

export default function Header() {
    return (
        <header style={headerStyle}>
            <Link href="/">
                <h1>Tools</h1>
            </Link>
            <nav>
                <ul style={navStyle}>
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

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#191621',
    color: 'white',
    padding: '.5rem 2rem',
};

const navStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
};

