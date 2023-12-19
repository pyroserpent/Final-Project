import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay/QuoteDisplay';
import QuoteForm from './components/QuoteForm/QuoteForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Vite and React logos */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Main Title */}
      <h1>Vite + React</h1>

      {/* Counter Card */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Additional Info */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Quote Display and Form Components */}
      <QuoteDisplay />
      <QuoteForm />
    </>
  );
}

export default App;
