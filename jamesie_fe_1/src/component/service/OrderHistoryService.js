import axios from "axios";
import {useNavigate} from "react-router";



const token = localStorage.getItem("token")
export const getList = async () => {



        const res = await axios.get("http://localhost:8080/history/getHistoryList",{
            headers: {
                Authorization: `Bearer ${token}`

            }
        })
        return res.data

}


export const getListDetail = async (id) => {
    try {
        const res = await axios.get("http://localhost:8080/history/orderDetail?orderId=" + id,{
            headers: {
                Authorization: `Bearer ${token}`

            }
        })
        return res.data
    }catch (e) {
        console.log(e)
    }
}