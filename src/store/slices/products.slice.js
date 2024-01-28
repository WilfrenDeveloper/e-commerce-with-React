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
    const url = "http://localhost:8080/products"
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err));
}