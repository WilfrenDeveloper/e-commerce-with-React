import { Link } from 'react-router-dom'
import '../style/Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <h1><Link to='/' className='nav__h1'>e-commerce</Link></h1>
            <div className='nav__div'>
                <Link to='/login'><i className='bx bx-user  nav__bx'></i></Link>
                <i className='bx bx-box  nav__bx' ></i>
                
                <Link to='/'></Link>
                <Link to='/cart'><i className='bx bx-cart  nav__bx'></i></Link>
                
                
                
            </div>
        </nav>
    )
}

export default Nav