import { useDispatch, useSelector } from 'react-redux'
import '../components/CartPage/styles/CartPage.css'
import { useEffect } from 'react'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'
import getTokenConfig from '../utils/getTokenConfig'
import axios from 'axios'

const CartPage = () => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalPriceCart = cart.reduce((acc, cv) => {
    const price = Number(cv.product.price);
    return acc + price * cv.quantity
  }, 0)

  const handlePurchase = () => {
    const url = 'https://ecommerce-db-n5fd.onrender.com/purchases'
    axios.post(url, '', getTokenConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCart([]))
      })
      .catch(err => console.log(err))
  }


  return (
    <section className='cartpage'>
      <header className='cartpage__header'>
        <h1 className='cartpage__h1'>Cart</h1>
        <p className='cartpage__p'>Total: <span>{totalPriceCart}</span></p>
        
        <button className='cartpage__btn' onClick={handlePurchase}>CheckOut</button>
      </header>
      <article className='cartpage__productcart'>
        {
          cart.map(prod => (
            <CartProduct
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </article>
      <hr />
    </section>
  )
}

export default CartPage