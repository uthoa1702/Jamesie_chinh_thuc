import '../login/css/style.css'
import React, {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import * as loginService from '../service/LoginService.js'
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {getAllCart} from "../../redux/actions/cart";
import {useDispatch} from "react-redux";
import {Link, NavLink} from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (token){
            navigate("/")
        }
    },[])
    return (
        <>
            <div
                className="wrapper bg "

            >
                <div className="inner" style={{width: "100%", height: "550px"}}>
                    <div className="image-holder bgholder" style={{backgroundRepeat: 'no-repeat', width: '100%'}}>

                    </div>
                    <Formik initialValues={{
                        username: '',
                        password: ''

                    }} onSubmit={(values) => {
                        const res = async () => {
                            try {
                                const r = await loginService.login(values)
                                if (r.data.token) {

                                    await localStorage.setItem('token', r.data.token)
                                    await localStorage.setItem('username', r.data.username)
                                    await localStorage.setItem('role', r.data.role)
                                    // const timeout = 10000; // 30 minutes in milliseconds

                                    // Xóa token sau khi thời gian chờ đã trôi qua
                                    // const timeoutId = setTimeout(() => {
                                    //     localStorage.removeItem('token');
                                    //     console.log('Token has been removed from local storage.');
                                    // }, timeout);
                                    // timeoutId();


                                    await navigate("/")
                                    await window.location.reload()
                                    await dispatch(getAllCart())


                                }
                                toast.success("Login successfully")


                            } catch (e) {
                                toast.error("Wrong password or username")
                                console.log(e)
                            }
                        }
                        res()
                    }}>
                        <Form action="" style={{width: '100%', height: '500px', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: "100%"}}>
                                <h3>Login</h3>

                                <div className="form-wrapper">
                                    <Field name="username" type="text" placeholder="Username" className="form-control"/>
                                    <i className="zmdi zmdi-account"/>
                                </div>


                                <div className="form-wrapper">
                                    <Field name="password"
                                           type="password"
                                           placeholder="Password"
                                           className="form-control"
                                    />
                                    <i className="zmdi zmdi-lock"/>
                                </div>


                                <div style={{justifyContent: 'center', display: 'flex'}}>
                                    <button type="submit" className='btn btn-dark '>
                                        Login
                                    </button>
                                </div>
                                {/*<div style={{justifyContent: 'center', display: 'flex'}} className="mt-1">*/}

                                {/*    <button onClick={() => navigate("/register")} className='btn btn-outline-dark'>*/}
                                {/*        Register*/}
                                {/*    </button>*/}

                                {/*</div>*/}

                                <div className="row mt-lg-5"  >
                                    <small>
                                        Don't have an account? <NavLink to='/register'>Sign Up</NavLink>
                                    </small>
                                </div>
                            </div>
                        </Form>

                    </Formik>
                </div>
            </div>
        </>

    )
}