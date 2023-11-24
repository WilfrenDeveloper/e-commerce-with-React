import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import ProductCard from '../components/HomePage/ProductCard'
import FilterCategory from '../components/HomePage/FilterCategory'
import FilterPrice from '../components/HomePage/FilterPrice'

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
    <div>
      <input onChange={handleInputName} type="text" ref={inputValue} />
      <div>
        <h2>Filter category</h2>
        <FilterPrice 
          setPriceRange = {setPriceRange}
        />
        <FilterCategory
          setCategorySelected={setCategorySelected}
        />
      </div>
      <div>
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