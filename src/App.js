import logo from './logo.svg';
import Pokedeck from './Pokedeck';

function App() {
  const myName = "Pikachu";

  // The following return () is JSX code work.
  // Anything before return () is non-JSX; it is regular JS
  return (
    <div className="App">
      <Pokedeck/>
      <header className="App-header">
        { myName }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edits <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
