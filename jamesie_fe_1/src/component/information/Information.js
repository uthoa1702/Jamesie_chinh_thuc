import * as CustomerService from "../service/CustomerService"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";


export const Information = () => {
    const [customer, setCustomer] = useState();
    const navigate = useNavigate();
    const fetchAPI = async () => {
        try {
            const res =await CustomerService.getInformation()
            await setCustomer( res)
        }catch (e) {
navigate("/")
        }
    }
    useEffect(() => {
        fetchAPI()
        document.title = "Information"
    },[])
    return(
        <>
            <div className="containerr" style={{marginTop:"8%"}}>
                <div className="avatar">
                    <img
                        src="https://i.pinimg.com/564x/eb/57/6f/eb576ff023487bcb1fa3ad61ee7b23ee.jpg"
                        alt=""
                    />
                </div>
                <div className="name">
                    <h1>{customer?.name}</h1>
                    <div className="specialize">Vip Member</div>
                    <ul className="contact">
                        <li>
                            <span>P</span> {customer?.phone}
                        </li>
                        <li>
                            <span>E</span> {customer?.mail}
                        </li>
                        <li>
                            <span>N</span> {customer?.country}
                        </li>
                    </ul>
                </div>
                <div className="info">
                    <ul>
                        <li>
                             <b>{customer?.address}</b>
                        </li>
                        <li>17/02/1998</li>
                    </ul>
                </div>
                <div className="intro">
                    <h2>INTRODUCE MYSELF</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi omnis
                    quasi dolores modi eius aliquam ipsum soluta, dolore tenetur excepturi
                    praesentium porro alias itaque enim labore qui necessitatibus molestias hic
                    cum deserunt ab! Illum sed eveniet distinctio, alias sunt repudiandae labore
                    a dolorum tenetur? Harum deleniti mollitia odio neque.
                </div>
            </div>
        </>
    )
}