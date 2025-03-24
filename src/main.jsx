import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Headerone from './Components/Header-Components/Headerone';
import Login from './Components/Sign Up component/Login';
import NavBar from './Components/Header-Components/NavBar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer-Component/Footer';
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'
// import MyAccount from './Pages/MyAccount';
import MyAccount from './Components/MyAccount-Components/MyAccount'
import Billing from './Components/Billing-Details/Billing'
import Product from './Components/Product-component/Product'

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
        <Route path="/WishList" element={<WishList/>} />
        <Route path='/Cart'     element={<Cart/>} />
        <Route path='/MyAccount'     element={<MyAccount/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/Billing' element={<Billing/>} />

        


        </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
