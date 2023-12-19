import { useState } from "react"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"


const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addToCart = () => {
        dispatch(addProductToCartThunk(product.id, quantity))
    }

    return (
        <article>
            <h3>{product?.brand}</h3>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <footer>
                <div>
                    <span>Price</span>
                    <span>{product?.price}</span>
                </div>
                <div>
                    <button onClick={handleMinus}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlus}>+</button>
                </div>
                <button onClick={addToCart}>
                    <span>Add to Cart</span>
                    <span><i className='bx bx-cart'></i></span>
                </button>
            </footer>
        </article>
    )
}

export default ProductInfo