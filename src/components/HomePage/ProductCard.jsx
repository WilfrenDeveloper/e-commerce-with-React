import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    console.log(product);

    const navigate = useNavigate()

    const handleNavegate = () => {
        navigate(`/product/${product.id}`)
    }


  return (
    <article onClick={handleNavegate}>
        <header>
            <img src={product.images[0].url} alt="" />
        </header>
        <section>
            <h4>{product.brand}</h4>
            <h3>{product.title}</h3>
            <div>
                <span>Price</span>
                <span>{product.price}</span>
            </div>
            <button><i className='bx bxs-cart'></i>
            </button>
            </section>
    </article>
  )
}

export default ProductCard