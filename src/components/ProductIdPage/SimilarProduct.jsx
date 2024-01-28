import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/HomePage/ProductCard'

const SimilarProduct = ({ categoryId, idProduct }) => {

    const [productByCategory, getProductByCategory] = useFetch()

    useEffect(() => {
     if (categoryId) {
            const url = `http://localhost:8080/products?categoryId=${categoryId}`;
            getProductByCategory(url);
        }
    }, [categoryId])


    return (
        <article>
            <h2>similar products</h2>
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





  