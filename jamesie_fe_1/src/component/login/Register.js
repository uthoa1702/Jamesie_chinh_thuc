import '../login/css/style.css'
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import * as yup from 'yup'


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
    const [submitting , setSubmitting] = useState(true)
    useEffect(()=>{
        const token = localStorage.getItem("token")
        document.title = "Register"
        if (token){
            navigate("/")
        }
    },[])
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
                    }} validationSchema={yup.object({
                        name: yup.string().required("This is required"),
                        mail: yup.string().required("This is required"),
                        username: yup.string().required("This is required"),
                        country: yup.string().required("This is required"),
                        address: yup.string().required("This is required"),
                        phone: yup.number().required("This is required"),
                        password: yup.string().required("This is required"),
                        confirmPassword: yup.string().required("This is required"),
                    })}
                            onSubmit={(values) => {
                                setSubmitting(false)

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
                                setSubmitting(true)
                            }

                        }
                        res()
                    }}>


                        <Form action="" style={{width: '100%'}}>
                            <h3>Registration</h3>
                            <div className="form-wrapper">
                                <ErrorMessage name="name"  component="span"/>
                                <Field name='name' type="text" placeholder="Full Name" className="form-control"/>


                            </div>
                            <div className="form-wrapper">
                                <ErrorMessage name="username"  component="span"/>
                                <Field name='username' type="text" placeholder="Username" className="form-control"/>
                                <i className="zmdi zmdi-account"/>
                            </div>
                            <div className="form-wrapper">
                                <ErrorMessage name="mail"  component="span"/>
                                <Field
                                    name='mail'
                                    type="text"
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                                <i className="zmdi zmdi-email"/>
                            </div>
                            <ErrorMessage name="birthday"  component="span"/>
                            <ErrorMessage name="phone"  component="span"/>
                            <div className="form-group">

                                <Field name='phone' type="text" placeholder="Phone" className="form-control"/>

                                <Field name='birthday' type="date" placeholder="Birthday " className="form-control"/>

                            </div>
                            <ErrorMessage name="address"  component="span"/>
                            <div className="form-group">

                                <Field name='country' type="text" placeholder="Country" className="form-control"/>

                                <Field name='address' type="text" placeholder="Address" className="form-control"/>

                            </div>

                            <ErrorMessage name="confirmPassword"  component="span"/>
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
                            {
                                submitting === true ? <div style={{justifyContent: 'center', display: 'flex'}}>
                                    <button type={"submit"} className='btn btn-dark'>
                                        Register
                                    </button>
                                </div> : ''
                            }

                        </Form>
                    </Formik>
                </div>
            </div>

        </>

    )
}