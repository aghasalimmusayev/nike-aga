import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../../../redux/CartSlice'
import { Link } from 'react-router-dom'

function ShoppingCart() {

    const cartItems = useSelector(state => state.cartList.cartList)
    const total = (cartItems?.reduce((acc, item) => (acc + (item.price * item.count)), 0)).toFixed(2)
    const dispatch = useDispatch()
    function countDown(id) {
        dispatch(decrementCount(id))
    }
    function countUp(id) {
        dispatch(incrementCount(id))
    }

    return (
        <section id='shoppingCart'>
            <div className="container">
                <div className='shopping_info'>
                    <div className="cart_box">
                        <h1 className='shoppingCart_header'>Shopping</h1>
                        {cartItems.length > 0
                            ? cartItems.map(item => (
                                <div className="cartItem" key={item.id}>
                                    <div className="cartItem_img">
                                        <img src={item.images[0]} alt="" />
                                    </div>
                                    <div className="cartItem_info">
                                        <h3 className='cartItem_name'>{item.title}</h3>
                                        <h4 className='cartItem_cat'>{item.category}</h4>
                                        <p className='cartItem_price'>Price: {item.price} $</p>
                                        <p className='counted_price'>Total: {item.count * item.price} $</p>
                                        <div className='cart_item_count'>
                                            <button onClick={() => countDown(item.id)}>-</button>
                                            <span>{item.count}</span>
                                            <button onClick={() => countUp(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <p className='emptyCart_info'>There are no items in your Cart.</p>
                        }
                    </div>
                    {cartItems.length > 0 &&
                        <div className="summary">
                            <h2 className='shoppingCart_header'>Summary</h2>
                            <div className="shipping_fee">
                                <span>Estimated Shipping & Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>{total} $</span>
                            </div>
                            <p className='joining_info'>
                                <span>You qualify for </span>
                                <b>Free Shipping</b>
                                <span> as aMember! </span>
                                <Link to={'/SignUp'}>Join us</Link>
                                <span> or </span>
                                <Link to={'/SignIn'}>Sign-in</Link>
                            </p>
                            <div className="checkout_btn">
                                <Link to={'/checkout'}>Chekcout</Link>
                            </div>
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default ShoppingCart
