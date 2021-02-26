import logo from "./logo.svg";
import splash from "./splash.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name">cody smith</h1>
        <img src={splash} className="App-logo" alt="logo" />
        <h2 className="name small">web developer / musician</h2>
        <h3 className="name small">portfolio coming soon</h3>
      </header>
    </div>
  );
}

export default App;
