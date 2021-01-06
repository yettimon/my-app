import logo from './logo.svg';
import './App.css';
import User from './components/User/User';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <p>Test 1st react-based SPA</p>
        <User></User>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
