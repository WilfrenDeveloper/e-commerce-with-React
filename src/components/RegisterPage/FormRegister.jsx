import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"

const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm()
    const { registerUser } = useAuth()

    const submit = () =>{
    
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="">
                <span>First Name</span>
                <input {...register('firstname')} type="text" />
            </label><label htmlFor="">
                <span>Last Name</span>
                <input {...register('lastname')} type="text" />
            </label>
            <label htmlFor="">
                <span>Email</span>
                <input {...register('email')} type="text" />
            </label>
            <label htmlFor="">
                <span>Password</span>
                <input {...register('password')} type="password" />
            </label>
            <label htmlFor="">
                <span>Phone</span>
                <input {...register('phone')} type="number" />
            </label>
            <label htmlFor="">
                <span>Register</span>
                <input {...register('')} type="text" />
            </label>

        </form>
    )
}

export default FormRegister