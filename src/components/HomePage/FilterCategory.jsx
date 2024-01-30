import { useEffect } from "react"
import useFetch from '../../hooks/useFetch'
import './styles/FilterCategory.css'


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
    <section className="filtercategory">
        <h3 className="filtercategory__h3">Category</h3>
        <hr />
        <ul className="filtercategory__ul">
            <li className="filtercategory__li" onClick={() => handleCategory('all')}>All Cateories</li>
        {
            categories?.map(category => (
                <li className="filtercategory__li" onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
            ))
        }
        </ul>
    </section>
  )
}

export default FilterCategory