import axios from "axios";


export const getList = async (page, sortBy, price, color, type, productName) => {

    try {
        const token = localStorage.getItem("token")
        const res = await axios.get("http://localhost:8080/products?page=" + page + "&sortBy=" + sortBy + "&price=" + price +"&color=" + color + "&type=" + type +"&productName=" + productName

                // headers: {Authorization: `Bearer ${token}`}
            )
        return res.data;
    } catch (e) {
        console.log(e)
    }
}