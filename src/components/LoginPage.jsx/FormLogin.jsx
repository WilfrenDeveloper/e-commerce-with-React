import './style/FormLogin.css'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import RegisterPage from '../../pages/RegisterPage'

const FormLogin = () => {

    const { register, handleSubmit, reset } = useForm()
    const { loginUser } = useAuth()

    const submit = (data) => {
        loginUser(data)
    }


    return (
        <section className='formlogin'>
            <article className='formlogin__article'>
                <h2 className="formlogin__h2">
                    Welcome! Enter your email and password to continue
                </h2>
                <p className="formlogin__p">You have to Log In to access to your cart</p>
                <div className='formlogin__container'>
                    <h3 className="formlogin__h3">Test data</h3>
                    <ul>
                        <li className="formlogin__li">
                            <i className='bx bx-envelope'></i>
                            <span className="formlogin__li--span">steve@gmail.com</span>
                        </li>
                        <li className="formlogin__li">
                            <i className='bx bx-lock-alt'></i>
                            <span className="formlogin__li--span">steve</span>
                        </li>
                    </ul>
                </div>
            </article>
            <form className='formlogin__form' onSubmit={handleSubmit(submit)}>
                <label className='formlogin__label'>
                    <span className='formlogin__span'>Email</span>
                    <input className='formlogin__input' {...register("email")} type="email" />
                </label>
                <label className='formlogin__label'>
                    <span className='formlogin__span'>Password</span>
                    <input className='formlogin__input' {...register("password")} type="password" />
                </label>
                <button className='formlogin__btn'>Login</button>
            </form>
            <div className='formlogin__div'>
                <p>Don't have an account?</p>
                <Link to='/register' >Sing up</Link>

            </div>
        </section>
    )
}

export default FormLogin