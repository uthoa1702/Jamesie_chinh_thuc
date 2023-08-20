import {GET_ALL_CART, UPDATE_CART} from "./type";
import * as shoppingCartService from "../../component/service/ShoppingCartService"


const token = localStorage.getItem("token")
export const updateCart = (quantity) => async (dispatch) => {

    try {
        dispatch({
            type: UPDATE_CART,
            payload:quantity
        })
    } catch (e) {
    }
}

export const getAllCart = () => async (dispatch) => {

    await shoppingCartService.getList().then((res) => {
        let quantity = 0;
        if(res.length !==0){
            res.map((value) => {
                quantity = quantity + value.amount;
            })
        }


            dispatch({
                type: GET_ALL_CART,
                payload: quantity
            })
        }
    ).catch((e) => console.log(e))


}