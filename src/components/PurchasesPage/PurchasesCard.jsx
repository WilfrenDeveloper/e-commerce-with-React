import './styles/PurchasesCard.css'

const PurchasesCard = ({ purchase }) => {
  return (
    <article className='purchases'>
        <header className='purchases__header'>
          <img className='purchases__img' src={purchase.product?.images[0].url} alt="" />
        </header>
        <h3 className='purchases__h3'>{purchase.product.title}</h3>
        <span className='purchases__span'>{purchase.quantity}</span>
        <div className='purchases__price'>{purchase.product.price}</div>
    </article>
  )
};

export default PurchasesCard