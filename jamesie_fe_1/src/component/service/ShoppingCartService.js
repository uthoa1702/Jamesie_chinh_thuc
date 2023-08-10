import axios from "axios";


export const getList = async (username) => {
    try {
        const res = await axios.get("http://localhost:8080/shopping/myCart?username=" + username)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const getTotal = async (username) => {
    try {
        const res = await axios.get("http://localhost:8080/shopping/total?username=" + username)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const addAndMinus = async (username, productId, addOrMinus) => {
    try {
        await axios.post("http://localhost:8080/shopping/changeQuantity?username=" + username + "&productId=" + productId + "&addOrMinus=" + addOrMinus)

    } catch (e) {
        console.log(e)
    }
}