import { useEffect } from "react"
import useFetch from '../../hooks/useFetch'


const FilterCategory = ({ setCategorySelected }) => {
    const [categories, getCategories] = useFetch()

    const url = "http://localhost:8080/categories"

    useEffect(() => {
      getCategories(url)
    }, [])

    const handleCategory = (id) => {
        setCategorySelected(id);
    }
    
    

  return (
    <section>
        <h3>Categories</h3>
        <hr />
        <ul>
            <li onClick={() => handleCategory('all')}>All Cateories</li>
        {
            categories?.map(category => (
                <li onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
            ))
        }
        </ul>
    </section>
  )
}

export default FilterCategory