import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import ProductInfo from '../components/ProductIdPage/ProductInfo'
import SimilarProduct from '../components/ProductIdPage/SimilarProduct'

const ProductIdPage = () => {

  const {id} = useParams()

  const [product, getProduct] = useFetch();

  
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

    getProduct(url);
  }, [id])
  

  return (
    <div>
      <ProductInfo 
        product = {product}
      />
      <SimilarProduct 
        categoryId = {product?.category.id}
        idProduct = {product?.id}
      />
    </div>
  )
}

export default ProductIdPage