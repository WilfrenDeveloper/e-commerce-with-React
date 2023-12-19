import { useDispatch, useSelector } from 'react-redux'
import '../style/CartPage.css'
import { useEffect } from 'react'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'
import getTokenConfig from '../utils/getTokenConfig'

const CartPage = () => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])
  
  const totalPriceCart = cart.reduce((acc,cv) => {
    return acc + cv.product.price * cv.quantity
  }, 0)

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, '', getTokenConfig())
    .then(res =>{
      console.log(res.data)
      dispatch(setCart([]))
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {
          cart.map(prod=>(
            <CartProduct 
              key = {prod.id}
              prod = {prod}
            />
          ))
        }
      </div>
    <hr />
    <footer>
      <span>Total: </span>
      <span>{totalPriceCart}</span>
      <button onClick={handlePurchase}>CheckOut</button>
    </footer> 
    </div>
  )
}

export default CartPage