import React from "react";
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login/login";
import { Home } from "./Home/home";
import { About } from "./About/about";
import { CartProvider } from "react-use-cart";
import { Detail } from "./screencomponentes/detail";
import { Cart } from "./screencomponentes/cart";

function Bwipl(){
  return(
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/detail/:productId" element={<Detail/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}
export{Bwipl}