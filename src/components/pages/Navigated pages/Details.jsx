import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../../redux/ByIdSlice'
import { CiHeart } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { addToCart } from '../../../redux/CartSlice';
import { addToWish, removeFromWish } from '../../../redux/WishSlice';
import { showAddToCart } from '../../Notify';

function Details() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { objById } = useSelector(state => state.objById);
    const { cartList } = useSelector(state => state.cartList)
    const { wishList } = useSelector(state => state.wishList)
    useEffect(() => {
        dispatch(getProductById(id))
    }, [dispatch, id])

    const inCart = useMemo(
        () => cartList.some(p => p.id == objById.id),
        [cartList, objById.id]
    )
    const isInWishList = useMemo(
        () => wishList.some(item => item.id === objById.id),
        [wishList, objById.id]
    )
    useEffect(() => {
        document.title = objById.title
    }, [objById])

    return (
        <div className="detail_page">
            <div className='container'>
                {objById && (
                    <div className='product_detail'>
                        <div className="product_detail_img">
                            <img src={objById.images && objById.images[0]} alt="" />
                            <div className="wishIcon">
                                {isInWishList
                                    ? <IoMdHeart style={{ cursor: 'pointer' }} onClick={() => dispatch(removeFromWish(objById.id))} />
                                    : <IoMdHeartEmpty style={{ cursor: 'pointer' }} onClick={() => dispatch(addToWish(objById))} />
                                }
                            </div>
                        </div>
                        <div className="product_detail_info">
                            <h3 className='product_ditail_category'>{objById.category}</h3>
                            <h2 className='product_datail_name'>{objById.title}</h2>
                            <p className='product_datail_price'>{objById.price} $</p>
                            <p className='product_detail_stock'>Stock: {objById.stock}</p>
                            <p className='product_detail_description'>{objById.description}</p>
                            <div className="detail_btns">
                                {inCart
                                    ? <Link to={'/shoppingCart'} className='go_to_cart' >Go to Cart</Link>
                                    : <button className='add_to_cart' onClick={() => {
                                        dispatch(addToCart(objById)),
                                            showAddToCart()
                                    }}>Add to Cart</button>}
                                <button className='fav_btn' onClick={() => dispatch(addToWish(objById))} >
                                    <span>Favorite</span>
                                    <div className="fav_btn_icon">
                                        <CiHeart />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Details
