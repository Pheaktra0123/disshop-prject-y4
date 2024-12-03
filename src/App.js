import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}>
                
            </Route>
            <Route  path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/> 
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
