import React from 'react'
import './navigatedPage.css'
import { useSelector } from 'react-redux'
import WithAuth from '../Protection/Withauth'

function Checkout() {

    const cartItems = useSelector(state => state.cartList.cartList)
    const selectedItems = useSelector(state => state.cartList.selectedItems)
    const checkoutItems = cartItems.filter(item => selectedItems.includes(item.id))
    const total = checkoutItems.reduce((acc, item) => acc + (item.price * item.count), 0).toFixed(2);
    const countOrders = checkoutItems.reduce((acc, item) => item.count + acc, 0)

    return (
        <section id='checkout_page'>
            <div className="container">
                <div className='shopping_info'>
                    <div className="cart_box">
                        {checkoutItems.length > 0 && (
                            <>
                                <h1 className='shoppingCart_header'>Your orders</h1>
                                {checkoutItems.map(item => (
                                    <div className="cartItem" key={item.id}>
                                        <div className="cartItem_img">
                                            <img src={item.images[0]} alt="" />
                                        </div>
                                        <div className="cartItem_info">
                                            <h3 className='cartItem_name'>{item.title}</h3>
                                            <h4 className='cartItem_cat'>{item.category}</h4>
                                            <p className='cartItem_price'>Price: {item.price} $</p>
                                            <p className='counted_price'>Total: {item.count * item.price} $</p>
                                            <div className='cart_item_count'>Count: {item.count}</div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    {checkoutItems.length > 0 &&
                        <div className="summary">
                            <div className="orders_info">
                                <p className='order_count'>
                                    <span>Order count:</span>
                                    <span>{countOrders} pieces</span>
                                </p>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>{total} $</span>
                            </div>
                            <div className='payment_btn'>
                                <button>Complete payment</button>
                            </div>
                        </div>}
                </div>
            </div>
        </section >
    )
}

export default WithAuth(Checkout)
