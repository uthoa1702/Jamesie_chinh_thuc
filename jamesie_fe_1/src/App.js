import './App.css';
import {Register} from "./component/login/Register";
import React from "react";
import {Login} from "./component/login/Login";
import {Route, Routes} from "react-router-dom";
import {HomeHeader} from "./component/home/header/HomeHeader";
import {Body} from "./component/home/body/Body";
import {ShoppingCart} from "./component/shopping-cart/ShoppingCart";
import {Product} from "./component/product/Product";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
  <>
            <HomeHeader/>



            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Body/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/shopping-cart' element={<ShoppingCart/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
      <ToastContainer      />

  </>
    );
}

export default App;
