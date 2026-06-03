import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Students from './components/Students.js';
import AddStudent from './components/AddStudent.js';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/findAll" element={<Students/>}/>
          <Route path="/addStudent" element={<AddStudent/>}/>
      </Routes>
    </Router>
    <Footer/>

    </>
  );
}

export default App;
