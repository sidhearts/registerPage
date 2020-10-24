import logo from './logo.svg';
import './App.css';
import Tick from './images/tick.png'

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <img className="img-fluid" src={Tick} />
        <h1 style={{color: "gray"}}>Thanks for registering!</h1>
      </div>
    </div>
  );
}

export default App;
