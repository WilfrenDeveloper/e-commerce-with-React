
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/registerPage'
import LoginPage from './pages/LoginPage'
import Nav from './components/Nav'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <div className='app__copy'>
        <p className='app__p'>create for Wilfren Quintero</p>
      </div>
    </div>
  )
}

export default App
