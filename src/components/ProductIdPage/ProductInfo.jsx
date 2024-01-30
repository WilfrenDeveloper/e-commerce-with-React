import { useState } from "react"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import SliderImgs from "./SliderImgs"
import './style/productinfo.css'


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

    const handleAddToCart = () => {
        dispatch(addProductToCartThunk(product.id, quantity))
    }

    return (
        <section className="productinfo">
            <div className="productinfo__return">
                <a href="/">Home</a>
                <figure> </figure>
                <p>{product?.title}</p>
            </div>
            <SliderImgs
                product={product}
            />
            <article className="productinfo__article">
                <h3 className="productinfo__h3">{product?.brand}</h3>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>

                <footer className="productinfo__footer">
                    <div className="productinfo__price">
                        <span className="productinfo__price--label">Price</span>
                        <span className="productinfo__price--value">{product?.price}</span>
                    </div>
                    <div className="productinfo__quantity">
                        <p>Quantity</p>
                        <button onClick={handleMinus}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handlePlus}>+</button>
                    </div>
                    <button className="productinfo__btn" onClick={handleAddToCart}>
                        <span>Add to Cart</span>
                        <span><i className='bx bx-cart'></i></span>
                    </button>
                </footer>
            </article>
        </section>
    )
}

export default ProductInfo