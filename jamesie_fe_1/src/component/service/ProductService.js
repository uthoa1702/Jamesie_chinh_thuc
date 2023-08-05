import axios from "axios";


export const getList = async (page) => {

    try {
        const token = localStorage.getItem("token")
        const res = await axios.get("http://localhost:8080/products?page=0"

                // headers: {Authorization: `Bearer ${token}`}
            )
        return res.data;
    } catch (e) {
        console.log(e)
    }
}