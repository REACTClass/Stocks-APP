import './App.css';
// import {Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Data from './Data'

function App() {
  // const stockList = Data.map(item => {
  //   return (
  //     <Dashboard
  //     key={item.name}
  //     item={item}
  //     />
  //   )
  // })
  return (
    <div className="App">
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p>
            Learn React
        </p>

        <Navbar />
        {/* <section>
          {stockList}
        </section> */}
        
    </div>
  );
}

export default App;
