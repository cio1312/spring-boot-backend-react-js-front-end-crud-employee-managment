import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.jsx';
import Addemployee from './components/Addemployee.jsx';
import EditEmp from './components/EditEmp.jsx';
import { Routes, Route } from 'react-router-dom';

// css and JS links for bootstrap mentioned in index file
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Addemployee />}></Route>
        <Route path='/editemployee/:id' element={<EditEmp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
