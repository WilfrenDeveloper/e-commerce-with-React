import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import ProductInfo from '../components/ProductIdPage/ProductInfo'
import SimilarProduct from '../components/ProductIdPage/SimilarProduct'

const ProductIdPage = () => {

  const {id} = useParams()

  const [product, getProduct] = useFetch();

  
  useEffect(() => {
    const url = `http://localhost:8080/products/${id}`

    getProduct(url);
  }, [id])
  

  return (
    <section className='productidpage' style={{marginLeft: "100px", marginRight: "100px"}}>
      <ProductInfo 
        product = {product}
      />
      <h2>Similar products</h2>
      <SimilarProduct 
        categoryId = {product?.category?.id}
        idProduct = {product?.id}
      />
    </section>
  )
}

export default ProductIdPage