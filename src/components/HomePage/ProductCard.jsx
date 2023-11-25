import { useNavigate } from 'react-router-dom'
import '../../style/ProductCard.css'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const handleNavegate = () => {
        navigate(`/product/${product.id}`)
    }


    return (
        <article className='productcard__article' onClick={handleNavegate}>
            <header className='productcard__header'>
                <img className='productcard__img' src={product.images[0].url} alt="" />
            </header>
            <section className='productcard__section'>
                <h4 className='productcard__h4'>{product.brand}</h4>
                <h3 className='productcard__h3'>{product.title}</h3>
                <div className='productcard__div'>
                    <span className='productcard__span productcard__span--label'>Price</span>
                    <span className='productcard__span productcard__span--value'>{product.price}</span>
                </div>
                <button className='productcard__button'><i className='bx bx-cart productcard__bx'></i>
                </button>
            </section>
        </article>
    )
}

export default ProductCard