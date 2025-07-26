import React from 'react'
import { useSelector } from 'react-redux'

function ShoppingCart() {

    const cartItems = useSelector(state => state.cartList.cartList)
    console.log(cartItems)

    return (
        <div className="container">
            <div>
                <h1>Shopping</h1>
                <div className="cart_box">
                    {cartItems?.map(item => (
                        <div className="cartItem">
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
