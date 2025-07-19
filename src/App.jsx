import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/Layout/Layout'
import MainPage from './components/pages/Main pages/MainPage'
import SignIn from './components/pages/Navigated pages/SignIn'
import SignUp from './components/pages/Navigated pages/SignUp'
import Wishlist from './components/pages/Navigated pages/Whislist'
import ShoppingCart from './components/pages/Navigated pages/ShoppingCart'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=':code' element={<MainPage />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
