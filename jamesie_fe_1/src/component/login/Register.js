
import '../login/css/style.css'
import React from "react";


export const Register = () => {
    return(
        <>
            <div
                className="wrapper bg"

            >
                <div className="inner" style={{width:'100%'}}>
                    <div className="image-holder bgholder" style={{width:'100%'}}>

                    </div>
                    <form action="" style={{width:'100%'}}>
                        <h3>Registration</h3>
                        <div className="form-group">
                            <input type="text" placeholder="First Name" className="form-control" />
                            <input type="text" placeholder="Last Name" className="form-control" />
                        </div>
                        <div className="form-wrapper">
                            <input type="text" placeholder="Username" className="form-control" />
                            <i className="zmdi zmdi-account" />
                        </div>
                        <div className="form-wrapper">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="form-control"
                            />
                            <i className="zmdi zmdi-email" />
                        </div>
                        <div className="form-wrapper">
                            <select name="" id="" className="form-control">
                                <option value="" disabled="" selected="">
                                    Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="femal">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
                        </div>
                        <div className="form-wrapper">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                            />
                            <i className="zmdi zmdi-lock" />
                        </div>
                        <div className="form-wrapper">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                            />
                            <i className="zmdi zmdi-lock" />
                        </div>
                        <div style={{justifyContent:'center', display: 'flex'}}>
                            <button  className='btn btn-dark'>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}