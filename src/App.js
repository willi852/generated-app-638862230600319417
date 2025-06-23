const { useState } = React;

function App() {
    const [message, setMessage] = useState('¡Hola! Esta es tu aplicación generada.');

    return (
        <div className="app">
            <header className="app-header">
                <h1>Aplicación Generada</h1>
                <p>{message}</p>
                <button onClick={() => setMessage('¡Funciona perfectamente!')}>
                    Probar
                </button>
            </header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));