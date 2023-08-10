import axios from "axios";
import {almostWhole} from "chart.js/helpers";

export async function getType() {
    try {
        const res = await axios.get("http://localhost:8080/products/getType")
        return res.data
    }catch (e) {
        console.log(e)
    }
}


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

export const getImage = async (name) => {
    try {
        const res = await axios.post("http://localhost:8080/products/images", name, {
        headers: {
            'Content-Type': 'text/plain' // Set the Content-Type header to indicate the raw data format
        }})
        return res
    }catch (e) {
        console.log(e)
    }
}

export const getSize = async (name) => {
    try {
        const res = await axios.get("http://localhost:8080/products/getSize?productName=" + name)
        return res.data
    }catch (e) {
        console.log(e)
    }
}

export const addToCart = async (productName,size, username, quantity) => {

        return  await axios.post("http://localhost:8080/shopping/add?size=" + size + "&productName=" + productName + "&username=" + username + "&quantity=" + quantity)


}