import "./App.css";
import HomePage from "./components/HomePage";
import logo from "./logo.svg";

function App() {
  const handleButtonClick = (buttonNum: number) =>
    alert("button number clicked:" + buttonNum);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HomePage personName="Kaoru" />
        <HomePage
          personName="John"
          secondPersonName="Doe"
          onButtonClick={handleButtonClick}
        />
      </header>
    </div>
  );
}

export default App;
