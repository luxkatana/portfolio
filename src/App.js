import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Home from './pages/Home';
import Projects from "./pages/Projects.js";
import Footer from './components/Footer';
import Navbar  from './components/Navbar';

function App() {
  return <>
  <div className="App">
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>


    </Router>

    <Footer/>

  </div>
  </>
}

export default App;
