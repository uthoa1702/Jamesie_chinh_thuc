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
import {Footer} from "./component/home/footer/Footer";
import {Blog} from "./component/blog/Blog";
import Provider from "react-redux/es/components/Provider";
import store from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>


                <HomeHeader/>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={<Body/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/shopping-cart' element={<ShoppingCart/>}/>
                    <Route path='/product' element={<Product/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                </Routes>
                <Footer/>
                <ToastContainer/>
            </Provider>

        </>
    );
}

export default App;
