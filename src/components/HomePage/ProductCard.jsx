import { useNavigate } from 'react-router-dom'
import './styles/ProductCard.css'
import { addProductToCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavegate = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = (e) => {
        e.stopPropagation()
        dispatch(addProductToCartThunk(product.id, 1))
    }

    return (
        <article className='productcard__article' onClick={handleNavegate}>
            <header className='productcard__header'>
                <img className='productcard__img product_img-1' src={product.images[1]?.url} alt="" />
                <img className='productcard__img product_img-2' src={product.images[0]?.url} alt="" />
            </header>
            <section className='productcard__section'>
                <h4 className='productcard__h4'>{product.brand}</h4>
                <h3 className='productcard__h3'>{product.title}</h3>
                <div className='productcard__div'>
                    <span className='productcard__span productcard__value--label'>Price</span>
                    <span className='productcard__span productcard__value--value'>{product.price}</span>
                </div>
                <button className='productcard__button' onClick={handleAddCart}>
                    <i className='bx bx-cart productcard__bx'></i>
                </button>
            </section>
        </article>
    )
}

export default ProductCard