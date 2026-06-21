import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/Homepage';
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/Aboutpage";
import Product from "./landing_page/products/ProductsPage";
import Pricing from './landing_page/pricing/PricingPage';
import Support from "./landing_page/supports/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";


//import react router dom
import {BrowserRouter, Route, Routes} from "react-router-dom" ;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
   </Routes>
   <Footer/>
  
  </BrowserRouter>
);

