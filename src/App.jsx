import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/Layout/Layout'
import BlanckLayout from './Layout/BlanckLayout'
import MainPage from './components/pages/Main pages/MainPage'
import SignIn from './components/pages/Registration/SignIn'
import SignUp from './components/pages/Registration/SignUp'
import Member from './components/pages/Navigated pages/Member/Member'
import ProtectedRoute from './components/pages/Protection/ProtectedRoute'
import ErrorPage from './components/ErrorPage'
import Scroll from './components/Scroll'
import Loader from './components/Loader'
import Notify from './components/Notify'
import { useDispatch, useSelector } from 'react-redux'
import { getNavlinks } from './redux/LinksDataSlice'
const Wishlist = lazy(() => import('./components/pages/Navigated pages/Whislist'))
const ShoppingCart = lazy(() => import('./components/pages/Navigated pages/ShoppingCart'))
const Products = lazy(() => import('./components/pages/Navigated pages/Products'))
const Details = lazy(() => import('./components/pages/Navigated pages/Details'))
const Checkout = lazy(() => import('./components/pages/Navigated pages/Checkout'))
const Profile = lazy(() => import('./components/pages/Registration/Profile'))
const Admin = lazy(() => import('./components/pages/Admin/Admin'))

function App() {
  const dispatch = useDispatch()
  const { linkData } = useSelector(state => state.links)
  useEffect(() => {
    if (!linkData || linkData.length === 0) {
      dispatch(getNavlinks())
    }
  }, [dispatch, linkData.length])
  return (
    <>
      <Notify />
      <Scroll />
      <Suspense fallback={<div className='loader'><Loader /></div>}>
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
      </Suspense>
    </>
  )
}

export default App
