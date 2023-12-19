import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getTokenConfig from "../../utils/getTokenConfig";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (currentValue, action) => [...currentValue, action.payload],
        removeFromCart: (currentValue, action) => currentValue.filter(prod => prod.id !== action.payload),
        setCart: (currentValue, action) => action.payload
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

export const getCartThunk = () => (dispatch) => {
    const url = `${baseUrl}`
    axios.get(url, getTokenConfig())
        .then(res => dispatch(setCart(res.data)))
        .catch(err => console.log(err))
}

export const addProductToCartThunk = (productId, quantity = 1) => (dispatch) => {
    const url = `${baseUrl}`
    const data = { productId, quantity}
    axios.post(url, data, getTokenConfig())
        .then(res => dispatch(addToCart(res.data)))
        .catch(err => console.log(err))
}

export const deleteProductFromCartThunk = (id) => (dispatch) => {
    const url = `${baseUrl}/${id}`

    axios.delete(url, getTokenConfig())
        .then(res => {
            console.log(res)
            dispatch(removeFromCart(id))
        })
        .catch(err => console.log(err))
}

export const updateProductFromCartThunk = () => (dispatch) => {
    
}