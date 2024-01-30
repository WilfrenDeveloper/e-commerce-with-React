import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'

const FilterPrice = ({ setPriceRange }) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        const from = Number(data.from)
        const to = Number(data.to)

        setPriceRange({
            from,
            to: to === 0 ? Infinity : to
        });

        reset({
            from: '',
            to: ''
        })
    }

  return (
    <form className='filterprice' onSubmit={handleSubmit(submit)}>
        <h3 className='filterprice__h3'>Price</h3>
        <hr />
        <label className='filterprice__label'>
            <span>From</span>
            <input className='filterprice__input' {...register('from')} type="number" />
        </label>
        <label className='filterprice__label'>
            <span>to</span>
            <input className='filterprice__input' {...register('to')} type="number" />
        </label>
        <button className='filterprice__btn'>Filter Price</button>
    </form>
  )
}

export default FilterPrice