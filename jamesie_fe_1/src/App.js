import './App.css';
import {Register} from "./component/login/Register";
import React from "react";
import {Login} from "./component/login/Login";
import {Route, Routes} from "react-router-dom";
import {HomeHeader} from "./component/home/header/HomeHeader";
import {Body} from "./component/home/body/Body";
import {ShoppingCart} from "./component/shopping-cart/ShoppingCart";
import {Detail} from "./component/detail/Detail";
import {Product} from "./component/product/Product";

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
        </>
    );
}

export default App;
