import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/HomePage/ProductCard'

const SimilarProduct = ({ categoryId, idProduct }) => {

    const [productByCategory, getProductByCategory] = useFetch()

    useEffect(() => {
     if (categoryId) {
            const url = `https://ecommerce-db-n5fd.onrender.com/products?categoryId=${categoryId}`;
            getProductByCategory(url);
        }
    }, [categoryId])


    return (
        <article style={{display: "flex", flexWrap:"wrap", justifyContent:"center", gap: "20px"}}>
            {
                productByCategory?.
                filter(prod => prod.id !== idProduct)
                .map(product => (
                    <ProductCard 
                        key= {product.id}
                        product = {product}
                    />
                ))
            }
        </article>
    )
}

export default SimilarProduct





  