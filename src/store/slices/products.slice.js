import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const productSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (currentValue, action) => action.payload
    }
})

export const {setProducts} = productSlice.actions

export default productSlice.reducer

export const getProductsThunk = () => (dispatch) =>{
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products"
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err));
}