
import '../login/css/style.css'
import React from "react";


export const Login = () => {
    return(
        <>
            <div
                className="wrapper bg "

            >
                <div className="inner" style={{width:"100%",height :"550px"}}>
                    <div className="image-holder bgholder" style={{backgroundRepeat: 'no-repeat',width:'100%'}}>

                    </div>
                    <form action="" style={{width:'100%', height: '500px',alignItems: 'center', display: 'flex'}}>
                        <div  style={{width:"100%"}}>
                            <h3>Login</h3>

                            <div className="form-wrapper">
                                <input type="text" placeholder="Username" className="form-control" />
                                <i className="zmdi zmdi-account" />
                            </div>


                            <div className="form-wrapper">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <i className="zmdi zmdi-lock" />
                            </div>

                            <div style={{justifyContent:'center', display: 'flex'}}>
                                <button  className='btn btn-dark'>
                                    Login
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}