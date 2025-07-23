import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/Layout/Layout'
import MainPage from './components/pages/Main pages/MainPage'
import SignIn from './components/pages/Navigated pages/SignIn'
import SignUp from './components/pages/Navigated pages/SignUp'
import Wishlist from './components/pages/Navigated pages/Whislist'
import ShoppingCart from './components/pages/Navigated pages/ShoppingCart'
import Products from './components/pages/Navigated pages/Products'
import Details from './components/pages/Navigated pages/Details'
import Member from './components/pages/Navigated pages/Member/Member'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=':code' element={<MainPage />} />
          <Route path='products' element={<Products />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='member' element={<Member />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
