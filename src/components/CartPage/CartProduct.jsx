import './styles/CartProduct.css'
import { deleteProductFromCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartProduct = ({ prod }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductFromCartThunk(prod.id))
    }

  return (
    <section className='cartproduct'>
        <header className='cartproduct__header'>
            <img className='cartproduct__img' src={prod.product.images[0].url} alt="" />
        </header>
        <article className='cartproduct__article'>
            <h3 className='cartproduct__h3'>{prod.product.title}</h3>
            <p className='cartproduct__quantity'>Quantity: <span>{prod.quantity}</span></p>
            <p className='cartproduct__price'>Price: <span>{prod.product.price}</span></p>
            <button className='cartproduct__btn' onClick={handleDelete}>
                <i className='bx bx-trash'></i>
            </button>
        </article>
        
    </section>
  )
}

export default CartProduct