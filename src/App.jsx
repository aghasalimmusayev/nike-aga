import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/Layout/Layout'
import BlanckLayout from './Layout/BlanckLayout'
import MainPage from './components/pages/Main pages/MainPage'
import SignIn from './components/pages/Registration/SignIn'
import SignUp from './components/pages/Registration/SignUp'
import Wishlist from './components/pages/Navigated pages/Whislist'
import ShoppingCart from './components/pages/Navigated pages/ShoppingCart'
import Products from './components/pages/Navigated pages/Products'
import Details from './components/pages/Navigated pages/Details'
import Member from './components/pages/Navigated pages/Member/Member'
import Checkout from './components/pages/Navigated pages/Checkout'
import Profile from './components/pages/Registration/Profile'
import ProtectedRoute from './components/pages/Protection/ProtectedRoute'
import Admin from './components/pages/Admin/Admin'
import ErrorPage from './components/ErrorPage'
import Scroll from './components/Scroll'

function App() {

  return (
    <>
      <Scroll />
      <Routes>

        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=':code' element={<MainPage />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:category' element={<Products />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='member' element={<Member />} />
          <Route path='profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />
        </Route>

        <Route>
          <Route element={<BlanckLayout />} >
            <Route path='signIn' element={<SignIn />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='admin' element={
              <ProtectedRoute role='SuperAdmin'>
                <Admin />
              </ProtectedRoute>} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
