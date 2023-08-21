import axios from "axios";

const token = localStorage.getItem("token")
export const getInformation = async () => {
    const res = await axios.get("http://localhost:8080/customer/information", {
        headers: {
            Authorization: `Bearer ${token}`

        }
    })
    return res.data
}