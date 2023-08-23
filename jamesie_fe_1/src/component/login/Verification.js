import '../login/css/style.css'
import React, {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import * as loginService from '../service/LoginService.js'
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {getAllCart} from "../../redux/actions/cart";
import {useDispatch} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";


export const Verification = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = localStorage.getItem("token")
        document.title = "Verification"
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
                        confirmationCode: ''


                    }} onSubmit={(values) => {
                        const res = async () => {
                            try {
                                const r = await axios.post("http://localhost:8080/customer/Verification?confirmationCode=" + values.confirmationCode)
                                toast.success(r.data)
                                navigate("/login")
                            }catch (e) {
                                toast.success(e.response.data)
                            }
                        }
                        res()
                    }}>
                        <Form action="" style={{width: '100%', height: '500px', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: "100%"}}>
                                <h3>Verification</h3>

                                {/*<div className="form-wrapper">*/}
                                {/*    <Field name="username" type="text" placeholder="Username" className="form-control"/>*/}
                                {/*    <i className="zmdi zmdi-account"/>*/}
                                {/*</div>*/}


                                <div className="form-wrapper">
                                    <Field name="confirmationCode"

                                           placeholder="code"
                                           className="form-control"
                                    />
                                    <i className="zmdi zmdi-lock"/>
                                </div>


                                <div style={{justifyContent: 'center', display: 'flex'}}>
                                    <button type="submit" className='btn btn-dark '>
                                        Submit
                                    </button>
                                </div>
                                {/*<div style={{justifyContent: 'center', display: 'flex'}} className="mt-1">*/}

                                {/*    <button onClick={() => navigate("/register")} className='btn btn-outline-dark'>*/}
                                {/*        Register*/}
                                {/*    </button>*/}

                                {/*</div>*/}

                                {/*<div className="row mt-lg-5"  >*/}
                                {/*    <small>*/}
                                {/*        Don't have an account? <NavLink to='/register'>Sign Up</NavLink>*/}
                                {/*    </small>*/}
                                {/*</div>*/}
                            </div>
                        </Form>

                    </Formik>
                </div>
            </div>
        </>

    )
}