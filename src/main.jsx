import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Headerone from './Components/Header-Components/Headerone';
import Login from './Components/Sign Up component/Login'
import NavBar from './Components/Header-Components/NavBar';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer-Component/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Headerone/>
        <NavBar/>
        <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />


        </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
