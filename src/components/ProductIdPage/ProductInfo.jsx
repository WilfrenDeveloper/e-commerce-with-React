import { useState } from "react"
import { useSelector } from "react-redux"


const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addToCart = () => {

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
                <span><i className='bx bxs-cart'></i></span>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo