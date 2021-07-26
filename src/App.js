import logo from './logo.svg';
import './App.css';
import Navbar from './components/partial/Navbar';
import Header from './components/partial/header';
import Sidebar from './components/partial/sidebar';
import Main from './components/main';
import { Router } from 'react-router-dom';
import Register from './components/Register';
import Tweet from './components/Tweet';


function App() {
  return (
    <div className="App">
      

        <Navbar />
       

        <div className="row">
          <div className="col-lg-3">
            <Sidebar/>
          </div>
          <div className="col-lg-9">
              <Main/>
              
            </div>
        </div>
    </div>
  );
}

export default App;
