import logo from "./lotus.png";
import "./App.css";
import Navbar from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Waterlilyrr</p>
      </header>
    </div>
  );
}

export default App;
