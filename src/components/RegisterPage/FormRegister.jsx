import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import '../../style/FormRegister.css'

const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm();
    const { registerUser } = useAuth();

    const submit = (data) =>{
        registerUser(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
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
                <span>Phone</span>
                <input {...register('phone')} type="number" />
            </label>
            <button>Register</button>

        </form>
    )
}

export default FormRegister