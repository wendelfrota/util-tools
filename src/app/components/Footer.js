export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div>
                <p>© {new Date().getFullYear()} Util Tools</p>
                <p>
                    <a href="https://www.linkedin.com/in/wendel-frota-11649b279" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="https://github.com/wendelfrota" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: '#191621',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto',
};
