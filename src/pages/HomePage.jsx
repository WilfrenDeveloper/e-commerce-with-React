import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import ProductCard from '../components/HomePage/ProductCard'
import FilterCategory from '../components/HomePage/FilterCategory'
import FilterPrice from '../components/HomePage/FilterPrice'
import '../style/HomePage.css'

const HomePage = () => {

  const products = useSelector(store => store.products)
  const [nameValue, setNameValue] = useState(" ")
  const [categorySelected, setCategorySelected] = useState('all')
  const [priceRange, setPriceRange] = useState({
    from:0,
    to: Infinity
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const inputValue = useRef()

  const handleInputName = () => {
    setNameValue(inputValue.current.value.toLowerCase())
  }

  const callbackFilter = prod => {
    const filterName = prod.title.toLowerCase().includes(nameValue);
    const filterCategory = categorySelected === 'all' ? true : categorySelected === prod.category.id;
    
    const price = Number(prod.price)
    const filterPrice = priceRange.from <= price && price <= priceRange.to;
    
    return filterName && filterCategory && filterPrice;
  }

  console.log(priceRange);

  return (
    <div className='homepage__container'>
      
      <div className='homepage__div--category'>
        <h2 className='homepage__h2'>Filter category</h2>
        <FilterPrice 
          setPriceRange = {setPriceRange}
        />
        <FilterCategory
          setCategorySelected={setCategorySelected}
        />
      </div>
      <input className='homepage__search' onChange={handleInputName} type="text" ref={inputValue} placeholder='What are you looking for?' />
      <div className='homepage__div--card'>
        {
          products?.filter(callbackFilter).map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage