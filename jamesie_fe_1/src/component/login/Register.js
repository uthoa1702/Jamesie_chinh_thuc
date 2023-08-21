import '../login/css/style.css'
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";


export const Register = () => {
    // const [password1, setPassword1] = useState("");
    // const [matchError, setMatchError] = useState(false);
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const passwordInputHandler = (val) => {
    //     setConfirmPassword(val);
    //     setMatchError(val !== password1); // Kiểm tra nếu password1 và confirmPassword không khớp
    // };
    // useEffect(() => {
    //     passwordInputHandler(confirmPassword)
    // }, [password1])
    const navigate = useNavigate();
    return (

        <>
            <div
                className="wrapper bg"

            >
                <div className="inner" style={{width: '100%'}}>
                    <div className="image-holder bgholder" style={{width: '100%'}}>

                    </div>
                    <Formik initialValues={{
                        name: '',
                        mail: '',
                        username: '',
                        country: '',
                        birthday: '',
                        address: '',
                        phone: '',
                        confirmPassword: '',
                        password: ''
                    }} onSubmit={(values) => {
                        values = {
                            ...values,
                            accounts: {
                                name: values.username,
                                password: values.password
                            }
                        }
                        const res = async () => {
                            try {
                                const r = await axios.post("http://localhost:8080/customer/createCustomer?password=" + values.password + "&confirmPassword=" + values.confirmPassword, values)
                                toast.success("Please check your mail to get code")
                                await navigate("/verification")
                            }catch (e) {
                                toast.error(e.response.data)
                            }

                        }
                        res()
                    }}>


                        <Form action="" style={{width: '100%'}}>
                            <h3>Registration</h3>
                            <div className="form-wrapper">
                                <Field name='name' type="text" placeholder="Full Name" className="form-control"/>

                            </div>
                            <div className="form-wrapper">
                                <Field name='username' type="text" placeholder="Username" className="form-control"/>
                                <i className="zmdi zmdi-account"/>
                            </div>
                            <div className="form-wrapper">
                                <Field
                                    name='mail'
                                    type="text"
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                                <i className="zmdi zmdi-email"/>
                            </div>
                            <div className="form-group">
                                <Field name='phone' type="text" placeholder="Phone" className="form-control"/>
                                <Field name='birthday' type="date" placeholder="Birthday " className="form-control"/>

                            </div>
                            <div className="form-group">
                                <Field name='country' type="text" placeholder="Country" className="form-control"/>
                                <Field name='address' type="text" placeholder="Address" className="form-control"/>

                            </div>

                            <div className="form-group">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    // onChange={(e) => setPassword1(e.target.value)}
                                />
                                <Field
                                    name="confirmPassword"
                                    // onChange={(v) => passwordInputHandler(v.target.value)}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-wrapper mb-0">

                            </div>
                            {/*{matchError &&*/}
                            {/*<small className='row align-content-end justify-content-end mb-2' style={{color: 'red'}}>Password*/}
                            {/*    incorrect!</small>}*/}
                            <div style={{justifyContent: 'center', display: 'flex'}}>
                                <button type={"submit"} className='btn btn-dark'>
                                    Register
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

        </>

    )
}