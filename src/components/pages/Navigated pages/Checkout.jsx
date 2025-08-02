import React, { useCallback, useMemo } from 'react'
import './navigatedPage.css'
import { useDispatch, useSelector } from 'react-redux'
import WithAuth from '../Protection/Withauth'
import { sellProduct } from '../../../service/sellService'
import { clearSelection } from '../../../redux/CartSlice'
import { Link } from 'react-router-dom'
import { TbArrowBackUp } from "react-icons/tb";

function Checkout() {

    const cartItems = useSelector(state => state.cartList.cartList)
    const selectedItems = useSelector(state => state.cartList.selectedItems)

    const checkoutItems = useMemo(
        () => cartItems.filter(item => selectedItems.includes(item.id)),
        [cartItems, selectedItems]
    )
    const total = useMemo(
        () => checkoutItems.reduce((acc, item) => acc + (item.price * item.count), 0).toFixed(2),
        [checkoutItems]
    )
    const countOrders = useMemo(
        () => checkoutItems.reduce((acc, item) => item.count + acc, 0),
        [checkoutItems]
    )
    const dispatch = useDispatch()
    async function completeOrder() {
        try {
            for (let item of checkoutItems) {
                const stokSayi = item.stock - item.count
                const satis = (item.sold || 0) + item.count
                const updatedData = {
                    stock: stokSayi,
                    sold: satis
                }
                await sellProduct(item.id, updatedData)
            }
            dispatch(clearSelection())
            alert('Sifaris ugurla tamamlandi')
        }
        catch (error) {
            console.error('Satis-da xeta: ' + error)
        }
    }

    return (
        <section id='checkout_page'>
            <div className="container">
                <div className='shopping_info'>
                    <div className="cart_box">
                        {checkoutItems.length > 0 ? (
                            <>
                                <Link className='backToShopping' to={'/shoppingCart'}>
                                    <TbArrowBackUp />
                                    <span>Back to Cart</span>
                                </Link>
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
                                            <p className='counted_price'>Total: {(item.count * item.price).toFixed(2)} $</p>
                                            <div className='cart_item_count'>Count: {item.count}</div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )
                            : <p className='emptyCart_info'>There is nothing to pay for. Go back to see the quality again</p>}
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
                                <button onClick={completeOrder}>Complete payment</button>
                            </div>
                        </div>}
                </div>
            </div>
        </section >
    )
}

export default WithAuth(Checkout)
