import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>This app creates two modal windows:</h2>
        <p>1. login window (when clicking Learn React button)</p>
        <p>2. tooltip window (when hovering over Learn React button)</p>
        <a
          className="App-link"
          style={{ borderRadius: "1rem", background:'plum', padding: '2rem' }}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
