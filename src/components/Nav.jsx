import '../style/Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <h1 className='nav__h1'>e-commerce</h1>
            <div className='nav__div'>
                <i className='bx bx-user  nav__bx'></i>
                <i className='bx bx-box  nav__bx' ></i>
                <i className='bx bx-cart  nav__bx'></i>
            </div>
        </nav>
    )
}

export default Nav