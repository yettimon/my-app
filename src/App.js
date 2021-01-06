import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <p>Test 1st react-based SPA</p>
        <User></User>
    </div>
    </div>
  );
}

export default App;
