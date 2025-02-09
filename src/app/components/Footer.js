'use client';

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={contactStyle}>
                <h3>Get in touch</h3>

                <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Name" required style={inputStyle} />
                    <input type="email" placeholder="E-mail" required style={inputStyle} />
                    <textarea placeholder="Your message" required style={textareaStyle}></textarea>
                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
            </div>
        </footer>
    );
}

const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#191621',
    color: '#fff',
    padding: '40px 20px',
    flexWrap: 'wrap',
    gap: '2rem',
    marginTop: 'auto',
    textAlign: 'center',
};

const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '400px',
    width: '100%',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};

const inputStyle = {
    padding: '10px',
    border: '1px solid #444',
    borderRadius: '5px',
    backgroundColor: '#25232e',
    color: '#fff',
    outline: 'none',
};

const textareaStyle = {
    ...inputStyle,
    height: '100px',
    resize: 'vertical',
};

const buttonStyle = {
    padding: '10px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
};
