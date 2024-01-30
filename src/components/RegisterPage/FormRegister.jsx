import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import './styles/FormRegister.css'

const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm();
    const { registerUser } = useAuth();

    const submit = (data) => {
        registerUser(data);
    }

    return (
        <div className="formregister">
            <h2 className="formregister__h2">
                Sing Up
            </h2>
            <form className='formregister__form' onSubmit={handleSubmit(submit)}>
                <label className="formregister__label">
                    <span>First Name</span>
                    <input {...register('firstName')} type="text" />
                </label>
                <label className="formregister__label">
                    <span>Last Name</span>
                    <input {...register('lastName')} type="text" />
                </label>
                <label className="formregister__label">
                    <span>Email</span>
                    <input {...register('email')} type="email" />
                </label>
                <label className="formregister__label">
                    <span>Password</span>
                    <input {...register('password')} type="password" />
                </label>
                <label className="formregister__label">
                    <span>Phone (10 Characters)</span>
                    <input {...register('phone')} type="number" />
                </label>
                <button className='formregister__btn'>Register</button>
            </form>
        </div>
    )
}

export default FormRegister