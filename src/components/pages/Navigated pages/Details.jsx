import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../redux/ByIdSlice'
import { CiHeart } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { addToCart } from '../../../redux/CartSlice';

function Details() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { objById } = useSelector(state => state.objById)
    const [wishLis, setWishList] = useState([])
    useEffect(() => {
        dispatch(getProductById(id))
    }, [dispatch, id])
    useEffect(() => {
        const isWishList = JSON.parse(localStorage.getItem('wishList')) || []
        setWishList(isWishList)
    }, [])
    function addToWish(obj) {
        const localWishList = JSON.parse(localStorage.getItem('wishList')) || []
        const wishVar = localWishList.some(item => item.id == obj.id)
        if (!wishVar) {
            const wishItem = {
                id: id,
                title: objById.title,
                category: objById.category
            }
            const updatedWish = [...localWishList, wishItem]
            localStorage.setItem('wishList', JSON.stringify(updatedWish))
            setWishList(updatedWish)
            console.log('Wish elave edildi: ' + updatedWish)
        }
        console.log('AGA')
    }
    function removeWish(obj) {
        const localWishList = JSON.parse(localStorage.getItem('wishList')) || []
        const updatedWish = localWishList.filter(item => item.id !== obj.id)
        localStorage.setItem('wishList', JSON.stringify(updatedWish))
        setWishList(updatedWish)
    }
    const isInWishList = wishLis.some(item => item.id == objById?.id)

    const dispatch2 = useDispatch()
    function addInCart() {
        dispatch2(addToCart(objById))
    }

    return (
        <div className="detail_page">
            <div className='container'>
                {objById && (
                    <div className='product_detail'>
                        <div className="product_detail_img">
                            <img src={objById.images && objById.images[0]} alt="" />
                            <div className="wishIcon">
                                {isInWishList
                                    ? <IoMdHeartEmpty style={{ cursor: 'pointer' }} onClick={() => addToWish(objById)} />
                                    : <IoMdHeart style={{ cursor: 'pointer' }} onClick={() => removeWish(objById)} />
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
                                <button className='add_to_cart' onClick={addInCart}>Add to Cart</button>
                                <button className='fav_btn'>
                                    <span>Favorite</span>
                                    <div className="fav_btn_icon">
                                        <CiHeart onClick={() => addToWish(objById)} />
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
