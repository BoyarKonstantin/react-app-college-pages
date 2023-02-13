import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

function App() {
  return (
  <div>
    <Header/>

    <Footer/>
  </div>    
  );
}

export default App;
