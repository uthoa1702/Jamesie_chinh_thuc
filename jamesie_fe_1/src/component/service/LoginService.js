import axios from "axios";


export const login = async (value) => {
    try {
        const res = axios.post("http://localhost:8080/authenticate", value, {
            withCredentials: true
        })
        return res
    }catch (e) {
        console.log(e)
    }
}