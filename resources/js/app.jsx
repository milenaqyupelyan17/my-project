import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <main style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '700px',
            margin: '60px auto',
            padding: '24px',
            textAlign: 'center'
        }}>
            <h1>My First React App</h1>
            <p>React-ը հաջողությամբ միացված է Laravel-ին։</p>

            <h2>Count: {count}</h2>

            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: '12px 24px',
                    background: '#e3342f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
            >
                Click Me
            </button>
        </main>
    );
}

const rootElement = document.getElementById('react-root');

if (rootElement) {
    createRoot(rootElement).render(<App />);
}
