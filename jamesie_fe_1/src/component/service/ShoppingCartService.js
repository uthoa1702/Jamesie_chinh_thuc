import axios from "axios";


const token = localStorage.getItem("token");
export const getList = async () => {
    try {
        if (token != null){
            const res = await axios.get("http://localhost:8080/shopping/myCart",
                {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                })
            return res.data
        }
        else {
            const res = await axios.get("http://localhost:8080/shopping/listSession",
                {withCredentials: true})
            return res.data
        }

    } catch (e) {
        console.log(e)
    }
}

export const getTotal = async () => {
    try {
        if (token !== null){
            const res = await axios.get("http://localhost:8080/shopping/total",
                {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                })
            return res.data
        }
        else {
            const res = await axios.get("http://localhost:8080/shopping/totalSession",
                {withCredentials: true})
            return res.data
        }
    } catch (e) {
        console.log(e)
    }
}
export const addAndMinus = async (productId, addOrMinus) => {
    try {
        if (token !== null){
            await axios.post("http://localhost:8080/shopping/changeQuantity?productId=" + productId + "&addOrMinus=" + addOrMinus, "",
                {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                })
        }
        if (token == null){
            await axios.post("http://localhost:8080/shopping/changeQuantitySession?productId=" + productId + "&addOrMinus=" + addOrMinus,'',
                {withCredentials: true})
        }

    } catch (e) {
        console.log(e)
    }
}



