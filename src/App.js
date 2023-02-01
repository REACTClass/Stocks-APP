import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p>
            Learn React
        </p>

        <Navbar />
    </div>
  );
}

export default App;
