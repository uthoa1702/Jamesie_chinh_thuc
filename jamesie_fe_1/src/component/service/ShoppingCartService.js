import axios from "axios";


export const getList = async (username) => {
    try {
        const res = await axios.get("http://localhost:8080/shopping/myCart?username=" + username)
        return res.data
    }catch (e) {
        console.log(e)
    }
}