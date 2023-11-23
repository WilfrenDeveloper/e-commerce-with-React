import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import ProductCard from '../components/HomePage/ProductCard'

const HomePage = () => {

  const products = useSelector(store => store.products)

  console.log(products);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div>
      <div>
        {
          products?.map(prod => (
            <ProductCard
            key = {prod.id}
            product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage